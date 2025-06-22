
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, TrendingUp, Target, CheckCircle, Users, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          Why Leaders Choose InstainKer
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build thought leadership and establish your professional authority with consistent, strategic content
        </p>
      </div>

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

      {/* Additional Benefits */}
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
