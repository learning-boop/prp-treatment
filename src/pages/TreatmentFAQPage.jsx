import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FadeIn } from '../hooks/useFadeIn';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// ── All treatment FAQ data ──────────────────────────────────────────────────
export const treatmentFAQs = {
  'hair-restoration': {
    title: 'PRP Hair Restoration',
    subtitle: 'Hair Loss Treatment',
    img: '/assets/hair.png',
    price: 'From £500',
    sessions: '3–4 sessions',
    downtime: '24–48 hours',
    intro: 'PRP Hair Restoration is a non-surgical treatment that uses your own platelet-rich plasma to stimulate dormant hair follicles, improve scalp circulation and support natural hair regrowth.',
    faqs: [
      { q: 'Why is my hair thinning suddenly?', a: 'Sudden hair thinning can have several causes — hormonal changes, high stress, illness, nutritional deficiencies, or genetic predisposition. A condition called telogen effluvium often causes shedding 2–3 months after a triggering event. Dr Matla will assess your hair loss pattern and medical history at consultation to identify the underlying cause before recommending treatment.' },
      { q: 'Can PRP regrow lost hair?', a: 'PRP can stimulate follicles that are in a weakened or resting state and may support the transition back into active growth. It is most effective where follicles are still viable. In areas of permanent follicle loss, PRP is unlikely to produce regrowth. An honest assessment of your individual case will be given at consultation.' },
      { q: 'What is the best treatment for hair thinning?', a: 'The most appropriate treatment depends on the cause and extent of hair loss, your age, hormonal profile and overall health. PRP is a clinically recognised option for non-surgical hair restoration, particularly in the early-to-mid stages of loss. Dr Matla will review all relevant factors and recommend the most suitable approach.' },
      { q: 'How many PRP sessions are needed for hair growth?', a: 'Most patients benefit from an initial course of 3–4 sessions spaced 4–6 weeks apart. Maintenance sessions every 6–12 months are then recommended to sustain results. The exact number depends on the severity of hair loss and individual response to treatment.' },
      { q: 'Is PRP treatment worth it for hair loss?', a: 'PRP is a minimally invasive, natural treatment that uses your own blood — there is no foreign substance involved. Many patients see a meaningful reduction in shedding and improvement in hair density over a course of sessions. Results are gradual and realistic expectations are discussed thoroughly at consultation.' },
      { q: 'How long before I see results from hair PRP?', a: 'A reduction in shedding is often noticeable within the first few weeks. Visible improvement in density and texture typically develops over 3–6 months as follicles respond to growth factor stimulation. A full course of 3–4 sessions is usually required before results can be properly assessed.' },
      { q: 'Does hair PRP hurt?', a: 'Topical anaesthetic cream is applied to the scalp before treatment to minimise discomfort. Most patients report mild pressure or a stinging sensation during injections. The scalp can be more sensitive than facial areas but the procedure is generally well-tolerated.' },
      { q: 'What should I avoid after hair PRP?', a: 'For 24 hours after treatment, avoid heavy exercise, excessive heat (saunas, steam rooms), direct sun exposure and touching or scratching the scalp. Avoid washing your hair for 6–8 hours post-treatment and follow any specific aftercare instructions provided by the clinic.' },
    ],
    related: ['female-hair-loss', 'male-pattern-baldness', 'hair-transplant'],
  },

  'female-hair-loss': {
    title: 'PRP for Female Hair Loss',
    subtitle: 'Female Pattern & Hormonal Hair Thinning',
    img: '/assets/hair.png',
    price: 'From £480',
    sessions: '3–6 sessions',
    downtime: '24–48 hours',
    intro: 'Female hair loss presents differently to male pattern baldness — typically as diffuse thinning across the crown and parting. Dr Matla\'s PRP protocols are specifically adapted to address the patterns, hormonal factors and emotional impact of female hair loss.',
    faqs: [
      { q: 'Why is my hair thinning as a woman?', a: 'Female hair thinning can result from hormonal fluctuations (particularly oestrogen and testosterone imbalances), nutritional deficiencies, thyroid conditions, high stress or genetic predisposition. Postpartum hair loss is also very common. A thorough consultation helps identify the contributing factors specific to you.' },
      { q: 'Is PRP suitable for female hair loss?', a: 'Yes. PRP is well-suited to female hair loss — particularly diffuse thinning, postpartum shedding and early-stage female pattern hair loss. Dr Matla\'s protocols are adapted for the specific patterns seen in women and combined with a detailed scalp assessment.' },
      { q: 'Can PRP help postpartum hair loss?', a: 'Yes. Postpartum hair loss (caused by a drop in oestrogen after childbirth) can be effectively supported with PRP. The treatment helps accelerate scalp recovery and supports the return to a healthy hair growth cycle. Most patients can begin treatment once they have finished breastfeeding.' },
      { q: 'How does female hair loss differ from male hair loss?', a: 'Male pattern baldness typically follows a defined recession pattern (hairline and crown). Female hair loss tends to present as diffuse thinning across the parting and crown, without a receding hairline. This distinction influences the treatment protocol Dr Matla uses.' },
      { q: 'How many sessions will I need for female hair PRP?', a: 'Women with diffuse thinning or hormonal hair loss typically require 3–6 sessions depending on severity. An initial course is followed by maintenance sessions. Progress is assessed throughout and the plan adjusted accordingly.' },
      { q: 'Can I have PRP if I am breastfeeding?', a: 'PRP treatment is not recommended during pregnancy or while breastfeeding. This is a precautionary position as there is insufficient clinical data on PRP in these populations. Treatment can be discussed once breastfeeding has ended.' },
      { q: 'Will PRP stop my hair from falling out?', a: 'PRP can significantly reduce the rate of shedding for many patients, particularly when hair loss is at an active stage. Results vary between individuals and no treatment can guarantee complete cessation of shedding. Realistic expectations are always discussed at consultation.' },
      { q: 'What results can I expect from female hair PRP?', a: 'Patients commonly notice reduced shedding within the first few weeks, followed by gradual improvements in hair thickness, density and texture over 3–6 months. The scalp environment also improves, supporting healthier long-term growth.' },
    ],
    related: ['hair-restoration', 'male-pattern-baldness'],
  },

  'male-pattern-baldness': {
    title: 'Male Pattern Baldness PRP',
    subtitle: 'Androgenetic Alopecia Treatment',
    img: '/assets/bald.png',
    price: 'From £480',
    sessions: '3–4 sessions',
    downtime: '24–48 hours',
    intro: 'Male pattern baldness (androgenetic alopecia) is driven by genetic sensitivity to DHT. PRP can slow the progression of hair loss and support follicles that retain viability — offering a non-surgical approach to maintaining and improving hair density.',
    faqs: [
      { q: 'Can PRP reverse male pattern baldness?', a: 'PRP cannot reverse established baldness where follicles have been permanently lost. However, in the early-to-mid stages of male pattern baldness, PRP can slow progression, strengthen remaining follicles and potentially improve density in areas of thinning. The earlier treatment begins, the better the likely outcome.' },
      { q: 'Is PRP effective for a receding hairline?', a: 'PRP can be beneficial for a receding hairline if follicles in the affected area are still viable. Treatment is applied precisely to the areas of thinning and recession. Effectiveness depends on how advanced the recession is — an honest assessment will be given at consultation.' },
      { q: 'How does PRP compare to finasteride or minoxidil?', a: 'Finasteride and minoxidil are pharmaceutical options that work through different mechanisms (DHT blocking and vasodilation respectively). PRP is a natural, biological treatment that uses your own growth factors. Some patients use PRP alongside these medications; others prefer it as a standalone non-pharmacological option. Dr Matla will discuss the most appropriate approach for you.' },
      { q: 'How many PRP sessions do I need for male hair loss?', a: 'An initial course of 3–4 sessions is typically recommended, spaced 4–6 weeks apart. After the initial course, maintenance sessions every 6–12 months help sustain results. The exact protocol depends on the stage of hair loss and individual response.' },
      { q: 'At what stage of baldness is PRP most effective?', a: 'PRP is most effective in the earlier stages of male pattern baldness (Norwood scale 1–4), when a significant number of follicles are still present and viable. In advanced stages (5–7), surgical options such as hair transplant may be more appropriate — though PRP can still support scalp health.' },
      { q: 'Can PRP be combined with a hair transplant?', a: 'Yes — PRP and hair transplant surgery complement each other well. PRP applied at the time of or shortly after transplant surgery can improve graft survival, accelerate healing and support earlier establishment of new hair growth.' },
      { q: 'Is PRP a permanent solution for hair loss?', a: 'PRP is not a permanent cure but an ongoing maintenance treatment. The underlying genetic cause of male pattern baldness continues, so maintenance sessions are important to sustain results. Many patients incorporate PRP into a regular aesthetic maintenance routine.' },
      { q: 'What is the recovery after male scalp PRP?', a: 'Most patients experience mild redness and sensitivity on the scalp for 24–48 hours. Small injection marks may be visible briefly. You can return to normal daily activities the same day, avoiding heavy exercise, heat and direct sun exposure for 24 hours.' },
    ],
    related: ['hair-restoration', 'hair-transplant'],
  },

  'hair-transplant': {
    title: 'PRP After Hair Transplant',
    subtitle: 'Post-Transplant Enhancement',
    img: '/assets/hair.png',
    price: 'From £550',
    sessions: '1–3 sessions',
    downtime: 'Per transplant protocol',
    intro: 'PRP applied at the time of or following hair transplant surgery significantly improves graft survival, accelerates healing and supports earlier, denser establishment of new follicles — making it a highly valuable adjunct to surgical hair restoration.',
    faqs: [
      { q: 'Does PRP help after a hair transplant?', a: 'Yes. PRP is widely used to support hair transplant outcomes. Growth factors in PRP accelerate tissue healing, reduce post-operative inflammation and can improve graft survival rates. Some studies suggest PRP increases the number of grafts that successfully establish in the first growth phase.' },
      { q: 'When should I have PRP after a hair transplant?', a: 'PRP can be applied at the time of transplant surgery (injected into the recipient area before or after graft placement) and/or in the weeks following surgery. Dr Matla will advise the optimal timing based on your surgical protocol and recovery progress.' },
      { q: 'How many PRP sessions do I need after a transplant?', a: 'Most patients benefit from 1–3 PRP sessions post-transplant. The first session can be at the time of surgery, with follow-up sessions at 4–6 week intervals during the early recovery phase. The protocol is tailored to your individual transplant and recovery.' },
      { q: 'Can PRP improve hair transplant results?', a: 'PRP can improve the overall outcome of hair transplant surgery by supporting graft survival, reducing the dormant phase and promoting earlier visible growth. Patients who use PRP as part of their transplant protocol often report better density results compared to surgery alone.' },
      { q: 'Is PRP safe immediately after a hair transplant?', a: 'PRP is generally considered safe post-transplant. It uses your own blood-derived plasma, reducing the risk of adverse reactions. The procedure must be performed carefully in the immediate post-operative period to avoid disturbing newly placed grafts — timing and technique are important.' },
      { q: 'Can PRP prevent shock loss after a hair transplant?', a: 'Shock loss (temporary shedding of existing hair around the transplant area) is a common post-operative occurrence. PRP may help reduce the severity and duration of shock loss by supporting the scalp\'s recovery environment, though it cannot guarantee prevention entirely.' },
      { q: 'Will I still need PRP after my transplant has healed?', a: 'Many patients continue PRP maintenance sessions after full transplant recovery to support the health of both transplanted and native hair. Particularly for patients with progressive hair loss, ongoing PRP helps protect remaining follicles and maintain overall density.' },
      { q: 'Who performs PRP after hair transplant at your clinic?', a: 'All PRP treatments are performed by Dr Matla, who will coordinate your post-transplant PRP protocol in conjunction with your surgical care plan. A detailed consultation is conducted to ensure the treatment schedule suits your recovery timeline.' },
    ],
    related: ['hair-restoration', 'male-pattern-baldness'],
  },

  'facial-rejuvenation': {
    title: 'PRP Facial Rejuvenation',
    subtitle: 'Natural Collagen Stimulation',
    img: '/assets/face.png',
    price: 'From £450',
    sessions: '2–3 sessions',
    downtime: '24–72 hours',
    intro: 'PRP Facial Rejuvenation uses concentrated growth factors from your own blood to stimulate collagen production, improve skin texture and restore natural luminosity — with no foreign substances and minimal downtime.',
    faqs: [
      { q: 'What is PRP facial treatment?', a: 'PRP Facial Rejuvenation is a regenerative skin treatment in which platelet-rich plasma — extracted from your own blood — is injected into the face to stimulate collagen production, improve skin texture and restore a brighter, healthier complexion. It is a natural treatment with no synthetic substances.' },
      { q: 'Does PRP make your skin glow?', a: 'PRP facial treatment can produce a visible improvement in skin radiance and luminosity as new collagen forms and skin cell turnover improves. Patients commonly describe a clearer, healthier glow developing over 4–8 weeks after treatment.' },
      { q: 'Is PRP good for wrinkles?', a: 'PRP is widely used as an anti-ageing treatment. It stimulates fibroblasts in the dermis to produce collagen and elastin, which gradually reduces the appearance of fine lines and improves skin firmness. Results are natural-looking and develop progressively.' },
      { q: 'How long does a PRP facial last?', a: 'Results from PRP facial treatment typically last 12–18 months, though this varies depending on age, lifestyle, skincare routine and sun exposure. Maintenance sessions every 12 months help sustain the improvements achieved.' },
      { q: 'How many sessions of PRP facial do I need?', a: 'Most patients see optimal results after 2–3 sessions spaced 4–6 weeks apart. A single session can produce noticeable improvement, but a course of treatments produces more significant and lasting collagen stimulation.' },
      { q: 'Is PRP better than fillers for the face?', a: 'PRP and fillers address different concerns. Fillers replace volume immediately; PRP stimulates the skin\'s own biology to improve quality from within over time. PRP produces more gradual but genuinely regenerative results — some patients use both as part of a comprehensive aesthetic plan.' },
      { q: 'What is the downtime after a PRP facial?', a: 'Most patients experience redness, mild swelling and sensitivity for 24–72 hours after treatment. This is a normal inflammatory response that supports the regenerative process. Most patients can return to work and normal activities within 1–2 days.' },
      { q: 'Is PRP facial safe for all skin types?', a: 'Yes. Because PRP uses your own blood, there is no risk of allergic reaction to the treatment itself. It is suitable for all skin tones and types. Any pre-existing skin sensitivities or conditions will be assessed at consultation before treatment is recommended.' },
    ],
    related: ['vampire-facial', 'under-eye', 'acne-scars'],
  },

  'vampire-facial': {
    title: 'Vampire Facial® (PRP + Microneedling)',
    subtitle: 'Maximum Collagen Stimulation',
    img: '/assets/face3.png',
    price: 'From £650',
    sessions: '2–4 sessions',
    downtime: '48–72 hours',
    intro: 'The Vampire Facial combines PRP with microneedling to maximise growth factor penetration and collagen stimulus. Microneedling creates thousands of microchannels that allow PRP to work at optimal depth — producing significantly enhanced skin renewal results.',
    faqs: [
      { q: 'What is the Vampire Facial?', a: 'The Vampire Facial is a combination treatment that uses microneedling to create controlled microchannels in the skin, then applies PRP to penetrate deeply through these channels. The synergy between the two techniques produces a more powerful collagen stimulus than either treatment alone.' },
      { q: 'Why is it called the Vampire Facial?', a: 'The name refers to the use of the patient\'s own blood — drawn, processed into PRP and then applied to the skin. It was popularised in aesthetic medicine as a vivid way to describe this self-derived regenerative process. The procedure itself is a clinically sound aesthetic treatment.' },
      { q: 'What does the Vampire Facial treat?', a: 'The Vampire Facial is highly effective for improving skin texture, reducing fine lines and wrinkles, treating acne scars, improving skin tone and radiance, reducing pore size and addressing early skin laxity. It is one of the most comprehensive single skin treatments available.' },
      { q: 'Does the Vampire Facial hurt?', a: 'Topical anaesthetic cream is applied before treatment to minimise discomfort from the microneedling. Most patients describe a warm, tingling sensation. Sensitivity varies — the forehead and around the lips tend to be more sensitive areas. The procedure is generally well-tolerated.' },
      { q: 'How many Vampire Facial sessions do I need?', a: 'A course of 2–4 sessions is typically recommended, spaced 4–6 weeks apart. The number depends on the severity of your skin concerns. Many patients notice significant improvement after a single session, with continued improvement after a full course.' },
      { q: 'What is recovery like after a Vampire Facial?', a: 'Skin appears red and may feel tight or sensitive for 48–72 hours after treatment — similar in appearance to mild sunburn. Micro-crusting can occur in the days following. Avoid make-up, active skincare ingredients (retinol, AHAs) and sun exposure for at least 48 hours.' },
      { q: 'How long do Vampire Facial results last?', a: 'Results typically last 12–18 months depending on age, skin condition and lifestyle. A maintenance session every 12 months is recommended. The collagen produced during treatment represents genuine tissue improvement, not a temporary surface effect.' },
      { q: 'Can the Vampire Facial be combined with other treatments?', a: 'The Vampire Facial already combines two techniques. It can be incorporated into a broader treatment plan alongside other aesthetic procedures — Dr Matla will advise on the most appropriate sequencing and combination based on your individual goals.' },
    ],
    related: ['facial-rejuvenation', 'acne-scars', 'prp-co2-laser'],
  },

  'acne-scars': {
    title: 'PRP for Acne Scars',
    subtitle: 'Scar Remodelling & Skin Renewal',
    img: '/assets/acne.png',
    price: 'From £490',
    sessions: '3–6 sessions',
    downtime: '48–72 hours',
    intro: 'PRP combined with microneedling actively remodels scar tissue and stimulates collagen formation in the dermis — gradually reducing the depth and visibility of acne scars and improving overall skin texture.',
    faqs: [
      { q: 'Can PRP improve acne scars?', a: 'Yes. PRP is an effective treatment for acne scarring, particularly when combined with microneedling. Growth factors in PRP stimulate fibroblast activity and new collagen formation, which gradually remodels the scar tissue and smooths the skin surface.' },
      { q: 'What types of acne scars does PRP treat?', a: 'PRP with microneedling is most effective for rolling scars and shallow boxcar scars, which respond well to collagen remodelling. Ice-pick scars (deep and narrow) are more resistant to surface treatments and may require additional procedures such as subcision or punch excision alongside PRP.' },
      { q: 'How many sessions of PRP do I need for acne scars?', a: 'Acne scar treatment typically requires 3–6 sessions depending on the type and depth of scarring. Sessions are spaced 4–6 weeks apart to allow collagen remodelling to progress between treatments. Deeper or more established scars may require more sessions.' },
      { q: 'How long does PRP take to improve acne scars?', a: 'Visible improvement in skin texture and scar appearance typically develops gradually over 3–6 months as new collagen matures. Initial improvements may be noticeable after 4–6 weeks, with continued enhancement for several months after completing the treatment course.' },
      { q: 'Is PRP or laser better for acne scars?', a: 'Both have merits. PRP combined with microneedling is effective and suitable for all skin tones with minimal downtime. Fractional CO₂ laser produces more aggressive resurfacing but carries greater risk of pigmentation changes in darker skin tones. PRP + CO₂ laser combined is a powerful option for suitable candidates. Dr Matla will recommend the most appropriate approach based on your skin and scar type.' },
      { q: 'Does PRP help with post-acne hyperpigmentation?', a: 'PRP can improve overall skin tone and brightness, which may help reduce the appearance of post-inflammatory hyperpigmentation (PIH) over time. However, targeted pigmentation treatments may also be recommended alongside PRP for optimal results.' },
      { q: 'Is PRP for acne scars painful?', a: 'Topical anaesthetic cream is applied before microneedling to minimise discomfort. The procedure is typically well-tolerated. Sensitivity varies between areas of the face and between individuals. Any significant discomfort during treatment will be managed by Dr Matla.' },
      { q: 'Can PRP be used alongside active acne treatment?', a: 'PRP is not appropriate while active acne is inflamed or infected. Treatment should be undertaken once acne is controlled, as inflammation can compromise results and increase the risk of spreading bacteria. A full skin assessment at consultation will determine the right time to begin treatment.' },
    ],
    related: ['vampire-facial', 'facial-rejuvenation', 'prp-co2-laser'],
  },

  'under-eye': {
    title: 'PRP Under Eye Treatment',
    subtitle: 'Dark Circles & Periorbital Rejuvenation',
    img: '/assets/face.png',
    price: 'From £380',
    sessions: '2–3 sessions',
    downtime: '24–48 hours',
    intro: 'The delicate skin under the eye responds exceptionally well to PRP. Targeted injections improve skin thickness, reduce the appearance of dark circles and soften the hollow tear trough area — naturally and without filler.',
    faqs: [
      { q: 'Can PRP improve under-eye darkness?', a: 'Yes. PRP Under Eye Treatment improves skin thickness and quality in the periorbital area, which reduces the visibility of underlying vasculature (a common cause of dark circles). It also improves microvascular circulation and skin brightness in the area.' },
      { q: 'Is PRP better than filler for under eyes?', a: 'PRP and tear trough filler address slightly different problems. Filler adds volume to the hollow tear trough immediately. PRP improves the quality and thickness of the skin itself over time. For patients with primarily skin-quality concerns (thin, crepey skin, discolouration), PRP can be very effective. Some patients benefit from both.' },
      { q: 'How many sessions of PRP do I need for under eyes?', a: 'Most patients see good improvement after 2–3 sessions spaced 4–6 weeks apart. The under-eye area is delicate and responds gradually — patience between sessions is important for assessing progress.' },
      { q: 'Is PRP under eye treatment safe?', a: 'PRP is generally safe for the periorbital area when performed by an experienced clinician. The under-eye region requires particular care due to the proximity of delicate structures. Dr Matla uses precise injection technique adapted to this sensitive area.' },
      { q: 'How long do PRP under eye results last?', a: 'Results typically persist for 12–18 months. Maintenance sessions help sustain the improvement in skin thickness and brightness achieved. Lifestyle factors such as sleep quality, hydration and sun protection also influence how long results last.' },
      { q: 'Will PRP help with puffiness under the eyes?', a: 'PRP primarily improves skin quality and darkness rather than puffiness. Under-eye puffiness caused by fluid retention or fat prolapse is better addressed through other means. A full assessment at consultation will determine what is causing your concern and what treatment is most appropriate.' },
      { q: 'Is there much downtime after under eye PRP?', a: 'The under-eye area can bruise more easily than other facial areas. Mild bruising, swelling and redness for 24–48 hours is common. Most patients can cover any bruising with make-up after 24 hours and return to work within 1–2 days.' },
      { q: 'What causes dark circles and can PRP fix them?', a: 'Dark circles can result from several factors: thin skin showing underlying blood vessels, pigmentation, hollowness (tear trough), poor circulation or genetics. PRP is most effective for darkness caused by thin skin and poor circulation. Pigmentation-driven circles may require additional targeted treatment. An accurate assessment at consultation will guide the right approach.' },
    ],
    related: ['facial-rejuvenation', 'vampire-facial'],
  },

  'neck-decolletage': {
    title: 'Neck & Décolletage Renewal',
    subtitle: 'Skin Tightening & Rejuvenation',
    img: '/assets/neck.png',
    price: 'From £420',
    sessions: '2–4 sessions',
    downtime: '24–48 hours',
    intro: 'The neck and chest are among the earliest areas to reveal ageing and sun damage, yet are often overlooked in aesthetic treatment. PRP injections and microneedling restore firmness, brightness and smoothness to these delicate, exposed areas.',
    faqs: [
      { q: 'Can PRP tighten the neck?', a: 'PRP stimulates collagen production in the neck skin, which can improve firmness and reduce the appearance of skin laxity in mild-to-moderate cases. It is not a surgical alternative but an effective regenerative support for patients who want to address early neck skin changes without surgery.' },
      { q: 'Is PRP good for crepey neck skin?', a: 'Yes. Crepey texture in the neck is caused by collagen loss and sun damage. PRP combined with microneedling can significantly improve skin texture, thickness and firmness in this area over a course of treatments.' },
      { q: 'What causes chest wrinkles and can PRP help?', a: 'Chest (décolletage) wrinkles are typically caused by a combination of sun damage, collagen loss and sleeping position. PRP stimulates collagen production and improves skin quality, which can noticeably reduce the appearance of chest wrinkles and improve skin tone.' },
      { q: 'How many sessions do I need for neck and décolletage PRP?', a: 'A course of 2–4 sessions is typically recommended, depending on the severity of skin changes and the response to initial treatment. Sessions are spaced 4–6 weeks apart.' },
      { q: 'Is PRP or laser better for neck rejuvenation?', a: 'Both have merits. PRP with microneedling offers a lower downtime option suitable for all skin types. Fractional CO₂ laser produces more aggressive resurfacing but requires longer recovery. PRP + CO₂ laser combined can produce exceptional results for suitable candidates. Dr Matla will advise based on your skin and concerns.' },
      { q: 'How long do neck PRP results last?', a: 'Results typically last 12–18 months, with ongoing improvement in collagen quality for several months after completing the treatment course. Annual maintenance sessions help sustain the outcome.' },
      { q: 'Can the neck be treated at the same time as the face?', a: 'Yes — face, neck and décolletage can all be treated in the same session. Combining these areas in one appointment is efficient and produces a cohesive result across the full décolletage area.' },
      { q: 'What is the recovery after neck PRP?', a: 'Mild redness and sensitivity for 24–48 hours is typical. The neck and chest can sometimes bruise slightly. Most patients can return to daily activities within 1–2 days. Avoid tight collars and necklaces for 24 hours post-treatment.' },
    ],
    related: ['facial-rejuvenation', 'vampire-facial'],
  },

  'prp-co2-laser': {
    title: 'PRP + Fractional CO₂ Laser',
    subtitle: 'Advanced Combination Resurfacing',
    img: '/assets/co.png',
    price: 'From £750',
    sessions: '1–3 sessions',
    downtime: '5–7 days',
    intro: 'PRP combined with fractional CO₂ laser resurfacing produces exceptional skin renewal results. The laser creates precise channels of thermal injury that trigger remodelling; PRP dramatically accelerates healing and enhances the quality of skin produced during recovery.',
    faqs: [
      { q: 'What is PRP + CO₂ laser treatment?', a: 'This combination uses fractional CO₂ laser to resurface the skin — creating thousands of tiny columns of controlled thermal injury that stimulate intense collagen remodelling. PRP is applied immediately after the laser to flood the skin with growth factors, significantly enhancing and accelerating the healing and regenerative response.' },
      { q: 'Why combine PRP with CO₂ laser?', a: 'The combination produces results that surpass either treatment alone. CO₂ laser creates the stimulus for deep collagen remodelling; PRP supports faster recovery, reduces post-treatment redness and enhances the quality of new skin formed. Studies show that adding PRP to CO₂ laser treatment improves outcomes and reduces downtime.' },
      { q: 'What skin concerns does PRP + CO₂ laser treat?', a: 'This combination is particularly effective for deep acne scars, significant photoageing, wrinkles, uneven skin texture, enlarged pores, sun damage and skin laxity. It is one of the most powerful non-surgical resurfacing protocols available.' },
      { q: 'How much downtime does PRP + CO₂ laser require?', a: 'Recovery after CO₂ laser is more significant than PRP alone — typically 5–7 days of redness, swelling and skin shedding. Adding PRP can reduce this recovery period and improve comfort during healing. Full skin normalisation may take 2–4 weeks, with ongoing improvement for 3–6 months.' },
      { q: 'Is PRP + CO₂ laser suitable for all skin types?', a: 'Fractional CO₂ laser carries a risk of post-inflammatory hyperpigmentation in darker skin tones (Fitzpatrick IV–VI). A thorough assessment is required to determine suitability. For patients with darker complexions, PRP microneedling or other laser types may be more appropriate.' },
      { q: 'How many sessions of PRP + CO₂ laser do I need?', a: 'Many patients achieve their goals with 1–2 sessions of this combination, given its power and depth of treatment. Sessions are spaced at least 3 months apart to allow full skin recovery and collagen maturation.' },
      { q: 'How long do PRP + CO₂ laser results last?', a: 'Results from CO₂ laser resurfacing with PRP are long-lasting — collagen produced during recovery represents genuine tissue improvement. Many patients enjoy results for 2–5 years, with the natural ageing process continuing thereafter. A single maintenance session may be recommended after 2–3 years.' },
      { q: 'How do I prepare for PRP + CO₂ laser?', a: 'Dr Matla will provide detailed pre-treatment preparation guidance at consultation. This typically includes stopping retinoids 1–2 weeks before, using daily SPF 50+ for several weeks prior, and in some cases using skin conditioning products to optimise the skin before treatment.' },
    ],
    related: ['vampire-facial', 'acne-scars', 'facial-rejuvenation'],
  },

  'prp-dermapen': {
    title: 'PRP + Dermapen',
    subtitle: 'Precision Microneedling with PRP',
    img: '/assets/face3.png',
    price: 'From £580',
    sessions: '3–4 sessions',
    downtime: '24–48 hours',
    intro: 'Dermapen creates controlled micro-injuries across the skin surface that stimulate natural repair. Combined with PRP, this treatment produces powerful collagen stimulation — suitable for all skin types with minimal downtime and excellent results for texture, tone and early ageing.',
    faqs: [
      { q: 'What is PRP + Dermapen treatment?', a: 'Dermapen is a medical microneedling device that creates precise, controlled micro-injuries across the skin at adjustable depth. When PRP is applied during or after this process, growth factors penetrate deeply through the microchannels to dramatically enhance the collagen stimulus and regenerative response.' },
      { q: 'What is the difference between PRP + Dermapen and the Vampire Facial?', a: 'These terms are often used interchangeably — both describe the combination of PRP and microneedling. Dermapen is the specific device used. The Vampire Facial® is the branded name for this combination treatment. The technique and outcomes are essentially the same.' },
      { q: 'Is PRP + Dermapen suitable for all skin types?', a: 'Yes. This combination is suitable for all skin tones and types, including darker complexions (Fitzpatrick IV–VI) where laser treatments carry greater risk. It is one of the most universally suitable aesthetic skin treatments available.' },
      { q: 'What can PRP + Dermapen treat?', a: 'This treatment addresses a wide range of concerns including fine lines and wrinkles, acne scars, uneven skin texture, enlarged pores, dull or uneven complexion, mild skin laxity and sun damage. It is an excellent all-rounder skin rejuvenation treatment.' },
      { q: 'How many sessions of PRP + Dermapen do I need?', a: 'A course of 3–4 sessions spaced 4–6 weeks apart is typically recommended for optimal results. The number may vary based on the severity of your skin concerns and your individual response to treatment.' },
      { q: 'What is recovery like after PRP + Dermapen?', a: 'Skin appears red and may feel warm or sensitive for 24–48 hours — similar to mild sunburn. Mild swelling and micro-crusting can occur over the following days. Avoid make-up, active skincare ingredients and sun exposure for at least 48 hours.' },
      { q: 'When will I see results from PRP + Dermapen?', a: 'Initial improvements in skin radiance and texture are often noticeable within 2–4 weeks of the first session. Collagen continues to develop over 3–6 months after a full course, with ongoing improvement in skin quality throughout this period.' },
      { q: 'Can PRP + Dermapen be done on the body as well as the face?', a: 'Yes. Microneedling with PRP can be applied to body areas including the neck, décolletage, hands, abdomen and arms — wherever skin quality improvement is desired. The depth settings are adjusted for different body areas.' },
    ],
    related: ['vampire-facial', 'facial-rejuvenation', 'acne-scars'],
  },
};

const relatedLabels = {
  'hair-restoration': 'PRP Hair Restoration',
  'female-hair-loss': 'Female Hair Loss PRP',
  'male-pattern-baldness': 'Male Pattern Baldness PRP',
  'hair-transplant': 'PRP After Hair Transplant',
  'facial-rejuvenation': 'Facial Rejuvenation PRP',
  'vampire-facial': 'Vampire Facial®',
  'acne-scars': 'PRP Acne Scars',
  'under-eye': 'Under Eye PRP',
  'neck-decolletage': 'Neck & Décolletage',
  'prp-co2-laser': 'PRP + CO₂ Laser',
  'prp-dermapen': 'PRP + Dermapen',
};

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-a-wrap" style={{ maxHeight: open ? '600px' : '0' }}>
        <div className="faq-a">{answer}</div>
      </div>
    </div>
  );
}

export default function TreatmentFAQPage() {
  const { slug } = useParams();
  const data = treatmentFAQs[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!data) return <Navigate to="/faq" replace />;

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="tx-hero">
        <div className="tx-hero-bg" />
        <div className="wrap tx-hero-inner">
          <FadeIn>
            <div className="eyebrow center" style={{ justifyContent: 'center' }}>
              <Link to="/faq" style={{ color: 'var(--gold)', textDecoration: 'none', opacity: .7 }}>FAQ</Link>
              <span style={{ opacity: .3, margin: '0 .5rem' }}>/</span>
              {data.subtitle}
            </div>
            <h1 className="sh text-center">{data.title} — <em>FAQ</em></h1>
            <div className="gd center" />
            <p className="tx-hero-sub">{data.intro}</p>
          </FadeIn>

          {/* Treatment quick stats */}
          <FadeIn delay={0.15}>
            <div className="tfaq-stats">
              <div className="tfaq-stat">
                <div className="tfaq-stat-label">Price Guide</div>
                <div className="tfaq-stat-val">{data.price}</div>
              </div>
              <div className="tfaq-stat-div" />
              <div className="tfaq-stat">
                <div className="tfaq-stat-label">Sessions</div>
                <div className="tfaq-stat-val">{data.sessions}</div>
              </div>
              <div className="tfaq-stat-div" />
              <div className="tfaq-stat">
                <div className="tfaq-stat-label">Downtime</div>
                <div className="tfaq-stat-val">{data.downtime}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ List */}
      <section className="sec faq-sec">
        <div className="wrap">
          <div className="tfaq-content-grid">
            {/* Questions */}
            <div>
              <FadeIn>
                <div className="eyebrow">Patient Questions</div>
                <h2 className="sh">Common <em>Questions</em></h2>
                <div className="gd" />
              </FadeIn>
              <div className="faq-list" style={{ maxWidth: '100%', marginTop: '2rem' }}>
                {data.faqs.map((item, i) => (
                  <FadeIn key={item.q} delay={i * 0.05}>
                    <FAQItem question={item.q} answer={item.a} />
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="tfaq-sidebar">
              <FadeIn delay={0.2}>
                <div className="tfaq-sidebar-box">
                  <div className="tfaq-sidebar-img-wrap">
                    <img src={data.img} alt={data.title} className="tfaq-sidebar-img" />
                  </div>
                  <div className="tfaq-sidebar-body">
                    <div className="tfaq-sidebar-title">{data.title}</div>
                    <div className="tfaq-sidebar-price">{data.price}</div>
                    <a href="/#booking" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                      <span>Book Consultation</span>
                    </a>
                    <Link to="/treatments" className="btn-ghost" style={{ width: '100%', justifyContent: 'center', marginTop: '.7rem', textAlign: 'center' }}>
                      View Treatment
                    </Link>
                  </div>
                </div>

                {/* Related FAQs */}
                {data.related?.length > 0 && (
                  <div className="tfaq-related">
                    <div className="tfaq-related-title">Related Treatment FAQs</div>
                    {data.related.map(r => (
                      <Link key={r} to={`/faq/treatment/${r}`} className="tfaq-related-link">
                        <span>{relatedLabels[r]}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* All treatments nav */}
      <section className="tfaq-all-sec">
        <div className="wrap">
          <FadeIn>
            <div className="eyebrow center">Browse All Treatment FAQs</div>
            <div className="tfaq-all-grid">
              {Object.entries(treatmentFAQs).map(([s, d]) => (
                <Link key={s} to={`/faq/treatment/${s}`} className={`tfaq-all-card${s === slug ? ' tfaq-all-card--active' : ''}`}>
                  <span className="tfaq-all-name">{d.title}</span>
                  <span className="tfaq-all-count">{d.faqs.length} questions</span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="tx-cta-band">
        <div className="wrap text-center">
          <FadeIn>
            <div className="eyebrow center">Still Have Questions?</div>
            <h2 className="sh">Book a Private <em>Consultation</em></h2>
            <div className="gd center" />
            <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Every patient is assessed individually. Dr Matla will discuss your specific concerns, medical history and the most appropriate treatment options for you.
            </p>
            <a href="/#booking" className="btn-gold"><span>Reserve Your Consultation</span></a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
