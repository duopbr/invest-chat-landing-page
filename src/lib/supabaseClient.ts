import { createClient } from '@supabase/supabase-js'

// Substitua pelos seus dados do Supabase
const supabaseUrl = 'https://nlfpajonnkbgccaptayl.supabase.co' // COLOQUE AQUI A URL DO SEU PROJETO SUPABASE
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZnBham9ubmtiZ2NjYXB0YXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwODIxMDQsImV4cCI6MjA2MjY1ODEwNH0.HCXVSIXIt6DesjBMjjdVyqd7yz8QsEnMD_rzu8dDilc' // COLOQUE AQUI A CHAVE ANON PÚBLICA DO SUPABASE

// Crie e exporte o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey) 