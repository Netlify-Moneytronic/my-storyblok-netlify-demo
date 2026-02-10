import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            {blok.headline}
          </h2>
          {blok.subheadline && (
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {blok.subheadline}
            </p>
          )}
          {blok.button_text && (
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              {blok.button_text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teaser;
