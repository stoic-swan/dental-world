import Link from 'next/link';
import { Users, Star, ShieldCheck, Sparkles, CheckCircle2, Clock3, Award, Activity, Search } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, FaqReviewsCta, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function ToothDecayPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['tooth-decay-fillings'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['100% Mercury-Free Fillings', 'Natural Tooth-Colored Composite', 'Laser Cavity Detection', 'Painless Single-Visit Care']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Advanced Tooth Decay &"
        headlineMain="Dental Fillings"
        subtitle="Restore Your Natural Smile Seamlessly"
        desc="Stop cavity progression and restore decayed or chipped teeth with invisible, biocompatible composite fillings from senior restorative specialists."
        bullets={[
          'Natural Tooth-Colored Resins',
          '100% Mercury-Free & Safe',
          'Painless Micro-Invasive Technique',
          'Preserves Maximum Tooth Structure',
          'Completed in a Single Quick Visit',
          'High Durability & Seamless Blend',
        ]}
        image={mediaMap?.hero_tooth_decay || '/images/treatments/tooth-decay-and-fillings.png'}
        imageAlt="Dental cavity restoration and tooth colored filling"
        bookLabel="Book Cavity Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="15+ Years Experience"
      />

      <StatsBar items={[
        { icon: <Award className="w-6 h-6" />, label: '15+ Years', sub: 'Clinical Excellence' },
        { icon: <Users className="w-6 h-6" />, label: '25,000+', sub: 'Cavities Restored' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '100%', sub: 'Mercury-Free' },
        { icon: <Clock3 className="w-6 h-6" />, label: '30-45 Mins', sub: 'Single-Visit Cure' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Patient Satisfaction' },
      ]} />

      <ServiceIconGrid
        title="Modern Restorative Technology"
        cols={4}
        items={[
          { icon: <Search className="w-7 h-7" />, title: 'Digital Caries Detection', desc: 'Detects microscopic enamel decay before deep bacterial invasion occurs.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Nano-Hybrid Composites', desc: 'High-strength German restorative resins engineered to mimic natural enamel translucency.' },
          { icon: <Activity className="w-7 h-7" />, title: 'LED Curing Polymerization', desc: 'Instantly hardens composite layers for immediate chewing readiness.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Rubber Dam Isolation', desc: 'Ensures a 100% moisture-free, sterile field for maximum resin bonding strength.' },
        ]}
      />

      <HowItWorksFlow
        title="Step-by-Step Pain-Free Cavity Restoration"
        steps={[
          { icon: <Search className="w-6 h-6" />, title: 'Digital Exam', desc: 'Identify decay depth via RVG' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Gentle Numbing', desc: 'Painless anesthesia application' },
          { icon: <Activity className="w-6 h-6" />, title: 'Decay Removal', desc: 'Micro-cleaning of bacteria' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Etching & Bonding', desc: 'Biocompatible bonding primer' },
          { icon: <Award className="w-6 h-6" />, title: 'Composite Layering', desc: 'Custom shade matched sculpt' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Polish & Occlusion', desc: 'Smooth, natural bite check' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Abdul Wahed"
            title="MDS – Endodontics & Conservative Dentistry"
            image="/dr.abdul.jpg"
            experienceBadge="10+ Years of Restorative Experience"
            bullets={[
              'Specialist in Microscopic Tooth Restoration',
              'Expert in Aesthetic Composite Smile Artistry',
              'Thousands of Seamless Cavity Treatments',
              'Precision Enamel Preservation Protocols',
            ]}
            eyebrow="Meet Your Restorative Specialist"
          />
          <CostHighlightCard
            title="Dental Fillings Pricing"
            price="₹1,200*"
            disclaimer="*Cost varies based on number of tooth surfaces involved and material chosen."
            bullets={[
              'Digital RVG X-ray evaluation included',
              'Premium shade-matched nano-composite resin',
              'Bite adjustment and polish included',
              'Warranty on composite restorations',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Modern Composite Resin vs Old Silver Amalgam"
            headers={['Feature', 'Composite Fillings', 'Silver Amalgam']}
            rows={[
              { feature: 'Natural Tooth Appearance', main: 'Yes (Invisible Blend)', alt: 'No (Dark Metallic)' },
              { feature: '100% Mercury-Free', main: 'Yes (Biocompatible)', alt: 'No (Contains Mercury)' },
              { feature: 'Tooth Enamel Preserved', main: 'High (Bonds directly)', alt: 'Low (Excess drilling required)' },
              { feature: 'Thermal Sensitivity', main: 'Minimal (Insulating)', alt: 'High (Metal conducts heat/cold)' },
              { feature: 'Single-Visit Completion', main: 'Yes (Ready immediately)', alt: 'Yes' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Tooth Fillings?"
        items={[
          { icon: <Sparkles className="w-6 h-6" />, title: 'Invisible', desc: 'Shade Match' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Mercury-Free', desc: 'Safety' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Painless', desc: 'Care' },
          { icon: <Award className="w-6 h-6" />, title: 'Long-Lasting', desc: 'Durability' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Same-Day', desc: 'Relief' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Siddharth M.', text: 'Had a cavity between my front teeth filled here. You literally cannot tell which tooth had the filling. Amazing shade matching!' },
          { name: 'Kavitha P.', text: 'Painless procedure done in 30 minutes. The doctor explained everything clearly and the clinic is super clean.' },
        ]}
        ctaTitle="Stop Tooth Decay Before It Gets Worse"
        ctaDesc="Small cavities are simple and inexpensive to treat today. Don't wait for tooth pain or root canal infection."
        ctaChecks={['Painless', 'Mercury-Free', 'Single-Visit', 'Affordable']}
        bookLabel="Book Filling Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Cavity Treatment" treatment="Tooth Decay & Dental Fillings" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Don't Ignore Cavity Sensitivity — Treat It Early!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
