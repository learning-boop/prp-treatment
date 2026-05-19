import { FadeIn } from '../hooks/useFadeIn';

const testimonials = [
  {
    text: '"Nothing compares to Dr. Matla\'s precision and care. My skin looks the best it has in twenty years. I leave every appointment feeling like royalty."',
    author: 'C. HARTLEY',
    loc: 'Kensington, London',
  },
  {
    text: '"The PRP programme gave me noticeable hair regrowth and, more importantly, my confidence back. Dr. Matla is in a class of his own."',
    author: 'J. PEMBERTON',
    loc: 'Chelsea, London',
  },
  {
    text: '"Subtle, elegant and completely natural — exactly what I wanted. The clinic is immaculate. I wouldn\'t go anywhere else in London."',
    author: 'LADY A. FORSYTHE',
    loc: 'Surrey',
  },
];

export default function Testimonials() {
  return (
    <section className="sec testi" id="testimonials">
      <div className="testi-bg" />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <FadeIn>
          <div className="text-center">
            <div className="eyebrow center">CLIENT VOICES</div>
            <h2 className="sh">Words of <em>Transformation</em></h2>
            <div className="gd center" />
          </div>
        </FadeIn>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="tc">
                <div className="tc-stars">★ ★ ★ ★ ★</div>
                <p className="tc-text">{t.text}</p>
                <div className="tc-author">{t.author}</div>
                <div className="tc-loc">{t.loc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
