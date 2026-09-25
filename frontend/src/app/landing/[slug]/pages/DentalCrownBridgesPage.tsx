import Link from 'next/link';
import { Users, Star, ShieldCheck, Sparkles, CheckCircle2, Clock3, Award, Activity, Layers, ScanLine } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, FaqReviewsCta, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function DentalCrownBridgesPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['dental-crown-bridges'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Premium CAD/CAM Zirconia & E-Max', 'Digital 3D Optical Impressions', 'Up to 15-Year Warranty', 'Seamless Natural Shade Match']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Precision Dental Crowns &"
        headlineMain="Fixed Bridges"
        subtitle="Restore Strength, Function & Natural Aesthetics"
        desc="Protect fractured teeth and replace missing teeth with high-strength Zirconia and E-Max ceramic crowns and bridges crafted with German CAD/CAM technology."
        bullets={[
          'Monolithic Zirconia & E-Max Ceramic',
          'Precision CAD/CAM 3D Milling',
          'Zero Metal Line at the Gumline',
          'Restores 100% Chewing Strength',
          'Long-Term Clinic Warranty Included',
          'Painless Preparation & Perfect Fit',
        ]}
        image={mediaMap?.hero_crowns || '/images/treatments/dental-crown-bridge.png'}
        imageAlt="High precision aesthetic dental crowns and bridge"
        bookLabel="Book Crown Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="15-Year Warranty"
      />

      <StatsBar items={[
        { icon: <Award className="w-6 h-6" />, label: '15+ Years', sub: 'Clinical Experience' },
        { icon: <Users className="w-6 h-6" />, label: '20,000+', sub: 'Crowns Placed' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '10-15 Yrs', sub: 'Warranty Options' },
        { icon: <Clock3 className="w-6 h-6" />, label: 'Fast Turnaround', sub: 'Digital Lab Link' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Patient Reviews' },
      ]} />

      <ServiceIconGrid
        title="World-Class Prosthetic Solutions"
        cols={4}
        items={[
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Monolithic Zirconia Crowns', desc: 'Indestructible, chip-resistant ceramic capable of withstanding heavy posterior bite forces.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'IPS E-Max Glass Ceramic', desc: 'Superior natural translucency engineered specifically for lifelike front smile restorations.' },
          { icon: <Layers className="w-7 h-7" />, title: 'Fixed Dental Bridges', desc: 'Seamlessly spans the gap left by 1 to 3 missing teeth anchored to sturdy adjacent teeth.' },
          { icon: <ScanLine className="w-7 h-7" />, title: '3D CAD/CAM Digital Milling', desc: 'Sub-millimeter margin accuracy eliminating food trap gaps and secondary decay risks.' },
        ]}
      />

      <HowItWorksFlow
        title="Your Step-by-Step Crown & Bridge Process"
        steps={[
          { icon: <ScanLine className="w-6 h-6" />, title: 'Digital Evaluation', desc: '3D scan & bite assessment' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Tooth Preparation', desc: 'Painless conservative shaping' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Optical Scan', desc: 'No gooey impression trays' },
          { icon: <Layers className="w-6 h-6" />, title: 'Temporary Crown', desc: 'Protects tooth while lab mills' },
          { icon: <Award className="w-6 h-6" />, title: 'CAD/CAM Milling', desc: 'Precision robotic fabrication' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Permanent Bond', desc: 'Hermetic resin cementation' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Abdul Wahed"
            title="MDS – Endodontics & Conservative Dentistry"
            image="/dr.abdul.jpg"
            experienceBadge="10+ Years of Specialist Restorations"
            bullets={[
              'Master of Precision Tooth Preparation & Digital Occlusion',
              'Specialist in Full-Mouth Crown Restorations',
              'Expert in Monolithic Zirconia & Aesthetic E-Max Veneers',
              'Thousands of Successful Prosthetic Restorations',
            ]}
            eyebrow="Meet Your Prosthodontic Specialist"
          />
          <CostHighlightCard
            title="Dental Crowns Pricing in Hyderabad"
            price="₹3,500*"
            disclaimer="*Cost depends on material: PFM (₹3,500), Monolithic Zirconia (₹6,000+), E-Max (₹8,500+)."
            bullets={[
              'Includes digital intraoral optical scans',
              'Custom lab shade-matching consultation',
              'Temporary crown placement during fabrication',
              'Official written warranty certificate included',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Crown Material Comparison Guide"
            headers={['Specification', 'Zirconia Crown', 'E-Max Ceramic', 'Traditional PFM']}
            rows={[
              { feature: 'Bite Strength (MPa)', main: 'Ultra High (1200+ MPa)', alt: 'High (450 MPa)', opt2: 'Moderate (800 MPa)' },
              { feature: 'Aesthetic Translucency', main: 'High (Multi-layered)', alt: 'Superior (Most Natural)', opt2: 'Opaque / Dark Core' },
              { feature: 'Metal-Free / Biocompatible', main: 'Yes (100% Metal-Free)', alt: 'Yes (100% Metal-Free)', opt2: 'No (Metal Core Inside)' },
              { feature: 'Dark Gumline Margin Risk', main: 'Zero', alt: 'Zero', opt2: 'High (Metal shows over time)' },
              { feature: 'Ideal Indication', main: 'Molars & Bruxism (Heavy Grinders)', alt: 'Front Smile Aesthetic Zone', opt2: 'Budget Posterior Teeth' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Crowns & Bridges?"
        items={[
          { icon: <ScanLine className="w-6 h-6" />, title: 'CAD/CAM', desc: 'Precision' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Lifelike', desc: 'Aesthetics' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Up to 15 Yrs', desc: 'Warranty' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Painless', desc: 'Fit' },
          { icon: <Award className="w-6 h-6" />, title: 'Certified', desc: 'Materials' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Srinivas R.', text: 'Had two Zirconia crowns placed after my root canals. The bite feels completely natural and you can\'t tell them apart from my natural molars!' },
          { name: 'Ananya B.', text: 'Replaced an old bridge that had a black line with a 3-unit Zirconia bridge. My smile looks radiant and natural again. Excellent work!' },
        ]}
        ctaTitle="Restore Strength & Beauty to Your Teeth"
        ctaDesc="Protect fragile root-canaled teeth or replace missing teeth with certified CAD/CAM crowns and bridges."
        ctaChecks={['Metal-Free', '15-Yr Warranty', '3D Scans', 'Painless']}
        bookLabel="Book Crown Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Crown & Bridge Consultation" treatment="Dental Crown & Bridges" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Protect Weakened Teeth with Precision CAD/CAM Crowns!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
