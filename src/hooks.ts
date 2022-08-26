import type { Handle } from "@sveltejs/kit";
import { getCookieValue, supabaseClient } from "$lib/utils";
import { UserRepo } from "$lib/repos";

export const handle: Handle = async ({ event, resolve }) => {
  const cookie = event.request.headers.get("cookie");
  const userRepo = new UserRepo(supabaseClient);
  event.locals.userRepo = userRepo;
  const session = getCookieValue(cookie, "session");
  const refreshSession = getCookieValue(cookie, "refreshSession");

  let sessionCookie: string | undefined;
  let refreshCookie: string | undefined;
  if (session) {
    event.locals.user = await userRepo.findByAccessToken(session);
  } else {
    if (!refreshSession) {
      event.locals.user = null;
    } else {
      try {
        const result = await userRepo.refreshSession(refreshSession);
        event.locals.user = result.user;
        sessionCookie = result.sessionCookie;
        refreshCookie = result.refreshCookie;
      } catch (error) {
        event.locals.user = null;
      }
    }
  }

  const response = await resolve(event);
  if (sessionCookie && refreshCookie) {
    response.headers.set("Set-Cookie", `${sessionCookie}, ${refreshCookie}`);
  }
  return response;
};
