import Link from 'next/link';
import { Users, Star, ShieldCheck, Sparkles, CheckCircle2, Clock3, Award, Activity, Scissors, Zap } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, FaqReviewsCta, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function FrenectomyPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['frenectomy'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Painless Diode Laser Frenectomy', 'Zero Scalpel & Zero Sutures', 'Instant 5-Minute Procedure', 'Safe for Infants, Kids & Adults']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Painless Laser Tongue &"
        headlineMain="Lip Tie Frenectomy"
        subtitle="Safe, Gentle & Suture-Free Release in Minutes"
        desc="Release restrictive tongue ties (ankyloglossia) and lip ties with gentle soft-tissue laser technology. Improves speech, infant nursing, and closes front tooth gaps safely."
        bullets={[
          'Advanced Diode Laser Technology',
          'Zero Scalpel & Zero Stitches Required',
          'Virtually Pain-Free with Fast Healing',
          'Resolves Speech & Nursing Impediments',
          'Prevents & Closes Midline Tooth Gaps',
          'Completed in Under 10 Minutes',
        ]}
        image={mediaMap?.hero_frenectomy || '/images/new images/Treatments Theme Images/Frenectomy.png'}
        imageAlt="Painless laser frenectomy procedure"
        bookLabel="Book Frenectomy Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="5-Minute Laser Cure"
      />

      <StatsBar items={[
        { icon: <Clock3 className="w-6 h-6" />, label: '5-10 Mins', sub: 'Procedure Time' },
        { icon: <Users className="w-6 h-6" />, label: '3,000+', sub: 'Ties Released' },
        { icon: <Zap className="w-6 h-6" />, label: 'Zero Sutures', sub: 'Laser Cauterized' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '100% Safe', sub: 'For All Ages' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Parent & Patient Rating' },
      ]} />

      <ServiceIconGrid
        title="Specialized Frenectomy Applications"
        cols={4}
        items={[
          { icon: <Activity className="w-7 h-7" />, title: 'Lingual Frenectomy (Tongue Tie)', desc: 'Frees restricted tongue movement (ankyloglossia) to dramatically enhance speech articulation and infant feeding latch.' },
          { icon: <Scissors className="w-7 h-7" />, title: 'Labial Frenectomy (Lip Tie)', desc: 'Releases thick tissue attaching the upper lip to gums, enabling orthodontics to permanently close midline diastema gaps.' },
          { icon: <Zap className="w-7 h-7" />, title: 'Diode Laser Photocoagulation', desc: 'Seals micro-blood vessels simultaneously during release, resulting in virtually zero bleeding and reduced inflammation.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Myofunctional Guidance', desc: 'Custom tongue exercises post-release to ensure optimal mobility, muscle retraining, and zero scar reattachment.' },
        ]}
      />

      <HowItWorksFlow
        title="The 4-Step Gentle Laser Experience"
        steps={[
          { icon: <Activity className="w-6 h-6" />, title: 'Mobility Exam', desc: 'Evaluate functional restriction' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Topical Numbing', desc: 'Gentle anesthetic gel applied' },
          { icon: <Zap className="w-6 h-6" />, title: 'Laser Release', desc: 'Light beam vaporizes restriction' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Instant Recovery', desc: 'Immediate movement, no sutures' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Sneha"
            title="BDS, PGD Clinical Cosmetology & Laser Dentistry"
            image="/dr.sneha.jpg"
            experienceBadge="8+ Years of Laser & Pediatric Dental Care"
            bullets={[
              'Certified in Minimally Invasive Soft-Tissue Laser Surgeries',
              'Specialist in Pediatric & Infant Tongue/Lip Tie Releases',
              'Collaborative Care with Speech Pathologists & Lactation Consultants',
              'Gentle, compassionate approach for anxiety-free patient visits',
            ]}
            eyebrow="Meet Your Laser Specialist"
          />
          <CostHighlightCard
            title="Laser Frenectomy Pricing"
            price="₹2,500*"
            disclaimer="*Cost includes laser procedure, local numbing, post-operative assessment, and mobility exercises."
            bullets={[
              'Comprehensive functional mobility assessment',
              'Precision soft-tissue diode laser release',
              'Zero scalpel cuts, zero stitches, zero bleeding',
              'Post-procedure follow-up and stretch guide included',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Dental World Laser Frenectomy vs Traditional Scalpel Surgery"
            headers={['Feature', 'Dental World Laser Frenectomy', 'Traditional Scalpel Frenectomy']}
            rows={[
              { feature: 'Scalpel Incision Required', main: 'No (Gentle light energy)', alt: 'Yes (Surgical blade)' },
              { feature: 'Need for Stitches (Sutures)', main: 'Zero Sutures Needed', alt: 'Requires painful stitches' },
              { feature: 'Bleeding During Treatment', main: 'None (Instant Cauterization)', alt: 'Moderate to heavy' },
              { feature: 'Procedure Duration', main: 'Under 5 to 8 minutes', alt: '25 to 40 minutes' },
              { feature: 'Post-Op Healing Time', main: '24 to 48 hours', alt: '1 to 2 weeks with discomfort' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Laser Frenectomy?"
        items={[
          { icon: <Zap className="w-6 h-6" />, title: 'Diode Laser', desc: 'Precision' },
          { icon: <Clock3 className="w-6 h-6" />, title: '5-Minute', desc: 'Treatment' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Zero', desc: 'Stitches' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Rapid', desc: 'Healing' },
          { icon: <Users className="w-6 h-6" />, title: 'Gentle', desc: 'Pediatric Care' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Swathi N.', text: 'Our 6-year-old had a severe tongue tie affecting his pronunciation. Dr. Sneha completed the laser frenectomy in less than 5 minutes. No tears, no bleeding, and his speech improved rapidly!' },
          { name: 'Rohit B.', text: 'Had an upper lip tie released prior to starting aligners. The laser treatment was painless and healed completely in 2 days. Highly impressed with Dental World.' },
        ]}
        ctaTitle="Free Your Tongue & Smile with Gentle Laser Care"
        ctaDesc="Safe, suture-free relief for children and adults. Schedule a consultation with our laser dental specialists today."
        ctaChecks={['Painless', 'Zero Stitches', '5 Minutes', 'Safe']}
        bookLabel="Book Laser Frenectomy Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Frenectomy Consultation" treatment="Frenectomy" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Resolve Tongue & Lip Ties Gently in 5 Minutes — Book Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
