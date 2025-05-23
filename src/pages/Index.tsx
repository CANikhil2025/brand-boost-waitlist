
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Sparkles, TrendingUp, Users, Target, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Waitlist signup:', email);
    setIsSubmitted(true);
    toast({
      title: "Welcome to the waitlist! 🎉",
      description: "We'll notify you as soon as we launch. Get ready to transform your LinkedIn presence!",
    });
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Linkedin className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BrandBoost AI
            </span>
          </div>
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700">
            Coming Soon
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Personal Branding
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent animate-fade-in">
            Elevate Your LinkedIn Presence with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Transform your professional brand with our intelligent AI agent that crafts compelling content, 
            optimizes your profile, and amplifies your industry influence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your professional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-lg"
                disabled={isSubmitted}
              />
              <Button 
                type="submit" 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 px-8 transition-all duration-300 hover:scale-105"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Joined!
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <p className="text-sm text-gray-500 mb-16">
            🚀 Be among the first 1000 to get early access and exclusive features
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Why Professionals Choose BrandBoost AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI understands your industry, audience, and goals to create authentic content that drives real engagement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">AI Content Creation</CardTitle>
              <CardDescription className="text-gray-600">
                Generate engaging posts, articles, and comments tailored to your voice and industry expertise
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Profile Optimization</CardTitle>
              <CardDescription className="text-gray-600">
                Optimize your headline, summary, and experience sections for maximum visibility and impact
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Strategic Networking</CardTitle>
              <CardDescription className="text-gray-600">
                Identify key connections and craft personalized outreach messages that get responses
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Transform Your Professional Presence
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-gray-700">10x your content engagement rates</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-gray-700">Save 5+ hours per week on LinkedIn</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-gray-700">Build authentic industry authority</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-gray-700">Generate qualified leads consistently</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-3" />
                <span className="text-2xl font-bold">Early Access Benefits</span>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-3" />
                  Free premium features for 3 months
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-3" />
                  Priority customer support
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-3" />
                  Exclusive strategy consultations
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-3" />
                  Beta feature access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your LinkedIn Game?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already transforming their careers with AI-powered personal branding
          </p>
          
          {!isSubmitted && (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your professional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-lg bg-white/90 border-0"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8 font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          )}
          
          {isSubmitted && (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-2xl text-white font-semibold">You're on the list! 🎉</p>
              <p className="text-blue-100 mt-2">We'll be in touch soon with exclusive updates</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Linkedin className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">BrandBoost AI</span>
          </div>
          <p className="text-gray-400 mb-4">
            Elevating professional brands with intelligent AI solutions
          </p>
          <p className="text-sm text-gray-500">
            © 2024 BrandBoost AI. All rights reserved. | Built for ambitious professionals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
