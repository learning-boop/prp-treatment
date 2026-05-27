
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';

const results = [
  {
    id: 1,
    title: 'PRP Hair Restoration',
    description:
      'Improvement in hair density and reduced visible thinning after multiple PRP sessions.',
    before:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'PRP Under Eye Rejuvenation',
    description:
      'Reduction in tired-looking under-eyes and improved skin quality.',
    before:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'PRP Skin Rejuvenation',
    description:
      'Improved texture, glow and smoother skin appearance following treatment.',
    before:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Results() {
  return (
    <>
      <SEO
        title="PRP Before & After Results Newcastle | PRP Treatment UK"
        description="View PRP treatment before and after results for hair restoration, skin rejuvenation and under-eye PRP in Newcastle."
      />

      <section className="bg-black text-white min-h-screen py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-[#C6A55C] text-sm mb-4">
              Clinical Transformations
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
              PRP Before & After Results
            </h1>

            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Explore visible improvements following doctor-led PRP treatments for
              hair restoration, skin rejuvenation and facial revitalisation.
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="space-y-28">
            {results.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Images */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Before */}
                  <div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10">
                    <img
                      src={item.before}
                      alt={`${item.title} before treatment`}
                      className="w-full h-[420px] object-cover"
                      loading="lazy"
                    />

                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-sm tracking-wide border border-white/10">
                      BEFORE
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-[#C6A55C]/20">
                    <img
                      src={item.after}
                      alt={`${item.title} after treatment`}
                      className="w-full h-[420px] object-cover"
                      loading="lazy"
                    />

                    <div className="absolute top-4 left-4 bg-[#C6A55C]/90 text-black px-4 py-2 rounded-full text-sm tracking-wide font-medium">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C6A55C]/20 bg-[#C6A55C]/10 text-[#C6A55C] text-sm tracking-wide mb-6">
                    Verified Treatment Journey
                  </div>

                  <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
                      <p className="text-white/50 text-sm uppercase tracking-wide mb-2">
                        Sessions
                      </p>
                      <h3 className="text-3xl font-light">3–4</h3>
                    </div>

                    <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
                      <p className="text-white/50 text-sm uppercase tracking-wide mb-2">
                        Downtime
                      </p>
                      <h3 className="text-3xl font-light">Minimal</h3>
                    </div>
                  </div>

                  <button className="px-8 py-4 rounded-full bg-[#C6A55C] text-black hover:scale-105 transition duration-300 font-medium tracking-wide">
                    Book Consultation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-24 border-t border-white/10 pt-10 text-center">
            <p className="text-white/40 text-sm max-w-4xl mx-auto leading-relaxed">
              Individual results vary depending on skin condition, age, lifestyle,
              hair loss severity and treatment plan. Images shown are representative
              examples for design purposes. Replace with real clinic-approved
              patient photography before production launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
```

---

# Add Route

Inside your router:

```jsx
import Results from './pages/Results';
```

```jsx
<Route path="/results" element={<Results />} />
```

---

# Recommended Real Clinic Image Sources

Replace demo images with:

* Real clinic before/after images
* Patient-consented PRP treatment photography
* Hair restoration progress images
* Under-eye rejuvenation images
* PRP facial skin improvement images

Recommended image size:

* 1200×1600
* WebP format
* Under 250KB each

---

# SEO Advantages Of This Page

This page helps rank for:

* PRP Before and After Newcastle
* PRP Results UK
* PRP Hair Results
* Vampire Facial Before After
* PRP Skin Rejuvenation Results
* PRP Hair Loss Improvement

Very useful for:

* User trust
* Conversion rate
* Google image search
* Local SEO
* Luxury clinic branding
