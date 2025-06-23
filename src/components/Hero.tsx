
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log('Waitlist signup:', email);

    try {
      const { error } = await supabase
        .from('waitlist_emails')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already registered",
            description: "This email is already on our waitlist. Thanks for your interest!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "Welcome to the waitlist! 🎉",
          description: "We'll notify you as soon as InstainKer launches. Get ready to transform your personal brand!",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error adding email to waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support if the problem persists.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white animate-fade-in">
          <Bell className="w-4 h-4 mr-2" />
          AI-Powered Personal Brand Transformation
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent animate-fade-in">
          Transform Your Personal Brand on LinkedIn
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
          Build a powerful personal brand with daily AI-driven LinkedIn content that establishes you as a thought leader in your industry. InstainKer automates your professional presence while you focus on growing your career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your professional email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-lg"
              disabled={isSubmitted || isLoading}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 px-8 transition-all duration-300 hover:scale-105"
              disabled={isSubmitted || isLoading}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Joined!
                </>
              ) : (
                <>
                  Join our waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>

        <p className="text-sm text-gray-500 mb-16">
          🚀 Be among the first 1000 to transform your personal brand with AI
        </p>
      </div>
    </section>
  );
};

export default Hero;
