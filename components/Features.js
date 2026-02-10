import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Features = ({ blok }) => {
  return (
    <section className="py-24 bg-white" id="services" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="w-12 h-0.5 bg-gold-500 mb-6"></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {blok.headline || "Comprehensive Financial Services"}
          </h2>
          <p className="text-lg text-charcoal-500 leading-relaxed">
            {blok.subheadline || "From wealth management to estate planning, our integrated approach ensures every aspect of your financial life is expertly managed."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-200">
          {blok.features?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          )) || (
            <>
              <div className="bg-white p-10 group hover:bg-navy-900 transition-colors duration-300">
                <div className="w-12 h-12 border border-gold-400 flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3 group-hover:text-white transition-colors duration-300">Wealth Management</h3>
                <p className="text-charcoal-500 leading-relaxed group-hover:text-charcoal-300 transition-colors duration-300">Personalized portfolio strategies designed to preserve and grow your wealth across market cycles.</p>
              </div>
              <div className="bg-white p-10 group hover:bg-navy-900 transition-colors duration-300">
                <div className="w-12 h-12 border border-gold-400 flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3 group-hover:text-white transition-colors duration-300">Risk Advisory</h3>
                <p className="text-charcoal-500 leading-relaxed group-hover:text-charcoal-300 transition-colors duration-300">Comprehensive risk assessment and mitigation strategies to safeguard your assets and future.</p>
              </div>
              <div className="bg-white p-10 group hover:bg-navy-900 transition-colors duration-300">
                <div className="w-12 h-12 border border-gold-400 flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3 group-hover:text-white transition-colors duration-300">Estate Planning</h3>
                <p className="text-charcoal-500 leading-relaxed group-hover:text-charcoal-300 transition-colors duration-300">Strategic estate structures that ensure your legacy endures and your beneficiaries are protected.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
