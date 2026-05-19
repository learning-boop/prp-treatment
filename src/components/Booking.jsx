import { useState } from 'react';
import { FadeIn } from '../hooks/useFadeIn';

const treatments = {
  'Face & Skin': [
    'Facial Rejuvenation PRP',
    'Skin Rejuvenation PRP',
    'Under Eye Revitalisation',
    'Acne Scar Treatment PRP',
    'Periorbital Rejuvenation',
    'Neck & Décolletage Renewal',
  ],
  'Hair': [
    'Hair Restoration PRP',
    'Hair Transplant Enhancement PRP',
    'Male Pattern Baldness PRP',
  ],
  'Combined Treatments': [
    'Vampire Facial® (PRP + Microneedling)',
    'PRP + Fractional CO₂ Laser',
    'PRP + Fat Grafting (Lipofilling)',
  ],
  'Specialist': [
    'Wound Healing & Post-Surgical PRP',
    'Total Renewal Programme',
  ],
};

export default function Booking() {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', treatment: '', goals: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-inner">
        <FadeIn>
          <div className="eyebrow center">BEGIN YOUR JOURNEY</div>
          <h2 className="sh">Reserve Your <em>Consultation</em></h2>
          <div className="gd center" />
          <p style={{ color: 'var(--muted)', fontSize: '.82rem' }}>
            Private. Confidential. Limited appointments each month.
          </p>
        </FadeIn>

        {submitted ? (
          <FadeIn delay={0.1}>
            <div className="form-success">
              Thank you. Your consultation request has been received. Dr. Matla's team will be in touch within 4 hours.
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <form className="inp-row" onSubmit={handleSubmit}>
              <div>
                <input className="inp" name="first" type="text" placeholder="First Name" value={form.first} onChange={handleChange} required />
              </div>
              <div>
                <input className="inp" name="last" type="text" placeholder="Surname" value={form.last} onChange={handleChange} required />
              </div>
              <div>
                <input className="inp" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <input className="inp" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              </div>
              <div className="inp-full">
                <select className="inp" name="treatment" value={form.treatment} onChange={handleChange} required>
                  <option value="" disabled>Select a treatment</option>
                  {Object.entries(treatments).map(([group, opts]) => (
                    <optgroup key={group} label={group}>
                      {opts.map(o => <option key={o}>{o}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="inp-full">
                <textarea className="inp" name="goals" rows="3" placeholder="Tell us your aesthetic goals..." value={form.goals} onChange={handleChange} />
              </div>
              <div className="inp-full">
                <button className="btn-gold" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Submit Consultation Request</span>
                </button>
              </div>
            </form>
            <p className="form-note">Absolute discretion guaranteed · Response within 4 hours</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
