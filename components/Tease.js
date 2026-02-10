import { storyblokEditable } from "@storyblok/react";

const Tease = ({ blok }) => {
  return (
    <section className="py-24 bg-brand-50/50" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          {blok.headline}
        </h2>
        {blok.subheadline && (
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {blok.subheadline}
          </p>
        )}
      </div>
    </section>
  );
};

export default Tease;
