
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, TrendingUp, Target, CheckCircle, Briefcase, UserCheck, Rocket, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const Features = () => {
  const [activeSegment, setActiveSegment] = useState("job-seekers");

  const segments = [
    {
      id: "job-seekers",
      title: "Job Seekers",
      icon: <Briefcase className="w-5 h-5" />,
      benefits: [
        "Get discovered by top recruiters with AI-optimized profiles",
        "Boost your visibility in job search results",
        "Craft a compelling \"About Me\" section in minutes",
        "Increase profile views and recruiter messages"
      ]
    },
    {
      id: "professionals",
      title: "Working Professionals",
      icon: <UserCheck className="w-5 h-5" />,
      benefits: [
        "Position yourself as a domain expert",
        "Get more recognition inside and outside your company",
        "Share insights to build thought leadership",
        "Get consistent post ideas to stay relevant"
      ]
    },
    {
      id: "entrepreneurs",
      title: "Entrepreneurs",
      icon: <Rocket className="w-5 h-5" />,
      benefits: [
        "Attract clients, collaborators & partners organically",
        "Build trust and credibility for your venture",
        "Use your profile to generate inbound leads",
        "Position yourself as a founder thought leader"
      ]
    },
    {
      id: "startups",
      title: "Startups Raising Funds",
      icon: <DollarSign className="w-5 h-5" />,
      benefits: [
        "Create an investor-friendly founder profile",
        "Highlight metrics, traction, and growth story",
        "Attract inbound VC and angel interest",
        "Post milestone updates that generate buzz"
      ]
    }
  ];

  // Auto-cycle through segments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment(prev => {
        const currentIndex = segments.findIndex(segment => segment.id === prev);
        const nextIndex = (currentIndex + 1) % segments.length;
        return segments[nextIndex].id;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const activeSegmentData = segments.find(segment => segment.id === activeSegment);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          💼 Who is this for?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
          🚀 Powerful LinkedIn Branding Tailored to Your Goals
        </p>
        <p className="text-lg text-gray-500">
          🎯 Benefits automatically cycle through different segments
        </p>
      </div>

      {/* Segment Indicators */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeSegment === segment.id
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {segment.icon}
            <span>{segment.title}</span>
          </div>
        ))}
      </div>

      {/* Active Segment Benefits */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            🔹 Benefits for {activeSegmentData?.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {activeSegmentData?.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm transition-all duration-300 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl">Strategic Timing</CardTitle>
            <CardDescription className="text-gray-600">
              Post at optimal times when your audience is most engaged, building consistent brand visibility
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl">Thought Leadership</CardTitle>
            <CardDescription className="text-gray-600">
              Share insights on trending industry topics, positioning you as a forward-thinking professional
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl">Brand Authenticity</CardTitle>
            <CardDescription className="text-gray-600">
              Every post reflects your unique voice and expertise, maintaining authentic personal brand representation
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default Features;
