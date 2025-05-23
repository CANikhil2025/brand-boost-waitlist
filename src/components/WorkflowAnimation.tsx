
import { useState, useEffect } from 'react';
import { Bell, TrendingUp, MessageSquare, Send, ArrowRight, CheckCircle } from "lucide-react";

const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Bell,
      title: "Daily Notification",
      description: "Push notification sent at your preferred time",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "AI Research",
      description: "Analyzes trending LinkedIn topics",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Content Creation",
      description: "Drafts compelling post for approval",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Send,
      title: "Auto-Post",
      description: "Posts directly to your LinkedIn",
      color: "from-pink-600 to-red-600"
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;
          const isCompleted = activeStep > index;
          
          return (
            <div key={index} className="flex flex-col items-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-300">
                  <div 
                    className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                      isCompleted ? 'w-full' : isActive ? 'w-1/2 animate-pulse' : 'w-0'
                    }`}
                  />
                </div>
              )}
              
              {/* Step Circle */}
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center relative transition-all duration-500 transform
                ${isActive ? 'scale-110 shadow-lg' : 'scale-100'}
                ${isCompleted ? `bg-gradient-to-r ${step.color}` : 
                  isActive ? `bg-gradient-to-r ${step.color} animate-pulse` : 
                  'bg-gray-200'}
              `}>
                {isCompleted ? (
                  <CheckCircle className="w-8 h-8 text-white" />
                ) : (
                  <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                )}
                
                {/* Pulse effect for active step */}
                {isActive && (
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 animate-ping`} />
                )}
              </div>
              
              {/* Step Content */}
              <div className="text-center mt-4 max-w-xs">
                <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                  isActive ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {step.description}
                </p>
              </div>
              
              {/* Step Number */}
              <div className={`
                absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white
                ${isCompleted || isActive ? `bg-gradient-to-r ${step.color}` : 'bg-gray-400'}
              `}>
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= activeStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
