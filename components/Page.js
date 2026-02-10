import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Header from "./Header";
import Footer from "./Footer";

const Stats = () => (
  <section className="bg-navy-800 border-y border-navy-700">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-700">
        <div className="py-12 px-6 text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-gold-400 mb-2">$12.4B</p>
          <p className="text-charcoal-400 text-sm tracking-wide uppercase">Assets Managed</p>
        </div>
        <div className="py-12 px-6 text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-gold-400 mb-2">22+</p>
          <p className="text-charcoal-400 text-sm tracking-wide uppercase">Years of Excellence</p>
        </div>
        <div className="py-12 px-6 text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-gold-400 mb-2">1,200+</p>
          <p className="text-charcoal-400 text-sm tracking-wide uppercase">Client Families</p>
        </div>
        <div className="py-12 px-6 text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-gold-400 mb-2">98%</p>
          <p className="text-charcoal-400 text-sm tracking-wide uppercase">Client Retention</p>
        </div>
      </div>
    </div>
  </section>
);

const Page = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Header />
    <main>
      {blok.body.map((nestedBlok, index) => (
        <div key={nestedBlok._uid}>
          <StoryblokComponent blok={nestedBlok} />
          {index === 0 && <Stats />}
        </div>
      ))}
    </main>
    <Footer />
  </div>
);

export default Page;
