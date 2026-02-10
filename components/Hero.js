import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="relative bg-gradient-to-b from-brand-100 via-brand-50 to-brand-50/30 pt-24 pb-20 overflow-hidden" {...storyblokEditable(blok)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-200/30 rounded-full blur-3xl -z-0"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-200/20 rounded-full blur-3xl -z-0"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
          <span className="text-sm font-medium text-brand-700">Now available for teams of all sizes</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
          {blok.headline || (
            <>Grow your brand with<br /><span className="text-brand-600">smarter marketing</span></>
          )}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {blok.subheadline || "The all-in-one marketing platform that helps you attract, engage, and convert your audience with data-driven strategies."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 text-base font-semibold rounded-lg shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 transition-all w-full sm:w-auto">
            {blok.primary_button || "Get started for free"}
          </button>
          <button className="text-gray-700 hover:text-gray-900 px-8 py-3.5 text-base font-semibold rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {blok.secondary_button || "Watch demo"}
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Free 14-day trial
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            No credit card required
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
