import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Testimonials = ({ blok }) => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-brand-50/30 via-brand-50/50 to-brand-50/40" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            {blok.headline || "Loved by marketing teams"}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {blok.subheadline || "See how companies like yours are using Elevate to transform their marketing and drive real growth."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.testimonials?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          )) || (
            <>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"Elevate completely changed how our marketing team operates. We've seen a 3x increase in qualified leads within the first quarter."</p>
                <div className="flex items-center gap-3 pt-5 border-t border-brand-100">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-semibold text-sm">
                    SK
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Sarah Kim</p>
                    <p className="text-gray-400 text-sm">VP Marketing, TechFlow</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"The automation features alone saved our team 20 hours per week. The analytics dashboard gives us clarity we never had before."</p>
                <div className="flex items-center gap-3 pt-5 border-t border-brand-100">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-sm">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Marcus Rivera</p>
                    <p className="text-gray-400 text-sm">CMO, GrowthLab</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"Simple, powerful, and beautifully designed. Elevate is the only marketing tool our team actually enjoys using every day."</p>
                <div className="flex items-center gap-3 pt-5 border-t border-brand-100">
                  <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-700 font-semibold text-sm">
                    AP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Aisha Patel</p>
                    <p className="text-gray-400 text-sm">Head of Growth, NexaStart</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
