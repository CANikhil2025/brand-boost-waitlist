
import { Badge } from "@/components/ui/badge";
import AnimatedLogo from "@/components/AnimatedLogo";
import Hero from "@/components/Hero";
import VideoIntro from "@/components/VideoIntro";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <AnimatedLogo />
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700">
            Coming Soon
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Video Introduction Section */}
      <VideoIntro />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features Section */}
      <Features />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
