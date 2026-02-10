import { storyblokEditable } from "@storyblok/react";

const CTA = ({ blok }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          {blok.headline || "Ready to Get Started?"}
        </h2>
        <p className="text-xl mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed">
          {blok.subheadline || "Join thousands of businesses already using our platform to accelerate their growth and success."}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            {blok.primary_button || "Start Free Trial"}
          </button>
          <button className="border-2 border-gray-400 text-gray-200 px-10 py-4 font-bold text-lg rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            {blok.secondary_button || "Contact Sales"}
          </button>
        </div>
        <p className="text-sm text-blue-300 mt-8">
          {blok.disclaimer || "No credit card required • 14-day free trial • Cancel anytime"}
        </p>
      </div>
    </section>
  );
};

export default CTA;
