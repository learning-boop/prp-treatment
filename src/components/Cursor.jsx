import { useEffect, useRef } from 'react';

export default function Cursor() {
  const outer = useRef(null);
  const inner = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (inner.current) {
        inner.current.style.left = e.clientX + 'px';
        inner.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (outer.current) {
        outer.current.style.left = pos.current.x + 'px';
        outer.current.style.top = pos.current.y + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={outer} className="cur" style={{ position: 'fixed', zIndex: 9999, pointerEvents: 'none' }}>
        <div className="cur-outer" />
      </div>
      <div ref={inner} className="cur" style={{ position: 'fixed', zIndex: 9999, pointerEvents: 'none' }}>
        <div className="cur-inner" />
      </div>
    </>
  );
}
