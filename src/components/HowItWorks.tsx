
import WorkflowAnimation from "@/components/WorkflowAnimation";

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          How InstainKer Transforms Your Brand
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Watch how our AI agent builds your personal brand authority in four strategic steps
        </p>
      </div>

      <WorkflowAnimation />
    </section>
  );
};

export default HowItWorks;
