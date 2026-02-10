import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden" {...storyblokEditable(blok)}>
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(232,180,64,0.1) 35px, rgba(232,180,64,0.1) 36px)'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="max-w-4xl">
          <div className="w-16 h-0.5 bg-gold-400 mb-8"></div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            {blok.headline || "Building Wealth with Precision & Purpose"}
          </h1>
          <p className="text-lg md:text-xl mb-12 text-charcoal-300 max-w-2xl leading-relaxed font-light">
            {blok.subheadline || "Trusted by discerning investors for over two decades, we deliver bespoke financial strategies that protect and grow your legacy."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors duration-200">
              {blok.primary_button || "Start Your Journey"}
            </button>
            <button className="border border-charcoal-500 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:border-gold-400 hover:text-gold-400 transition-colors duration-200">
              {blok.secondary_button || "Our Approach"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-gold-500 via-gold-400 to-transparent"></div>
    </section>
  );
};

export default Hero;
