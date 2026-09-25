import Link from 'next/link';
import { Users, Star, ShieldCheck, Sparkles, CheckCircle2, Clock3, Award, Activity, AlertTriangle, Search, Zap } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, FaqReviewsCta, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY, NAVY_LIGHT, RED,
} from '@/components/landing/LandingKit';

export default function MouthUlcersPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['mouth-ulcers'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Instant Laser Ulcer Pain Relief', 'Oral Lesion & Biopsy Screening', 'Leukoplakia & Erythroplakia Care', 'Painless Diode Phototherapy']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Laser Mouth Ulcer Relief &"
        headlineMain="Oral Lesion Screening"
        subtitle="Instant Pain Block in 60 Seconds & Advanced Mucosal Health"
        desc="Instant pain relief for acute canker sores with non-contact diode laser therapy, alongside specialized clinical diagnosis and biopsy protocols for chronic non-healing oral ulcers."
        bullets={[
          'Instant Pain Relief in Under 60 Seconds',
          'Non-Contact Diode Laser Photobiomodulation',
          'Accelerates Natural Tissue Healing by 70%',
          'Clinical Workup for Ulcers Lasting >2 Weeks',
          'Precancerous Screening (Leukoplakia & Erythroplakia)',
          'Minimally Invasive Diagnostic Biopsy Facility',
        ]}
        image={mediaMap?.hero_mouth_ulcers || '/images/new images/Treatments Theme Images/Mouth Ulcers.png'}
        imageAlt="Specialized mouth ulcer laser treatment and oral lesion screening"
        bookLabel="Book Ulcer Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="Instant Pain Relief"
      />

      <StatsBar items={[
        { icon: <Zap className="w-6 h-6" />, label: '60 Seconds', sub: 'Pain Relief' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: 'Non-Contact', sub: 'Zero Injections' },
        { icon: <Search className="w-6 h-6" />, label: '100% Screen', sub: 'For Chronic Sores' },
        { icon: <Award className="w-6 h-6" />, label: 'Biopsy Ready', sub: 'Histopathology' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Patient Comfort' },
      ]} />

      {/* Critical Medical Alert: Non-Healing Ulcers */}
      <section className="py-10 bg-red-50 border-y border-red-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-red-200 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-black text-red-700">
                  When Should You Worry About a Mouth Ulcer?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  While ordinary canker sores heal within 7 to 10 days, <strong>any mouth ulcer, painless firm induration, or red/white lesion that lasts longer than 14 days must be examined immediately</strong>. Early clinical diagnosis and biopsy of oral mucosal conditions prevent complications and ensure complete cure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    'Ulcer lasting more than 2 weeks without healing',
                    'Non-wipeable white patches (Leukoplakia)',
                    'Velvety bright red patches (Erythroplakia)',
                    'Firm, painless hard edges around an ulcer',
                    'Unexplained bleeding or numbness in mouth',
                    'Swollen lymph nodes in neck or under jaw',
                    'Difficulty swallowing, chewing, or moving tongue',
                    'Chronic ulcer caused by sharp jagged tooth or denture',
                  ].map((symptom, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-red-50/60 rounded-xl px-3 py-2 border border-red-100">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceIconGrid
        title="Comprehensive Oral Mucosa & Ulcer Care"
        cols={4}
        items={[
          { icon: <Zap className="w-7 h-7" />, title: 'Diode Laser Phototherapy', desc: 'Non-burning light seals exposed nerve fibers in aphthous canker sores, delivering instant pain relief.' },
          { icon: <Search className="w-7 h-7" />, title: 'Oral Lesion Screening', desc: 'Clinical evaluation using illumination and vital mucosal staining to identify dysplastic cellular changes.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Diagnostic Tissue Biopsy', desc: 'Gentle punch or incisional biopsy with accredited histopathology testing for any ulcer persisting over 14 days.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Sharp Tooth Contouring', desc: 'Smoothing traumatic jagged tooth edges and rough restorations that repeatedly lacerate cheeks or tongue.' },
        ]}
      />

      <HowItWorksFlow
        title="Your Clinical Evaluation & Treatment Journey"
        steps={[
          { icon: <Search className="w-6 h-6" />, title: 'Mucosal Exam', desc: 'Examine duration, size & edges' },
          { icon: <Zap className="w-6 h-6" />, title: 'Laser Session', desc: 'Instant pain block in 60s' },
          { icon: <AlertTriangle className="w-6 h-6" />, title: 'Biopsy (If >2 Wks)', desc: 'Rule out dysplastic changes' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Sharp Edge Fix', desc: 'Coronoplasty tooth smoothing' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Nutritional Care', desc: 'B12, Folate & Iron evaluation' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Complete Healing', desc: 'Follow-up until full resolution' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Sneha"
            title="BDS, PGD Clinical Cosmetology & Restorative Dentistry"
            image="/dr.sneha.jpg"
            experienceBadge="8+ Years of Soft-Tissue & Laser Care"
            bullets={[
              'Certified in Advanced Diode Laser Photobiomodulation',
              'Specialist in Clinical Screening of Oral Mucosal Lesions',
              'Collaborative protocols with Senior Oral Pathologists & Surgeons',
              'Dedicated to gentle, immediate pain relief and preventive safety',
            ]}
            eyebrow="Meet Your Oral Medicine Specialist"
          />
          <CostHighlightCard
            title="Mouth Ulcer & Lesion Care Cost"
            price="₹1,000*"
            disclaimer="*Laser therapy starts at ₹1,000. Biopsy procedures and lab histopathology charges depend on lesion location and size."
            bullets={[
              'Instant non-contact diode laser pain relief included',
              'Full oral mucosal screening exam included',
              'Prescription soothing anti-inflammatory gels',
              'Transparent pricing for diagnostic biopsy testing',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Laser Clinic Treatment vs Home Salt Water / OTC Gels"
            headers={['Feature', 'Dental World Laser Treatment', 'Over-The-Counter Gels', 'Salt Water Rinses']}
            rows={[
              { feature: 'Instant Pain Elimination', main: 'Yes (Within 60 Seconds)', alt: 'Temporary numbing only', opt2: 'No (Stings & burns severely)' },
              { feature: 'Accelerates Tissue Healing', main: 'Yes (70% Faster Closure)', alt: 'Slow (10 to 14 days)', opt2: 'Mild antiseptic only' },
              { feature: 'Zero Burning Sensation', main: 'Yes (Warm soothing light)', alt: 'Stings upon initial contact', opt2: 'Intense burning pain' },
              { feature: 'Screens Serious Lesions', main: 'Yes (Expert clinical screening)', alt: 'No (Masks symptoms dangerously)', opt2: 'No' },
              { feature: 'Prevents Local Recurrence', main: 'Yes (Sterilizes bacteria)', alt: 'No', opt2: 'No' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Mouth Ulcer Care?"
        items={[
          { icon: <Zap className="w-6 h-6" />, title: 'Instant', desc: 'Pain Relief' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Diode Laser', desc: 'No Injections' },
          { icon: <Search className="w-6 h-6" />, title: 'Specialist', desc: 'Lesion Exam' },
          { icon: <Award className="w-6 h-6" />, title: 'Biopsy Lab', desc: 'Tie-Ups' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Under 10 Mins', desc: 'Procedure' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Pooja R.', text: 'I couldn\'t eat or speak because of a severe ulcer on the inner lip. Dr. Sneha treated it with a diode laser in just two minutes without touching the sore. The pain vanished immediately!' },
          { name: 'Venu Gopal', text: 'I had a white patch and non-healing sore on my tongue for 3 weeks. The team here carried out a painless punch biopsy and got the report in 4 days. Very professional and reassuring clinical care.' },
        ]}
        ctaTitle="Don't Suffer with Mouth Ulcer Pain"
        ctaDesc="Get instant relief and expert clinical reassurance. Visit our clinics in Bachupally & Pragathi Nagar today."
        ctaChecks={['Instant Relief', 'Painless', 'Zero Needles', 'Specialist Care']}
        bookLabel="Book Ulcer Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Mouth Ulcer Consultation" treatment="Mouth Ulcers" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Instant Pain Relief in 60 Seconds — Book Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
