
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdrdqsiujupputofbqpa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcmRxc2l1anVwcHV0b2ZicXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNTU5MjgsImV4cCI6MjA2MzYzMTkyOH0.v53i-mSH-FQlbBo9_OO4kLoO3yQJ4XLE4qI25-igy-U'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
