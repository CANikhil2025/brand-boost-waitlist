
import AnimatedLogo from "@/components/AnimatedLogo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <AnimatedLogo className="text-white [&>div>span]:text-white [&>div>span]:bg-gradient-to-r [&>div>span]:from-blue-400 [&>div>span]:to-indigo-400 [&>div>span]:bg-clip-text [&>div>span]:text-transparent" />
        </div>
        <p className="text-gray-400 mb-4">
          Transform your personal brand with intelligent LinkedIn automation
        </p>
        <p className="text-sm text-gray-500">
          © 2024 InstainKer. All rights reserved. | Built for ambitious professionals.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
