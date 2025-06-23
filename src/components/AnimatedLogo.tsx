
const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <img 
          src="/lovable-uploads/b324377a-3e6f-4d88-8446-31c2832830b7.png" 
          alt="InstainKer Logo" 
          className="w-12 h-12 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]" />
      </div>
      <span className="text-3xl font-bold text-[#0077B5]">
        InstainKer
      </span>
    </div>
  );
};

export default AnimatedLogo;
