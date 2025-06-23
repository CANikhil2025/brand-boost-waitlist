
-- Create a storage bucket for videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('videos', 'videos', true);

-- Create RLS policies for the videos bucket
-- Policy to allow only specific users to upload videos (you'll need to replace with your actual user ID)
CREATE POLICY "Admin can upload videos" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'videos' 
  AND auth.uid()::text = 'YOUR_USER_ID_HERE'  -- Replace with your actual user ID
);

-- Policy to allow everyone to view videos
CREATE POLICY "Anyone can view videos" ON storage.objects
FOR SELECT USING (bucket_id = 'videos');

-- Policy to allow admin to update videos
CREATE POLICY "Admin can update videos" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'videos' 
  AND auth.uid()::text = 'YOUR_USER_ID_HERE'  -- Replace with your actual user ID
);

-- Policy to allow admin to delete videos
CREATE POLICY "Admin can delete videos" ON storage.objects
FOR DELETE USING (
  bucket_id = 'videos' 
  AND auth.uid()::text = 'YOUR_USER_ID_HERE'  -- Replace with your actual user ID
);

-- Create a table to store video metadata
CREATE TABLE public.intro_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  file_path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT false,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on intro_videos table
ALTER TABLE public.intro_videos ENABLE ROW LEVEL SECURITY;

-- Policy to allow admin to manage videos
CREATE POLICY "Admin can manage intro videos" ON public.intro_videos
FOR ALL USING (auth.uid()::text = 'YOUR_USER_ID_HERE');  -- Replace with your actual user ID

-- Policy to allow everyone to view active videos
CREATE POLICY "Anyone can view active intro videos" ON public.intro_videos
FOR SELECT USING (is_active = true);
