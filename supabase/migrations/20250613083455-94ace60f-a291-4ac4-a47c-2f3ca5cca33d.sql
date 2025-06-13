
-- Create a table for waitlist emails
CREATE TABLE public.waitlist_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the table
ALTER TABLE public.waitlist_emails ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert emails (public waitlist)
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist_emails 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading emails (for admin purposes)
CREATE POLICY "Anyone can view waitlist emails" 
  ON public.waitlist_emails 
  FOR SELECT 
  USING (true);
