/**
 * LazyImage.jsx — PRP Treatment UK
 * ──────────────────────────────────────────────────────────────────────────────
 * Performant image component with:
 *  • Native lazy loading (loading="lazy")
 *  • WebP with PNG/JPG fallback via <picture>
 *  • Explicit width + height (prevents CLS)
 *  • Fade-in on load
 *  • Low-quality placeholder blur (optional)
 *  • Preload prop for LCP images
 *  • Alt text enforcement (required prop)
 *
 * Usage:
 *  <LazyImage
 *    src="/assets/treatments/prp-hair.jpg"
 *    webp="/assets/treatments/prp-hair.webp"   // optional
 *    alt="PRP hair treatment result — Newcastle"
 *    width={800}
 *    height={600}
 *    isLCP   // adds preload link to head for LCP optimisation
 *  />
 * ──────────────────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from 'react';

export default function LazyImage({
  src,
  webp,
  alt,                    // REQUIRED — always provide descriptive alt
  width,
  height,
  className = '',
  style = {},
  isLCP = false,          // set true for the largest contentful paint image
  loading,                // override; defaults to 'lazy' (or 'eager' if isLCP)
  decoding = 'async',
  fetchpriority,          // 'high' for LCP images
  placeholder,            // low-res placeholder URL for LQIP blur
  objectFit = 'cover',
  onLoad,
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // Preload LCP image
  useEffect(() => {
    if (!isLCP) return;
    const existingPreload = document.head.querySelector(`link[rel="preload"][href="${webp || src}"]`);
    if (existingPreload) return;

    const link = document.createElement('link');
    link.rel        = 'preload';
    link.as         = 'image';
    link.href       = webp || src;
    if (webp) link.type = 'image/webp';
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    return () => link.remove();
  }, [src, webp, isLCP]);

  // Fire onLoad if image is already cached
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  const resolvedLoading    = loading    || (isLCP ? 'eager' : 'lazy');
  const resolvedPriority   = fetchpriority || (isLCP ? 'high' : 'auto');

  const wrapStyle = {
    overflow: 'hidden',
    position: 'relative',
    ...(width  && { width:  `${width}px`  }),
    ...(height && { height: `${height}px` }),
    ...style,
  };

  const imgStyle = {
    width:      '100%',
    height:     '100%',
    objectFit,
    display:    'block',
    transition: 'opacity 0.4s ease',
    opacity:    loaded ? 1 : 0,
  };

  const placeholderStyle = placeholder ? {
    position:   'absolute',
    inset:      0,
    backgroundImage:  `url(${placeholder})`,
    backgroundSize:   'cover',
    backgroundPosition: 'center',
    filter:     'blur(20px)',
    transform:  'scale(1.05)',
    transition: 'opacity 0.4s ease',
    opacity:    loaded ? 0 : 1,
  } : null;

  return (
    <div style={wrapStyle} className={`lazy-image-wrap${className ? ` ${className}` : ''}`}>
      {placeholder && <div style={placeholderStyle} aria-hidden="true" />}

      {webp ? (
        <picture>
          <source srcSet={webp} type="image/webp" />
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={resolvedLoading}
            decoding={decoding}
            fetchpriority={resolvedPriority}
            style={imgStyle}
            onLoad={() => { setLoaded(true); onLoad?.(); }}
          />
        </picture>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={resolvedLoading}
          decoding={decoding}
          fetchpriority={resolvedPriority}
          style={imgStyle}
          onLoad={() => { setLoaded(true); onLoad?.(); }}
        />
      )}
    </div>
  );
}
