
import { Brain, Sparkles } from "lucide-react";

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center relative overflow-hidden">
          <Brain className="w-5 h-5 text-white animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]" />
        </div>
        <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        InstainKer
      </span>
    </div>
  );
};

export default AnimatedLogo;
