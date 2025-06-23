
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Video, Play, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ActiveVideo {
  id: string;
  file_path: string;
  file_name: string;
}

const VideoIntro = () => {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActiveVideo();
  }, []);

  const fetchActiveVideo = async () => {
    try {
      const { data, error } = await supabase
        .from('intro_videos')
        .select('id, file_path, file_name')
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        throw error;
      }

      setActiveVideo(data || null);
    } catch (error) {
      console.error('Error fetching active video:', error);
    } finally {
      setLoading(false);
    }
  };

  const getVideoUrl = (filePath: string) => {
    const { data } = supabase.storage
      .from('videos')
      .getPublicUrl(filePath);
    return data.publicUrl;
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-6 bg-[#0077B5] text-white animate-fade-in">
          <Video className="w-4 h-4 mr-2" />
          See InstainKer in Action
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-[#0077B5] bg-clip-text text-transparent">
          Watch How AI Transforms Your LinkedIn Presence
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover how InstainKer creates compelling content that builds your personal brand and establishes thought leadership in just minutes.
        </p>

        <div className="relative bg-[#0077B5] rounded-2xl p-8 shadow-2xl">
          <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
            {loading ? (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-white">Loading video...</p>
                </div>
              </div>
            ) : activeVideo ? (
              <video 
                src={getVideoUrl(activeVideo.file_path)}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster=""
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold mb-2">Demo Video Coming Soon</p>
                  <p className="text-gray-300 text-sm">See how InstainKer builds your personal brand</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-white text-lg mb-4">
              ⚡ Watch InstainKer transform your LinkedIn presence
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[#cceaff] text-sm">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                AI Content Generation
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Brand Voice Matching
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Automated Posting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
