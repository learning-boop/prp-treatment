import { useEffect, useRef, useState } from 'react';
import { FadeIn } from '../hooks/useFadeIn';

function CountUp({ target, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const isFloat = target % 1 !== 0;
        let cur = 0;
        const dur = 1600;
        const step = target / (dur / 16);
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) {
            setVal(isFloat ? target.toFixed(1) : Math.floor(target).toLocaleString());
            clearInterval(t);
          } else {
            setVal(isFloat ? cur.toFixed(1) : Math.floor(cur).toLocaleString());
          }
        }, 16);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-inner">
        <FadeIn>
          <div className="text-center">
            <div className="stat-n"><CountUp target={3200} />+</div>
            <div className="stat-l">Treatments Performed</div>
          </div>
        </FadeIn>
        <div className="stat-sep" />
        <FadeIn delay={0.1}>
          <div className="text-center">
            <div className="stat-n"><CountUp target={98} />%</div>
            <div className="stat-l">Client Satisfaction</div>
          </div>
        </FadeIn>
        <div className="stat-sep" />
        <FadeIn delay={0.2}>
          <div className="text-center">
            <div className="stat-n"><CountUp target={15} />+</div>
            <div className="stat-l">Years Excellence</div>
          </div>
        </FadeIn>
        <div className="stat-sep" />
        <FadeIn delay={0.3}>
          <div className="text-center">
            <div className="stat-n"><CountUp target={4.9} /><span style={{fontFamily:'var(--serif)',fontSize:'2rem'}}>★</span></div>
            <div className="stat-l">Average Review</div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
