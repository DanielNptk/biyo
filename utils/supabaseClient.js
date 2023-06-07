import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ibyfozcgsorgphopczml.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlieWZvemNnc29yZ3Bob3Bjem1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0MTY1MzcsImV4cCI6MTk5OTk5MjUzN30.-HvmaPr8MxfOFFSQ9E29c0KZIsMMrwnr9u4HNPzO2hg';

export const supabase = createClient(supabaseUrl, supabaseKey);