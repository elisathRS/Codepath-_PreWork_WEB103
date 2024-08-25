import { createClient } from '@supabase/supabase-js';

const URL = 'https://bdcugxfwimgiiopucqlr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkY3VneGZ3aW1naWlvcHVjcWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0NDI0OTAsImV4cCI6MjA0MDAxODQ5MH0.NQflGqS1e4O9iYdAqaXJnvPLaG0WbJh3QA0CWnII84M';
export const supabase = createClient(URL, API_KEY);