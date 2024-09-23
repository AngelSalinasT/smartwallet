import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ujsebxqiijwfntyjuczd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2VieHFpaWp3Zm50eWp1Y3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNTYyNzcsImV4cCI6MjA0MjYzMjI3N30.cDdDY5pkNWLz5PaG5yRGZ1T_9WX0fdcrZRT6mUYs05w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})