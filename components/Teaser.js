import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <section className="py-24 bg-charcoal-50" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-8"></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mb-8 leading-tight">
            {blok.headline}
          </h2>
          {blok.subheadline && (
            <p className="text-lg text-charcoal-500 mb-12 leading-relaxed">
              {blok.subheadline}
            </p>
          )}
          {blok.button_text && (
            <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors duration-200">
              {blok.button_text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teaser;
