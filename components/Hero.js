import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white py-32 overflow-hidden" {...storyblokEditable(blok)}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
          {blok.headline || "Transform Your Business Today"}
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-blue-200 max-w-4xl mx-auto leading-relaxed">
          {blok.subheadline || "Discover the power of innovation with our cutting-edge solutions designed to accelerate your growth and success."}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            {blok.primary_button || "Get Started Free"}
          </button>
          <button className="border-2 border-gray-400 text-gray-200 px-10 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            {blok.secondary_button || "Watch Demo"}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
