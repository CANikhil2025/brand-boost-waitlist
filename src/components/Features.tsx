
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, TrendingUp, Target, CheckCircle, Users, Zap, Briefcase, UserCheck, Rocket, DollarSign } from "lucide-react";
import { useState } from "react";

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
        "Increase profile views and recruiter messages",
        "Automatically generate a resume from your LinkedIn"
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
        "Get consistent post ideas to stay relevant",
        "Showcase achievements to attract new roles"
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
        "Position yourself as a founder thought leader",
        "Consistently share business updates and insights"
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
        "Post milestone updates that generate buzz",
        "Align your personal brand with your startup's vision"
      ]
    }
  ];

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
          🎯 Choose your segment to see personalized benefits
        </p>
      </div>

      {/* Segment Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {segments.map((segment) => (
          <button
            key={segment.id}
            onClick={() => setActiveSegment(segment.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeSegment === segment.id
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {segment.icon}
            <span>{segment.title}</span>
          </button>
        ))}
      </div>

      {/* Active Segment Benefits */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            🔹 Benefits for {activeSegmentData?.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {activeSegmentData?.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
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

      {/* Brand Builder Benefits */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Effortless Brand Building
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-lg text-gray-700">Establish thought leadership in your industry</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-lg text-gray-700">Build a consistent professional presence</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-lg text-gray-700">Attract career opportunities and partnerships</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-lg text-gray-700">Save 30+ minutes daily while growing your influence</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 mr-3" />
              <span className="text-2xl font-bold">Brand Builder Benefits</span>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <Zap className="w-5 h-5 mr-3" />
                Premium brand strategy features for 3 months
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 mr-3" />
                Personal brand audit and recommendations
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 mr-3" />
                Industry thought leadership insights
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 mr-3" />
                Beta access to advanced AI features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
