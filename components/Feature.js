import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div className="bg-white p-10 group hover:bg-navy-900 transition-colors duration-300" {...storyblokEditable(blok)}>
    <div className="w-12 h-12 border border-gold-400 flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-300">
      <svg className="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-navy-800 mb-3 group-hover:text-white transition-colors duration-300">{blok.name}</h3>
    {blok.description && (
      <p className="text-charcoal-500 leading-relaxed group-hover:text-charcoal-300 transition-colors duration-300">{blok.description}</p>
    )}
  </div>
);

export default Feature;
