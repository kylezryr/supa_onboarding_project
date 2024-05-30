'use client'

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qmtathffzibghmpcvzag.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdGF0aGZmemliZ2htcGN2emFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5NzM4OTcsImV4cCI6MjAzMjU0OTg5N30.1_munjmgQOCU0HHs4O82kqmL4CxSFUciak_C-teKibo";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
