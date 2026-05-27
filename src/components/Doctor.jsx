import { FadeIn } from '../hooks/useFadeIn';

export default function Doctor() {
  return (
    <section className="sec doctor" id="doctor">
      <div className="wrap">
        <div className="doc-grid">
          <FadeIn>
            <div className="doc-frame">
              <img
                className="doc-img"
                src="https://drmatla.com/wp-content/uploads/2023/10/Dr-Matla.jpg"
                alt="Dr. Matla"
              />
              <div className="doc-border-deco" />
              <div className="doc-badge">
                15+<small>Years Excellence</small>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="eyebrow">MEET YOUR PHYSICIAN</div>
            <h2 className="sh">
              Dr. <em>Matla</em><br />
              MD, MRCS, Aesthetic Specialist
            </h2>
            <div className="gd" />
            <p className="ab-copy">
              Harley Street's most sought-after regenerative aesthetic physician. Over 15 years mastering
              PRP therapy — where precision meets artistry. Renowned for results that are natural,
              enduring, and deeply personal.
            </p>
            <p className="ab-copy">
              Trusted by discerning clients across London, the Home Counties, and internationally.
              Every consultation is personal. Every result speaks for itself. Your face, reimagined
              with science.
            </p>
            <div className="creds">
              <span className="cred">MBBS — University of London</span>
              <span className="cred">MRCS — Royal College of Surgeons</span>
              <span className="cred">GMC Registered</span>
              <span className="cred">BCAM Member</span>
              <span className="cred">Harley Street Registered</span>
            </div>
            <a href="#booking" className="btn-gold">
              <span>Book a Private Consultation</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
