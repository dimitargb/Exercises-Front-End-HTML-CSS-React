import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kgxfrgapcuscqhwuxywn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGZyZ2FwY3VzY3Fod3V4eXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNDc5MzgsImV4cCI6MjAzOTgyMzkzOH0.aToKhAEE6ZdJQClShuKR1XtRmcyZlpIQLJJH7RZ0zY0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
