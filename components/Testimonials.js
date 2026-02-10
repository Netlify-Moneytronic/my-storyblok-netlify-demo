import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Testimonials = ({ blok }) => {
  return (
    <section className="py-24 bg-charcoal-50" id="testimonials" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="w-12 h-0.5 bg-gold-500 mb-6"></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {blok.headline || "Client Perspectives"}
          </h2>
          <p className="text-lg text-charcoal-500 leading-relaxed">
            {blok.subheadline || "The trust of our clients is the foundation of everything we do. Hear from those whose financial futures we've helped shape."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.testimonials?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          )) || (
            <>
              <div className="bg-white border border-charcoal-200 p-10">
                <div className="mb-8">
                  <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-charcoal-600 mb-8 leading-relaxed">
                  "Mariner Finance transformed our approach to wealth preservation. Their strategic insight and unwavering dedication have been instrumental in securing our family's financial future."
                </p>
                <div className="border-t border-charcoal-200 pt-6">
                  <p className="font-semibold text-navy-800">James Harrington</p>
                  <p className="text-charcoal-400 text-sm mt-1">Chairman, Harrington Holdings</p>
                </div>
              </div>
              <div className="bg-white border border-charcoal-200 p-10">
                <div className="mb-8">
                  <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-charcoal-600 mb-8 leading-relaxed">
                  "In over fifteen years of partnership, Mariner Finance has consistently demonstrated exceptional judgment. Their risk-adjusted returns speak for themselves."
                </p>
                <div className="border-t border-charcoal-200 pt-6">
                  <p className="font-semibold text-navy-800">Victoria Chen</p>
                  <p className="text-charcoal-400 text-sm mt-1">CEO, Pacific Ventures Group</p>
                </div>
              </div>
              <div className="bg-white border border-charcoal-200 p-10">
                <div className="mb-8">
                  <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-charcoal-600 mb-8 leading-relaxed">
                  "The estate planning framework they developed for us was nothing short of masterful. Every detail was considered, every contingency addressed."
                </p>
                <div className="border-t border-charcoal-200 pt-6">
                  <p className="font-semibold text-navy-800">Robert Ashford III</p>
                  <p className="text-charcoal-400 text-sm mt-1">Founder, Ashford Family Office</p>
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
