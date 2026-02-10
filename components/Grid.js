import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <section className="py-24 bg-charcoal-50" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        {blok.headline && (
          <div className="max-w-3xl mb-20">
            <div className="w-12 h-0.5 bg-gold-500 mb-6"></div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mb-6">{blok.headline}</h2>
            {blok.subheadline && (
              <p className="text-lg text-charcoal-500 leading-relaxed">{blok.subheadline}</p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-200">
          {blok.columns.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
