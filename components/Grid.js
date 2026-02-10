import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <section className="py-24 bg-brand-50/40" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-6">
        {blok.headline && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">{blok.headline}</h2>
            {blok.subheadline && (
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">{blok.subheadline}</p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.columns.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
