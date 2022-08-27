import { error, type RequestHandler } from "@sveltejs/kit";
import { ApiRepo } from "$lib/repos";

const apiRepo = new ApiRepo();

const ERROR_MESSAGE = "Sorry! We could not access the API";
export const POST: RequestHandler = async ({ request }) => {
  const { link } = (await request.json()) as { link: string };
  try {
    const response = await apiRepo.getShortenLink(link);
    return new Response(JSON.stringify(response));
  } catch (_) {
    throw error(500, ERROR_MESSAGE);
  }
};
