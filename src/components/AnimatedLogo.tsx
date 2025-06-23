
const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <img 
          src="/lovable-uploads/b324377a-3e6f-4d88-8446-31c2832830b7.png" 
          alt="InstainKer Logo" 
          className="w-8 h-8 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        InstainKer
      </span>
    </div>
  );
};

export default AnimatedLogo;
