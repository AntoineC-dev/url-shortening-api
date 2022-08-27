import { writable } from "svelte/store";
import { LinksRepo, UserRepo } from "$lib/repos";
import { supabaseClient } from "$lib/utils";

const linksRepo = new LinksRepo();
const userRepo = new UserRepo();

export const links = writable<App.LinkStore>([]);

export const createLink = async (props: Pick<App.Link, "link" | "shorten_link">) => {
  const user = userRepo.getUser();
  if (!user) return;
  const data = await linksRepo.createLink({ user_id: user.id, ...props });
  if (!data) return;
  links.update((prev) => [...prev, data]);
};

export const updateLink = async (id: string, props: Partial<Omit<App.Link, "id">>) => {
  const user = userRepo.getUser();
  if (!user) return;
  links.update((prev) => {
    const index = prev.findIndex((link) => link.id === id);
    prev[index] = { ...prev[index], ...props };
    return prev;
  });
  await linksRepo.updateLink(id, props);
};

supabaseClient.auth.onAuthStateChange(async () => {
  const allLinks = await linksRepo.getAll();
  links.set(allLinks);
});
