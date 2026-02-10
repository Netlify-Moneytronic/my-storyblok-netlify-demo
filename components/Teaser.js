import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <section className="py-24 bg-brand-50/40" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            {blok.headline}
          </h2>
          {blok.subheadline && (
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              {blok.subheadline}
            </p>
          )}
          {blok.button_text && (
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 font-semibold text-base rounded-lg shadow-lg shadow-brand-600/25 hover:shadow-xl transition-all">
              {blok.button_text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teaser;
