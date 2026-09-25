import Image from 'next/image';
import Link from 'next/link';
import { Users, Star, ShieldCheck, Sparkles, CheckCircle2, Clock3, Award, Activity, ScanLine, ArrowRight } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, FaqReviewsCta, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function JawSurgeryPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['jaw-surgery'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Senior MDS Maxillofacial Surgeons', '3D Virtual Surgical Planning', 'Zero Facial Scars (100% Intraoral)', 'Comprehensive Ortho-Surgical Care']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Corrective Orthognathic"
        headlineMain="Jaw Surgery"
        subtitle="Restore Skeletal Harmony, Perfect Bite & Facial Symmetry"
        desc="Permanent surgical correction for severe underbites, overbites, facial asymmetry, and sleep apnea from Hyderabad's premier oral and maxillofacial surgical team."
        bullets={[
          'Corrects Severe Skeletal Malocclusion',
          'Harmonizes Facial Profile & Jaw Symmetry',
          'Relieves Chronic TMJ Joint Pain & Strain',
          'Improves Airway & Solves Sleep Apnea',
          '3D Computerized Virtual Surgical Simulation',
          '100% Internal Incisions — Zero Visible Scars',
        ]}
        image={mediaMap?.hero_jaw_surgery || '/images/new images/Treatments Theme Images/Jaw Surgery.png'}
        imageAlt="Corrective orthognathic jaw surgery consultation"
        bookLabel="Book Surgical Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="19+ Years Surgical Experience"
      />

      <StatsBar items={[
        { icon: <Award className="w-6 h-6" />, label: '19+ Years', sub: 'Maxillofacial Surgery' },
        { icon: <Users className="w-6 h-6" />, label: '5,000+', sub: 'Surgeries Performed' },
        { icon: <ScanLine className="w-6 h-6" />, label: '3D Guided', sub: 'Virtual Planning' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '0 Scars', sub: '100% Intraoral' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Surgical Outcomes' },
      ]} />

      {/* Orthognathic Surgery Infographic Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clinical Insight</span>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mt-1">Understanding Corrective Orthognathic Surgery</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-2">
              When teeth cannot be corrected by braces alone due to underlying skeletal jaw discrepancies, surgical realignment achieves permanent functional and aesthetic balance.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-2 md:p-4">
            <Image
              src="/images/aug2026/jaw_surgery_orthognathic_infographic.png"
              alt="Orthognathic Jaw Surgery Surgical Infographic"
              width={1000}
              height={550}
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <ServiceIconGrid
        title="Specialized Orthognathic Procedures"
        cols={3}
        items={[
          { icon: <Activity className="w-7 h-7" />, title: 'Maxillary Osteotomy (Upper Jaw)', desc: 'Repositions the upper jaw to correct severe open bites, crossbites, and excess gummy smile display.' },
          { icon: <ScanLine className="w-7 h-7" />, title: 'Mandibular Osteotomy (Lower Jaw)', desc: 'Advances or sets back the lower jaw to eliminate prominent underbites or receding lower jaws.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Bimaxillary Surgery (Double Jaw)', desc: 'Synchronized surgical realignment of both upper and lower jaws for optimal facial profile balance.' },
        ]}
      />

      <HowItWorksFlow
        title="Your Integrated Ortho-Surgical Journey"
        steps={[
          { icon: <ScanLine className="w-6 h-6" />, title: '3D Virtual CT', desc: 'Computerized bite simulation' },
          { icon: <Activity className="w-6 h-6" />, title: 'Pre-Surgical Braces', desc: 'Aligns dental arches' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Hospital Surgery', desc: 'Under general anesthesia' },
          { icon: <Award className="w-6 h-6" />, title: 'Rigid Fixation', desc: 'Titanium bio-compatible plates' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Guided Recovery', desc: 'Nutrition & physical healing' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Final Smile Polish', desc: 'Precision occlusal finish' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Yousuf Qureshi"
            title="MDS – Oral & Maxillofacial Surgery"
            experienceBadge="19+ Years of Surgical Excellence"
            bullets={[
              'Specialist in Corrective Jaw & Skeletal Trauma Surgery',
              'Advanced Fellowship in 3D Virtual Surgical Planning',
              'Collaborative Ortho-Surgical Protocols with Orthodontists',
              'Over 5,000+ Complex Surgical Cases Performed',
            ]}
            eyebrow="Meet Your Maxillofacial Surgeon"
          />
          <CostHighlightCard
            title="Jaw Surgery Consultation & Planning"
            price="Customized*"
            disclaimer="*Cost is tailored based on single jaw vs double jaw correction, 3D splint fabrication, and hospital stay."
            bullets={[
              'Comprehensive 3D CT facial profile analysis',
              'Virtual surgical computer simulation preview',
              'Joint coordination with senior orthodontist',
              'Zero hidden hospital or anesthesia charges',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Orthognathic Jaw Surgery vs Orthodontic Braces Alone"
            headers={['Treatment Outcome', 'Jaw Surgery + Orthodontics', 'Braces Alone (Camouflage)']}
            rows={[
              { feature: 'Corrects Skeletal Bone Discrepancy', main: 'Yes (Permanent skeletal alignment)', alt: 'No (Only tilts teeth)' },
              { feature: 'Improves Full Facial Profile', main: 'Yes (Balances chin, lips, and nose)', alt: 'Minimal profile improvement' },
              { feature: 'Cures TMJ Pain & Jaw Strain', main: 'Yes (Realigns joint biomechanics)', alt: 'May leave underlying joint stress' },
              { feature: 'Opens Constricted Airway', main: 'Yes (Dramatic airway expansion)', alt: 'No effect on airway volume' },
              { feature: 'Facial Scars', main: 'Zero (100% Inside mouth)', alt: 'None' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Jaw Surgery?"
        items={[
          { icon: <Award className="w-6 h-6" />, title: '19+ Years', desc: 'Expertise' },
          { icon: <ScanLine className="w-6 h-6" />, title: '3D Virtual', desc: 'Simulation' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Zero Scars', desc: 'Safety' },
          { icon: <Activity className="w-6 h-6" />, title: 'Full Hospital', desc: 'Support' },
          { icon: <Users className="w-6 h-6" />, title: 'Ortho-Surgical', desc: 'Coordination' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Karthik N.', text: 'I had an extreme underbite that braces couldn\'t fix. Dr. Yousuf Qureshi performed double jaw surgery with 3D planning. My facial profile changed completely and chewing is now effortless.' },
          { name: 'Deepika M.', text: 'The recovery was very smooth because of the thorough guidance from the Dental World team. No scars at all and my jaw pain is 100% gone!' },
        ]}
        ctaTitle="Achieve Facial Harmony & Perfect Bite Alignment"
        ctaDesc="Schedule an advanced 3D orthognathic consultation with our senior maxillofacial surgical team."
        ctaChecks={['3D Guided', 'Zero Scars', '19+ Yrs Exp', 'Hospital Grade']}
        bookLabel="Book Surgical Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Jaw Surgery Consultation" treatment="Jaw Surgery" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Transform Your Bite & Facial Symmetry — Book Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
