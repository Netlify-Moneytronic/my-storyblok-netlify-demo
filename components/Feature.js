import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div
    className="group relative p-8 rounded-2xl bg-white/70 border border-brand-100 hover:border-brand-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    {...storyblokEditable(blok)}
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-brand-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors duration-300">
      <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{blok.name}</h3>
    {blok.description && (
      <p className="text-gray-500 leading-relaxed text-sm">{blok.description}</p>
    )}
    <div className="mt-5 flex items-center text-brand-600 font-medium text-sm">
      <span>Learn more</span>
      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

export default Feature;
