
import { Badge } from "@/components/ui/badge";
import { Video, Play, CheckCircle } from "lucide-react";

const VideoIntro = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white animate-fade-in">
          <Video className="w-4 h-4 mr-2" />
          See InstainKer in Action
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent">
          Watch How AI Transforms Your LinkedIn Presence
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover how InstainKer creates compelling content that builds your personal brand and establishes thought leadership in just minutes.
        </p>

        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl">
          <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
            {/* Video placeholder with play button */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="w-8 h-8 text-gray-800 ml-1" />
                </div>
                <p className="text-white text-lg font-semibold mb-2">Watch Demo Video</p>
                <p className="text-gray-300 text-sm">See how InstainKer builds your personal brand</p>
              </div>
            </div>
            
            {/* You can replace this with an actual video embed when ready */}
            {/* <iframe 
              className="w-full h-full"
              src="YOUR_VIDEO_URL"
              title="InstainKer Demo Video"
              allowFullScreen
            ></iframe> */}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-white text-lg mb-4">
              ⚡ 3-minute demo showing real LinkedIn content creation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-blue-100 text-sm">
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
