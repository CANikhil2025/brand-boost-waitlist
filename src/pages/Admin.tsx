
import VideoUpload from "@/components/VideoUpload";
import VideoManager from "@/components/VideoManager";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Video } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f3ff] via-white to-[#cceaff] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-gray-900 to-[#0077B5] bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-center text-gray-600">
            Manage intro videos for InstainKer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Upload Section */}
          <div>
            <VideoUpload />
          </div>

          {/* Management Section */}
          <div>
            <VideoManager />
          </div>
        </div>

        <Card className="mt-8 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Instructions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Video className="w-4 h-4 mt-0.5 text-blue-500" />
              <p>Upload videos in 1080x1920px (vertical) format for best results</p>
            </div>
            <div className="flex items-start gap-2">
              <Video className="w-4 h-4 mt-0.5 text-blue-500" />
              <p>Only one video can be active at a time - activating a new video will deactivate others</p>
            </div>
            <div className="flex items-start gap-2">
              <Video className="w-4 h-4 mt-0.5 text-blue-500" />
              <p>Maximum file size is 100MB per video</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
