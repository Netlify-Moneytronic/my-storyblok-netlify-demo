import { storyblokEditable } from "@storyblok/react";

const Tease = ({ blok }) => {
  return (
    <section className="py-24 bg-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-8"></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mb-8 leading-tight">
            {blok.headline}
          </h2>
          {blok.subheadline && (
            <p className="text-lg text-charcoal-500 max-w-3xl mx-auto leading-relaxed">
              {blok.subheadline}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tease;
