import { H3Event } from "h3";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

interface Coach {
  id: number;
  name: string;
  bio: string;
  img?: string;
  instagram_url?: string;
  twitter_url?: string;
  youtube_url?: string;
  created_at?: string;
}

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAnonKey = process.env.SUPABASE_KEY as string;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { data, error } = (await supabase
      .from("users_with_coach_role")
      .select(
        "id, name, bio, img, instagram_url, twitter_url, youtube_url, created_at"
      )
      .order("created_at", { ascending: true })) as {
      data: Coach[] | null;
      error: any;
    };

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  } catch (error: any) {
    return { error: error.message || "An unexpected error occurred" };
  }
});
