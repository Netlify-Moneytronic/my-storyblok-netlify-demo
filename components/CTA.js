import { storyblokEditable } from "@storyblok/react";

const CTA = ({ blok }) => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden" {...storyblokEditable(blok)}>
      {/* Subtle geometric accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-1/3 h-full" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(232,180,64,0.15) 35px, rgba(232,180,64,0.15) 36px)'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-8"></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            {blok.headline || "Begin Your Financial Journey"}
          </h2>
          <p className="text-lg text-charcoal-300 mb-12 leading-relaxed">
            {blok.subheadline || "Schedule a confidential consultation with our senior advisors to discuss your financial objectives and discover how we can help you achieve them."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors duration-200">
              {blok.primary_button || "Schedule Consultation"}
            </button>
            <button className="border border-charcoal-500 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:border-gold-400 hover:text-gold-400 transition-colors duration-200">
              {blok.secondary_button || "Download Overview"}
            </button>
          </div>
          <p className="text-sm text-charcoal-500 mt-8">
            {blok.disclaimer || "Confidential. No obligation. SEC-registered investment advisor."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
