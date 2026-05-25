// ─────────────────────────────────────────────────────────────────────────────
//  PRP FAQ Topic Data — mirroring threadlift.uk's categorised FAQ structure
//
//  Each topic renders as its own page at:  /faq/<slug>
//  e.g. /faq/prp-treatment-questions, /faq/hair-loss-questions, ...
//
//  Use this file with a FAQTopicPage component (one route, dynamic :slug).
//  The Nav "FAQ & Guides" dropdown links directly to these slugs.
// ─────────────────────────────────────────────────────────────────────────────

export const prpFaqTopics = {

  // ───────────────────────────────────────────────────────────────────────────
  // 1.  PRP TREATMENT QUESTIONS  (the "main" / general FAQ topic)
  //     Equivalent to threadlift.uk → "Thread Lift Questions"
  // ───────────────────────────────────────────────────────────────────────────
  'prp-treatment-questions': {
    title: 'PRP Treatment Questions',
    short: 'General PRP Questions',
    intro: 'The most common questions we receive about PRP (Platelet-Rich Plasma) — what it is, how it works, who it suits and what to expect from the process.',
    faqs: [
      {
        q: 'What is PRP treatment?',
        a: 'PRP stands for Platelet-Rich Plasma. It is a regenerative aesthetic treatment that uses a small sample of your own blood, processed in a centrifuge to concentrate the platelets, which are then re-introduced into the treatment area. The platelets carry growth factors that stimulate the body\'s own healing and tissue-renewal processes.',
      },
      {
        q: 'How does PRP actually work?',
        a: 'When PRP is injected into the scalp or skin, the concentrated growth factors signal nearby cells — particularly fibroblasts and follicular stem cells — to increase activity. This drives new collagen formation, improved blood supply and stronger follicular function, depending on the area treated.',
      },
      {
        q: 'Does PRP really work?',
        a: 'PRP is supported by a substantial body of clinical evidence, particularly for androgenetic hair loss and facial skin rejuvenation. Results are not immediate and not guaranteed for every patient, but the majority of suitable candidates see meaningful improvement when a proper course is completed and maintained.',
      },
      {
        q: 'Who is a good candidate for PRP?',
        a: 'PRP is suited to patients in good general health who have a defined hair or skin concern — early-to-moderate hair thinning, mild skin laxity, fine lines, dull complexion, mild scarring or under-eye tiredness. Dr Matla will confirm suitability at consultation, including a review of your medical history and medications.',
      },
      {
        q: 'Who should not have PRP?',
        a: 'PRP is not advised during pregnancy or breastfeeding, in patients with active skin infection or systemic infection in the treatment area, in those with platelet or coagulation disorders, on certain anticoagulants, in active cancer patients, or in patients with conditions affecting wound healing. A full medical review takes place at consultation.',
      },
      {
        q: 'Is PRP a natural treatment?',
        a: 'Yes. PRP is derived entirely from your own blood — no synthetic substances, fillers or animal-derived materials are introduced. This is one of the reasons it is favoured by patients who prefer biologically-aligned aesthetic treatments.',
      },
      {
        q: 'How long does a PRP appointment take?',
        a: 'Allow 60–90 minutes for a full session. This includes the blood draw, centrifuge processing (10–15 minutes), application of topical anaesthetic where required, and the treatment itself. Your initial consultation is booked separately.',
      },
      {
        q: 'How many PRP sessions will I need?',
        a: 'For most concerns, an initial course of 3–4 sessions spaced 4–6 weeks apart is recommended, followed by maintenance every 6–12 months. Hair loss and acne scar protocols may run to 4–6 sessions. Dr Matla tailors the schedule at consultation.',
      },
      {
        q: 'When will I see results?',
        a: 'PRP works biologically, not cosmetically, so results develop over time. Early signs (reduced shedding, brighter skin tone) may appear within 4–6 weeks. The full improvement from a treatment course usually becomes visible at 3–6 months.',
      },
      {
        q: 'How long do PRP results last?',
        a: 'Skin PRP results typically last 12–18 months, hair PRP benefits are best maintained with sessions every 6–12 months, and combination treatments (PRP + microneedling or laser) can extend visible improvement up to 18–24 months. Lifestyle and ageing affect longevity.',
      },
      {
        q: 'Will I need ongoing maintenance?',
        a: 'Yes — PRP supports the body\'s natural processes rather than freezing them, so periodic maintenance preserves results. Most patients return every 6–12 months for a single session after their initial course.',
      },
      {
        q: 'Can PRP be combined with other treatments?',
        a: 'PRP combines exceptionally well with microneedling (the Vampire Facial®), fractional CO₂ laser, mesotherapy, polynucleotides and skin boosters. It can also be used alongside or after a hair transplant. Dr Matla will recommend the right combination for your goals.',
      },
    ],
    related: ['hair-loss-questions', 'facial-rejuvenation-questions', 'safety-recovery'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2.  HAIR LOSS QUESTIONS
  //     Equivalent to threadlift.uk → "Jawline & Jowl Questions" (specialty area)
  // ───────────────────────────────────────────────────────────────────────────
  'hair-loss-questions': {
    title: 'PRP Hair Loss Questions',
    short: 'Hair Loss & Restoration',
    intro: 'Detailed answers to the questions we hear most often from patients considering PRP for hair thinning, pattern baldness, postpartum shedding and post-transplant support.',
    faqs: [
      {
        q: 'Can PRP regrow hair that has fallen out?',
        a: 'PRP can reactivate follicles that are weakened, miniaturised or in a dormant resting phase — encouraging them to return to active growth. It cannot regenerate follicles that have been permanently lost. The earlier hair loss is treated, the better the likely response.',
      },
      {
        q: 'Why is my hair thinning?',
        a: 'Hair thinning can result from genetic (androgenetic) factors, hormonal shifts including postpartum and menopausal changes, thyroid imbalance, nutritional deficiency, high stress, illness, certain medications or chronic inflammation. A proper diagnosis is essential before starting any treatment.',
      },
      {
        q: 'Is PRP effective for male pattern baldness?',
        a: 'Yes — particularly in Norwood stages 1–4 where follicles remain viable. PRP can slow progression, thicken existing hairs and support new growth from miniaturised follicles. In advanced baldness (stages 5–7), surgical hair transplant is generally more effective, though PRP can still benefit scalp health.',
      },
      {
        q: 'Is PRP effective for female hair loss?',
        a: 'Female hair loss usually presents as diffuse thinning across the parting and crown rather than recession. PRP responds well to this pattern, and is particularly effective for postpartum shedding, early female pattern hair loss and stress-related shedding.',
      },
      {
        q: 'How many sessions are needed for hair PRP?',
        a: 'A typical initial course is 3–4 sessions spaced 4–6 weeks apart, followed by maintenance every 6–12 months. Patients with more advanced or stubborn thinning may benefit from 4–6 initial sessions. Progress is reviewed throughout.',
      },
      {
        q: 'Can PRP be used after a hair transplant?',
        a: 'Yes. PRP applied during or shortly after transplant surgery improves graft survival, accelerates healing and helps reduce post-operative shock loss. Many surgeons now build PRP into their standard transplant protocols.',
      },
      {
        q: 'Does PRP work for receding hairlines?',
        a: 'PRP can benefit a receding hairline provided follicles are still present. It is applied with precision to the affected hairline and temple areas. In advanced recession with complete follicle loss, results are limited — Dr Matla will give an honest assessment at consultation.',
      },
      {
        q: 'Is hair PRP painful?',
        a: 'A topical anaesthetic is applied to the scalp before treatment. Most patients experience mild stinging or pressure during the injections, which is well tolerated. The scalp can feel slightly tender for a few hours afterwards.',
      },
      {
        q: 'Will my hair fall out more after PRP?',
        a: 'Some patients notice a brief increase in shedding 2–3 weeks after their first session as weakened hairs are pushed out and replaced. This is a normal phase of the hair cycle responding to treatment and is not a sign of failure.',
      },
      {
        q: 'Can PRP be combined with minoxidil or finasteride?',
        a: 'Yes — PRP can complement medical therapy, and many patients use both for a stronger combined effect. Dr Matla will review your current medications and advise on the most effective protocol for your case.',
      },
      {
        q: 'Is PRP suitable for alopecia areata?',
        a: 'There is emerging evidence that PRP can support patients with patchy autoimmune hair loss (alopecia areata), though it is not a definitive cure. It is most often used alongside dermatology-led treatment and case-by-case assessment is essential.',
      },
      {
        q: 'What aftercare is needed after hair PRP?',
        a: 'Avoid washing your hair for 6–8 hours, avoid heavy exercise, saunas, swimming, hair dyes and harsh styling products for 24–48 hours, and protect your scalp from direct sun. Follow any clinic-specific aftercare instructions you are given.',
      },
    ],
    related: ['prp-treatment-questions', 'cost-pricing', 'treatment-comparisons'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3.  FACIAL REJUVENATION QUESTIONS
  //     Equivalent to threadlift.uk → "Nose Thread Lift Questions"
  // ───────────────────────────────────────────────────────────────────────────
  'facial-rejuvenation-questions': {
    title: 'PRP Facial Rejuvenation Questions',
    short: 'Facial Rejuvenation',
    intro: 'Everything patients ask about PRP facial treatments — how it improves skin quality, what concerns it targets, and what realistic results look like.',
    faqs: [
      {
        q: 'What is a PRP facial?',
        a: 'A PRP facial is a regenerative skin treatment where platelet-rich plasma prepared from your own blood is delivered into the facial skin — by injection, microneedling channel or topical application — to stimulate collagen production, brighten the complexion and improve overall skin quality.',
      },
      {
        q: 'What does PRP do for the face?',
        a: 'PRP stimulates fibroblasts in the dermis to produce new collagen and elastin. This gradually improves skin firmness, texture, fine lines, pore size, tone and radiance. It also enhances skin hydration and overall cellular turnover.',
      },
      {
        q: 'Does PRP give the skin a glow?',
        a: 'Yes — most patients describe a noticeable improvement in skin radiance and luminosity within 4–8 weeks as new collagen and improved microcirculation take effect. The glow is gradual but genuinely tissue-level, not a temporary surface effect.',
      },
      {
        q: 'Is PRP good for wrinkles?',
        a: 'PRP is most effective on fine to moderate wrinkles, particularly those linked to thinning skin and collagen depletion. It softens lines progressively over months rather than producing immediate change. For deeper static wrinkles, combination treatments (PRP + microneedling, CO₂ laser or fillers) may be recommended.',
      },
      {
        q: 'How is PRP different from a filler?',
        a: 'Fillers add volume to a specific area using hyaluronic acid; the change is immediate but the substance is gradually broken down. PRP improves skin biology from within — it does not add volume but it improves the quality, density and youthful behaviour of the skin itself. They are complementary rather than interchangeable.',
      },
      {
        q: 'How is PRP different from Botox?',
        a: 'Botox relaxes muscles to soften dynamic lines (lines formed by movement). PRP regenerates skin tissue and addresses skin quality rather than muscle activity. The two treatments work on completely different mechanisms and are often used together.',
      },
      {
        q: 'How many PRP facial sessions are needed?',
        a: 'A typical course is 2–3 sessions spaced 4–6 weeks apart, with maintenance every 12 months. Patients with significant photoageing or texture concerns may benefit from a longer initial course.',
      },
      {
        q: 'How long do PRP facial results last?',
        a: 'Most patients enjoy visible benefits for 12–18 months. The collagen produced during treatment is real tissue improvement, not a temporary deposit, so the underlying gains persist while ageing continues at its natural pace.',
      },
      {
        q: 'Does PRP help with dull, tired-looking skin?',
        a: 'Yes — this is one of the most common reasons patients book PRP. The treatment improves microcirculation, supports cellular renewal and restores luminosity, which addresses the underlying causes of dullness rather than masking them.',
      },
      {
        q: 'Will I need downtime after a PRP facial?',
        a: 'Expect mild redness, sensitivity and possibly small bruising for 24–72 hours. Most patients return to normal activities within 1–2 days. Combination treatments (with microneedling or laser) may extend recovery to 3–5 days.',
      },
      {
        q: 'Can I wear make-up after a PRP facial?',
        a: 'Make-up should be avoided for at least 24 hours after treatment to allow microchannels to close fully and to reduce infection risk. Mineral make-up is preferable for the first few days.',
      },
      {
        q: 'Is a PRP facial safe for all skin tones?',
        a: 'Yes — PRP is one of the few aesthetic treatments that is safe across all Fitzpatrick skin types (I–VI). Unlike some lasers, there is no increased risk of post-inflammatory hyperpigmentation in darker skin tones.',
      },
    ],
    related: ['skin-tightening-questions', 'vampire-facial-questions', 'acne-scar-questions'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4.  SKIN TIGHTENING QUESTIONS
  //     Equivalent to threadlift.uk → "Skin Tightening Questions"
  // ───────────────────────────────────────────────────────────────────────────
  'skin-tightening-questions': {
    title: 'PRP Skin Tightening Questions',
    short: 'Skin Tightening',
    intro: 'How PRP can help with skin laxity, crepiness and early sagging — and the realistic limits of non-surgical tightening.',
    faqs: [
      {
        q: 'Can PRP tighten loose skin?',
        a: 'PRP can produce a modest tightening effect by stimulating new collagen and elastin formation in the dermis. It is best suited to mild-to-moderate skin laxity rather than significant sagging. For more advanced laxity, combination protocols (PRP + microneedling, radiofrequency or thread lift) are usually more effective.',
      },
      {
        q: 'How does PRP improve skin firmness?',
        a: 'Growth factors in PRP activate fibroblasts — the cells responsible for producing collagen and elastin. Over a course of treatment, this strengthens the dermal scaffold, restoring some firmness and improving how the skin behaves with movement and gravity.',
      },
      {
        q: 'How long does it take to see skin-tightening results?',
        a: 'Tightening effects develop gradually over 3–6 months as new collagen matures. Early improvements (smoother texture, brighter tone) may be visible within weeks; firmness and lift develop later.',
      },
      {
        q: 'Where on the body can PRP tighten skin?',
        a: 'The face, neck, décolletage, upper arms, abdomen (especially post-pregnancy), inner thighs, knees and back of the hands are all commonly treated. The lower face and neck are the most frequently requested areas.',
      },
      {
        q: 'Is PRP enough for a saggy neck?',
        a: 'For early neck laxity and crepey skin texture, PRP — particularly combined with microneedling — can give meaningful improvement. For more significant sagging or platysmal banding, PRP alone is unlikely to be sufficient and may be combined with other modalities or recommended against in favour of surgical options.',
      },
      {
        q: 'Can PRP help crepey skin on the décolletage?',
        a: 'Yes. The chest area responds particularly well to PRP + microneedling, which improves the very thin skin in this zone. A course of 3–4 sessions is typical for visible improvement in crepiness and sun damage.',
      },
      {
        q: 'Is PRP good for the back of the hands?',
        a: 'PRP can improve skin quality on the hands — reducing thinning, crepiness and pigment irregularity. It is commonly combined with skin boosters or fillers for hand rejuvenation, as the hands also lose volume with age.',
      },
      {
        q: 'Can PRP replace a facelift?',
        a: 'No. PRP improves skin quality and produces a modest tightening but cannot reposition tissue or remove excess skin in the way a surgical facelift does. For significant sagging, PRP may complement surgical or thread lift options but does not replace them.',
      },
      {
        q: 'At what age should I start PRP for skin firmness?',
        a: 'Many patients begin in their early-to-mid 30s as a preventative measure, when fibroblast activity begins to slow. Earlier intervention generally produces better long-term skin quality. Patients in their 40s, 50s and beyond also see benefit, though combination treatments may be more appropriate.',
      },
      {
        q: 'How long does the tightening effect last?',
        a: 'Skin tightening effects typically last 12–18 months. Annual maintenance keeps the benefits in place, as natural ageing and collagen breakdown continue between treatments.',
      },
      {
        q: 'Will I see immediate tightening after PRP?',
        a: 'No — the immediate post-treatment appearance is mild swelling, which can give a temporarily plumper look. The genuine, lasting tightening effect develops over weeks to months as collagen rebuilds.',
      },
    ],
    related: ['facial-rejuvenation-questions', 'treatment-comparisons', 'safety-recovery'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 5.  VAMPIRE FACIAL & MICRONEEDLING QUESTIONS
  //     Equivalent to threadlift.uk → "Neck Treatment Questions" (specialty topic)
  // ───────────────────────────────────────────────────────────────────────────
  'vampire-facial-questions': {
    title: 'Vampire Facial & Microneedling Questions',
    short: 'Vampire Facial®',
    intro: 'The Vampire Facial combines PRP with medical microneedling for one of the most effective skin rejuvenation protocols available. Here are the most common questions about how it works and what to expect.',
    faqs: [
      {
        q: 'What is the Vampire Facial?',
        a: 'The Vampire Facial is a combination treatment in which microneedling creates thousands of microscopic channels in the skin, and platelet-rich plasma from your own blood is then applied to penetrate deeply through those channels. The combined collagen stimulus is significantly greater than either treatment performed alone.',
      },
      {
        q: 'Why is it called the "Vampire Facial"?',
        a: 'The name refers to the use of your own blood, which is drawn, processed and then re-applied to the skin. Despite the dramatic name, it is a clinically sound, evidence-supported aesthetic treatment used worldwide.',
      },
      {
        q: 'What is the difference between a PRP facial and a Vampire Facial?',
        a: 'A standard PRP facial typically delivers PRP via injection only. A Vampire Facial combines microneedling and PRP — significantly increasing growth factor uptake and the resulting collagen response. The Vampire Facial is the more powerful protocol for texture and scarring.',
      },
      {
        q: 'What does the Vampire Facial treat?',
        a: 'It is highly effective for fine lines, wrinkles, acne scarring, enlarged pores, uneven skin tone, mild laxity, sun damage and dull complexion. It is one of the most comprehensive single skin treatments available.',
      },
      {
        q: 'Does the Vampire Facial hurt?',
        a: 'A topical anaesthetic is applied for 30–45 minutes before the procedure to minimise discomfort. Most patients describe a warm, prickly sensation during microneedling. Sensitive areas (forehead, upper lip) can feel sharper but the treatment is generally well tolerated.',
      },
      {
        q: 'How many Vampire Facial sessions do I need?',
        a: 'A course of 2–4 sessions spaced 4–6 weeks apart is recommended for optimal results. Patients with significant acne scarring or photoageing may benefit from a longer course of 4–6 sessions.',
      },
      {
        q: 'What is the downtime after a Vampire Facial?',
        a: 'Expect 48–72 hours of redness, mild swelling and tightness, similar in appearance to mild sunburn. Some patients experience light flaking around day 3–5. Most return to work within 1–2 days, often using mineral make-up after 24 hours.',
      },
      {
        q: 'When will I see results from a Vampire Facial?',
        a: 'A subtle improvement in radiance is often visible within 1–2 weeks. The collagen-driven improvements in texture, firmness and scarring develop over 3–6 months and continue to refine for several months after a full course.',
      },
      {
        q: 'How long do Vampire Facial results last?',
        a: 'Results typically last 12–18 months after a full course. The new collagen produced is genuine, lasting tissue change. Maintenance every 6–12 months helps preserve and build on results.',
      },
      {
        q: 'Is the Vampire Facial safe for all skin tones?',
        a: 'Yes — it is suitable for all Fitzpatrick types (I–VI), unlike some laser-based treatments which carry risks of pigmentation change in darker skin. This makes it one of the most universally suitable advanced skin treatments.',
      },
      {
        q: 'What should I avoid before a Vampire Facial?',
        a: 'Stop retinoids and active acid products 5–7 days before treatment, avoid sun exposure for 2 weeks prior, and avoid blood-thinning medications such as aspirin and ibuprofen for 48 hours unless prescribed. Specific guidance is given at consultation.',
      },
      {
        q: 'Can the Vampire Facial be done on the body?',
        a: 'Yes — the same protocol can be applied to the neck, décolletage, back of the hands, stretch-mark-affected areas, and other body zones where skin renewal is desired. Depth settings are adjusted to suit each area.',
      },
    ],
    related: ['facial-rejuvenation-questions', 'acne-scar-questions', 'skin-tightening-questions'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 6.  ACNE SCAR & SKIN TEXTURE QUESTIONS
  // ───────────────────────────────────────────────────────────────────────────
  'acne-scar-questions': {
    title: 'PRP Acne Scar & Skin Texture Questions',
    short: 'Acne Scars & Texture',
    intro: 'How PRP can help reduce the appearance of acne scarring, refine skin texture and restore smoother, more even skin.',
    faqs: [
      {
        q: 'Can PRP improve acne scars?',
        a: 'Yes. PRP — particularly combined with microneedling — is one of the most effective non-laser treatments for acne scarring. Growth factors stimulate fibroblast activity in scar tissue, gradually remodelling the depressed contours and improving overall texture.',
      },
      {
        q: 'What types of acne scars respond best to PRP?',
        a: 'Rolling scars and shallow boxcar scars respond best to PRP + microneedling, as they are amenable to collagen remodelling. Deep, narrow ice-pick scars respond less well to surface treatments and may need subcision or punch excision alongside PRP.',
      },
      {
        q: 'How many sessions are needed for acne scarring?',
        a: 'A typical course is 3–6 sessions spaced 4–6 weeks apart, depending on scar depth and skin response. Deeper or longstanding scarring may require an extended course or combination treatments (e.g. PRP + CO₂ laser, PRP + subcision).',
      },
      {
        q: 'How long until I see improvement in my acne scars?',
        a: 'Initial smoothing may be noticeable within 6–8 weeks. Visible scar reduction develops over 3–6 months as new collagen matures within the scar tissue. Final results may continue to improve for up to 12 months.',
      },
      {
        q: 'Is PRP better than laser for acne scars?',
        a: 'PRP + microneedling is suitable for all skin tones and has minimal downtime, but works more gradually. Fractional CO₂ laser produces more aggressive remodelling and faster results but carries pigmentation risks in darker skin tones. PRP combined with CO₂ laser is often the most powerful option for suitable candidates.',
      },
      {
        q: 'Will PRP completely remove my acne scars?',
        a: 'Complete removal of established scars is rarely achievable with any treatment. PRP typically achieves 40–70% improvement in scar visibility, depending on scar type and individual response. A realistic discussion of expected outcomes is given at consultation.',
      },
      {
        q: 'Can PRP treat post-acne pigmentation?',
        a: 'PRP improves overall skin tone and brightness, which can reduce the visibility of post-inflammatory hyperpigmentation (PIH) over time. For more stubborn pigment, specific brightening protocols may be used alongside PRP.',
      },
      {
        q: 'Can I have PRP while I still have active acne?',
        a: 'PRP should be avoided over actively inflamed or infected acne, as inflammation can compromise results and increase risk of spreading bacteria. Treatment is typically begun once active acne is well controlled.',
      },
      {
        q: 'Does PRP help with rolling scars?',
        a: 'Yes — rolling scars are the scar type most responsive to PRP and microneedling, as they have intact tethering tissue beneath that can be released and remodelled. Most patients see substantial improvement over a course of treatment.',
      },
      {
        q: 'Does PRP help refine open pores?',
        a: 'Yes. PRP strengthens the structural support around each pore, gradually reducing pore size and improving overall skin smoothness. Pore refinement is a common secondary benefit of PRP facial treatment.',
      },
      {
        q: 'Will PRP help with skin texture in general?',
        a: 'Yes. Even patients without specific scarring see meaningful improvement in overall texture — smoother feel, more even reflection of light, reduced surface roughness — as PRP supports a healthier dermal matrix.',
      },
    ],
    related: ['vampire-facial-questions', 'facial-rejuvenation-questions', 'treatment-comparisons'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 7.  COST & PRICING
  //     Equivalent to threadlift.uk → "Cost & Pricing"
  // ───────────────────────────────────────────────────────────────────────────
  'cost-pricing': {
    title: 'PRP Cost & Pricing Questions',
    short: 'Cost & Pricing',
    intro: 'Honest information on what PRP costs, why pricing varies between clinics, and what factors influence your individual treatment plan.',
    faqs: [
      {
        q: 'How much does PRP treatment cost in the UK?',
        a: 'Pricing depends on the treatment area, the protocol used and the number of sessions. As a guide: PRP facial from £450, hair restoration from £480, acne scar treatment from £490, Vampire Facial from £650, and combination protocols (PRP + CO₂ laser, PRP + Dermapen) from £580. A personalised quote is given at consultation.',
      },
      {
        q: 'Why does PRP pricing vary between clinics?',
        a: 'Costs vary based on practitioner qualifications, type of centrifuge and PRP kit used (single-spin vs double-spin systems produce different platelet concentrations), session duration, clinic standards and the number of areas treated. Lower-cost clinics often use lower-quality systems that deliver less effective PRP.',
      },
      {
        q: 'Is PRP available on the NHS?',
        a: 'Aesthetic PRP for hair and skin is not available on the NHS. Some NHS services may use PRP for orthopaedic, sports injury or wound healing indications, but cosmetic PRP is offered only privately.',
      },
      {
        q: 'Do you offer package pricing for a full course?',
        a: 'Yes — most patients book a course of 3–4 sessions, and a course price is provided that is more cost-effective than booking sessions individually. The exact package is tailored to your treatment plan.',
      },
      {
        q: 'Is there a charge for the consultation?',
        a: 'Please contact the clinic directly for current consultation policy. Where a consultation fee applies, it is often redeemable against treatment if you decide to proceed.',
      },
      {
        q: 'Do you offer finance or payment plans?',
        a: 'Many clinics offer 0% finance through approved third-party providers for treatment courses over a certain value. Availability and terms are subject to credit approval and discussed in clinic.',
      },
      {
        q: 'What is the cost of maintenance sessions?',
        a: 'Maintenance sessions are typically charged at standard single-session pricing. Annual maintenance is usually one session at the relevant treatment price.',
      },
      {
        q: 'Is PRP a good investment compared to other treatments?',
        a: 'PRP delivers genuine, lasting tissue improvement rather than a temporary aesthetic effect. For patients prioritising skin or hair health over rapid cosmetic change, the value proposition is strong. Comparative cost over time often favours PRP given its 12–18 month durability.',
      },
      {
        q: 'Are there any hidden costs?',
        a: 'No. A full quote covering all sessions, consumables and aftercare products (where relevant) is provided in writing before you commit to treatment. There are no surprise charges on the day.',
      },
      {
        q: 'What happens if I miss a session?',
        a: 'A missed session can usually be rescheduled within a flexible window without additional cost. Specific clinic policies on cancellations and rescheduling are outlined at booking.',
      },
    ],
    related: ['prp-treatment-questions', 'safety-recovery', 'treatment-comparisons'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 8.  SAFETY & RECOVERY
  //     Equivalent to threadlift.uk → "Safety & Recovery"
  // ───────────────────────────────────────────────────────────────────────────
  'safety-recovery': {
    title: 'PRP Safety & Recovery Questions',
    short: 'Safety & Recovery',
    intro: 'Detailed guidance on PRP safety, side effects, contraindications, recovery and aftercare — to help you make an informed decision.',
    faqs: [
      {
        q: 'Is PRP safe?',
        a: 'PRP is widely considered safe when performed by a qualified clinician. Because it uses your own blood, there is no risk of allergic reaction to a foreign substance. Risks are minimal and primarily relate to the injection process itself (bruising, swelling, infection) rather than the PRP material.',
      },
      {
        q: 'What are the common side effects of PRP?',
        a: 'Mild redness, swelling, tenderness and small bruises in the treated area are common and typically resolve within 24–72 hours. The scalp may itch briefly after hair PRP. These are normal and expected, not complications.',
      },
      {
        q: 'What are the rare risks of PRP?',
        a: 'Rare risks include infection at the injection site, nerve irritation, prolonged bruising and — extremely rarely — vascular events. Risks are minimised through strict sterile technique and proper anatomical knowledge. All possible risks are discussed at consultation.',
      },
      {
        q: 'How long is the recovery after PRP?',
        a: 'Most patients return to normal activities within 24 hours for standard PRP. Combination treatments (Vampire Facial, PRP + CO₂ laser) may require 2–5 days of recovery. Hair PRP usually has minimal visible recovery beyond brief scalp tenderness.',
      },
      {
        q: 'Can I exercise after PRP?',
        a: 'Avoid heavy exercise, saunas, steam rooms and hot showers for 24 hours after treatment. Gentle walking is fine. For more aggressive combination protocols, avoid strenuous activity for 48–72 hours.',
      },
      {
        q: 'Can I drink alcohol after PRP?',
        a: 'It is best to avoid alcohol for 24–48 hours before and after treatment, as alcohol can increase bruising and slow the healing process. Hydration supports better results.',
      },
      {
        q: 'Should I avoid certain medications before PRP?',
        a: 'Avoid blood thinners such as aspirin and ibuprofen for 48 hours before treatment (unless prescribed by your GP), as they can increase bruising and reduce platelet effectiveness. Paracetamol is fine. Always discuss all medications at consultation.',
      },
      {
        q: 'Who should not have PRP?',
        a: 'PRP is not advised during pregnancy or breastfeeding, in patients with active infection at the site, platelet or coagulation disorders, on certain anticoagulants, in active cancer, or in patients with conditions that significantly impair wound healing. A full medical assessment is part of every consultation.',
      },
      {
        q: 'Can I have PRP if I take blood thinners?',
        a: 'It depends on the medication and your clinical situation. Some blood thinners are an absolute contraindication; others may be managed with a short pause under medical guidance. Never stop prescribed medication without speaking to your GP first.',
      },
      {
        q: 'What aftercare is recommended after PRP?',
        a: 'Keep the treated area clean and avoid touching it for several hours. Use SPF 50+ on facial PRP. Avoid make-up for 24 hours. Avoid heat, sweat and intense skincare actives (retinol, AHAs) for 48–72 hours. Stay well hydrated.',
      },
      {
        q: 'When can I wear make-up after PRP?',
        a: 'Mineral make-up may be applied after 24 hours. Heavier make-up and active skincare are best avoided for 48–72 hours to allow the skin to recover fully and reduce infection risk.',
      },
      {
        q: 'What signs should I watch for after treatment?',
        a: 'Some redness, swelling and bruising are expected. Contact the clinic if you experience severe pain, spreading redness, persistent swelling beyond 5 days, fever or any signs of infection — these are uncommon but should be reviewed promptly.',
      },
    ],
    related: ['prp-treatment-questions', 'cost-pricing', 'facial-rejuvenation-questions'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 9.  TREATMENT COMPARISONS
  //     Equivalent to threadlift.uk → "Treatment Comparisons"
  // ───────────────────────────────────────────────────────────────────────────
  'treatment-comparisons': {
    title: 'PRP Treatment Comparisons',
    short: 'Treatment Comparisons',
    intro: 'How PRP compares with the other treatments patients consider — fillers, Botox, microneedling alone, mesotherapy, laser and surgical alternatives.',
    faqs: [
      {
        q: 'PRP vs Fillers — which is better?',
        a: 'Fillers add immediate volume to a specific area; PRP gradually improves the quality, density and resilience of the skin itself. They address different needs and are often complementary. Choose fillers for volume loss, PRP for skin quality, or use both as part of a planned aesthetic strategy.',
      },
      {
        q: 'PRP vs Botox — which is better?',
        a: 'Botox relaxes muscles to soften dynamic wrinkles (movement lines); PRP regenerates skin tissue to improve quality. They work on completely different mechanisms and many patients use both — Botox for upper-face expression lines, PRP for overall skin health.',
      },
      {
        q: 'PRP vs Microneedling alone — which is more effective?',
        a: 'Microneedling alone produces collagen stimulus through controlled micro-injury. Adding PRP delivers concentrated growth factors directly into the channels created, which significantly amplifies the regenerative response. PRP + microneedling consistently outperforms microneedling alone in clinical studies.',
      },
      {
        q: 'PRP vs Mesotherapy — what is the difference?',
        a: 'Mesotherapy injects a cocktail of vitamins, amino acids and hyaluronic acid into the skin to nourish and hydrate. PRP uses growth factors from your own blood to stimulate regeneration. Mesotherapy is more about supplementation; PRP is more about activating cellular renewal.',
      },
      {
        q: 'PRP vs Polynucleotides — which should I choose?',
        a: 'Polynucleotides are purified DNA fragments that stimulate skin repair and hydration. They work on similar regenerative pathways to PRP and produce comparable results in some studies. Polynucleotides offer a more standardised, off-the-shelf treatment; PRP is fully autologous. Both are excellent — choice depends on individual factors.',
      },
      {
        q: 'PRP vs Skin Boosters — what is the difference?',
        a: 'Skin boosters (Profhilo, Juvederm Volite, etc.) deliver hyaluronic acid for deep hydration and a mild bio-stimulating effect. PRP works at the cellular level via growth factors. They can be used together — boosters for hydration and immediate plumpness, PRP for regenerative quality.',
      },
      {
        q: 'PRP vs Fractional CO₂ Laser — which is better for scarring?',
        a: 'Fractional CO₂ laser produces more aggressive resurfacing and faster scar improvement but carries pigmentation risks in darker skin tones and significant downtime. PRP + microneedling is gentler, suitable for all skin tones and has less downtime. PRP combined with CO₂ laser is often the most powerful option where appropriate.',
      },
      {
        q: 'PRP vs Hair Transplant — which is right for me?',
        a: 'PRP supports follicles that are still viable but weakened; hair transplant relocates healthy follicles to areas of permanent loss. Early-stage hair loss is best managed with PRP; advanced baldness usually requires a transplant. Many patients benefit from both — PRP to preserve native hair and improve transplant results.',
      },
      {
        q: 'PRP vs Minoxidil — which works better for hair loss?',
        a: 'Minoxidil is a topical pharmaceutical that improves scalp blood flow and prolongs the growth phase of hair. PRP works through growth-factor signalling. They act on different mechanisms and are often combined for stronger results. Minoxidil requires daily application; PRP is delivered every 4–6 weeks initially then maintained.',
      },
      {
        q: 'PRP vs Finasteride — which is better for male hair loss?',
        a: 'Finasteride blocks the hormone (DHT) that drives androgenetic hair loss; PRP supports follicle health and regeneration. They address different aspects of the same problem and are commonly combined. Finasteride is medication with potential side effects to discuss with your GP; PRP is a procedural treatment with minimal systemic effects.',
      },
      {
        q: 'PRP vs Thread Lift — which is right for me?',
        a: 'A thread lift physically lifts and repositions tissue and provides immediate visible change. PRP improves skin biology without lifting tissue. For sagging that needs repositioning, a thread lift is the right tool; for skin quality and minor laxity, PRP is appropriate. They can be performed together for comprehensive rejuvenation.',
      },
      {
        q: 'PRP vs Facelift Surgery — what should I expect?',
        a: 'Surgical facelift produces the most significant and longest-lasting improvement for advanced sagging by removing excess skin and repositioning deeper structures. PRP cannot replicate this but is useful before or after surgery to optimise skin quality. Combined approaches are common in well-planned aesthetic care.',
      },
    ],
    related: ['prp-treatment-questions', 'facial-rejuvenation-questions', 'hair-loss-questions'],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  Nav-ready ordered list — used by the "FAQ & Guides" dropdown
//  (matches the menu pattern from threadlift.uk's navbar)
// ─────────────────────────────────────────────────────────────────────────────
export const prpFaqMenu = [
  { slug: '',                              label: 'All FAQ Topics' },
  { slug: 'prp-treatment-questions',       label: 'PRP Treatment Questions' },
  { slug: 'hair-loss-questions',           label: 'Hair Loss Questions' },
  { slug: 'facial-rejuvenation-questions', label: 'Facial Rejuvenation Questions' },
  { slug: 'skin-tightening-questions',     label: 'Skin Tightening Questions' },
  { slug: 'vampire-facial-questions',      label: 'Vampire Facial Questions' },
  { slug: 'acne-scar-questions',           label: 'Acne Scar Questions' },
  { slug: 'cost-pricing',                  label: 'Cost & Pricing' },
  { slug: 'safety-recovery',               label: 'Safety & Recovery' },
  { slug: 'treatment-comparisons',         label: 'Treatment Comparisons' },
];
