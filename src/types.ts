import type { AuthChangeEvent, User } from "@supabase/supabase-js";

export interface Auth {
  user: User | null;
  status: AuthChangeEvent;
}
