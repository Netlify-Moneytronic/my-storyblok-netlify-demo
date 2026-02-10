import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Features = ({ blok }) => {
  return (
    <section id="features" className="py-28 bg-gradient-to-b from-brand-50 via-brand-50/60 to-brand-50/30 relative overflow-hidden" {...storyblokEditable(blok)}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-100 border border-brand-200 text-brand-700 text-sm font-semibold uppercase tracking-wider rounded-full mb-5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            {blok.headline || "Everything you need to grow"}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {blok.subheadline || "Powerful tools designed to help marketing teams work smarter, move faster, and deliver measurable results."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.features?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          )) || (
            <>
              {/* Campaign Analytics */}
              <div className="group relative p-8 rounded-2xl bg-white/70 border border-brand-100 hover:border-brand-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-brand-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Campaign Analytics</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Track performance across every channel with real-time dashboards and actionable insights that drive decisions.</p>
                <div className="mt-5 flex items-center text-brand-600 font-medium text-sm">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Audience Segmentation */}
              <div className="group relative p-8 rounded-2xl bg-white/70 border border-brand-100 hover:border-emerald-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Audience Segmentation</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Build precise audience segments based on behavior, demographics, and engagement to deliver personalized experiences.</p>
                <div className="mt-5 flex items-center text-emerald-600 font-medium text-sm">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Marketing Automation */}
              <div className="group relative p-8 rounded-2xl bg-white/70 border border-brand-100 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Automation</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Automate repetitive tasks, nurture leads at scale, and create workflows that convert prospects into loyal customers.</p>
                <div className="mt-5 flex items-center text-amber-600 font-medium text-sm">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
