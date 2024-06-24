import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xkgrgawixzhyxyeiqxwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ3JnYXdpeHpoeXh5ZWlxeHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMjM4MjgsImV4cCI6MjAzNDc5OTgyOH0.VKniR43udIO5Tz1znoU6Bmq6KwKGOvjTvbwxDMSx_mE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
