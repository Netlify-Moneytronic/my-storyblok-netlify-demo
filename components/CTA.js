import { storyblokEditable } from "@storyblok/react";

const CTA = ({ blok }) => {
  return (
    <section className="py-24 bg-brand-600 relative overflow-hidden" {...storyblokEditable(blok)}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-300 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
          {blok.headline || "Ready to elevate your marketing?"}
        </h2>
        <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {blok.subheadline || "Join thousands of marketing teams who use Elevate to drive growth, engage audiences, and deliver measurable results."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-brand-700 px-8 py-3.5 font-semibold text-base rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-50 transition-all">
            {blok.primary_button || "Start your free trial"}
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-3.5 font-semibold text-base rounded-lg hover:bg-white/10 transition-all">
            {blok.secondary_button || "Talk to sales"}
          </button>
        </div>
        <p className="text-sm text-brand-200 mt-8">
          {blok.disclaimer || "No credit card required \u00b7 14-day free trial \u00b7 Cancel anytime"}
        </p>
      </div>
    </section>
  );
};

export default CTA;
