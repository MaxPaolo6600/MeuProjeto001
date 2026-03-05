import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://dhocokkmmaffhzzaawuj.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_GI6YJxAvY2sj1KrCIqxU9w_6AJZI8Xa"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

