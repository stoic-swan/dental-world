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

export default function GenioplastyPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['genioplasty'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Permanent Chin Profile Refinement', '100% Intraoral Incisions (Zero Scars)', 'Precision 3D Chin Osteotomy', 'Natural Facial Symmetry']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Surgical Chin Reshaping"
        headlineMain="Genioplasty"
        subtitle="Define Your Jawline & Restore Lifelong Facial Balance"
        desc="Permanent surgical chin advancement, reduction, or asymmetry correction performed from inside the mouth by senior maxillofacial surgeons with zero facial scarring."
        bullets={[
          'Permanent Skeletal Bone Modification',
          'Zero Facial Scars (100% Inside Lower Lip)',
          'Eliminates Weak or Receding Chin',
          'Sharpens Jawline & Enhances Neck Profile',
          'No Risk of Implant Shifting or Rejection',
          'Natural Look Harmonized with Nose & Lips',
        ]}
        image={mediaMap?.hero_genioplasty || '/images/new images/Treatments Theme Images/Genoplasty.png'}
        imageAlt="Surgical chin reshaping genioplasty"
        bookLabel="Book Chin Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="Permanent Result"
      />

      <StatsBar items={[
        { icon: <Award className="w-6 h-6" />, label: '19+ Years', sub: 'Surgical Experience' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '0 Scars', sub: 'Internal Incision' },
        { icon: <Sparkles className="w-6 h-6" />, label: '100% Permanent', sub: 'Own Bone Structure' },
        { icon: <ScanLine className="w-6 h-6" />, label: '3D Planned', sub: 'Facial Proportions' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Cosmetic Satisfaction' },
      ]} />

      {/* Before & After Showcase */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Aesthetic Results</span>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mt-1">Genioplasty Transformation &ndash; Before &amp; After</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-2">
              See the dramatic improvement in chin projection, jawline definition, and overall facial proportion achieved through sliding osteotomy.
            </p>
          </div>
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-2 md:p-4">
            <Image
              src="/images/before and after/Genioplasty before and after.jpeg"
              alt="Genioplasty Before and After Chin Reshaping"
              width={800}
              height={500}
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <ServiceIconGrid
        title="Custom Chin Correction Options"
        cols={3}
        items={[
          { icon: <Activity className="w-7 h-7" />, title: 'Chin Advancement (Sliding Genioplasty)', desc: 'Moves a weak or receding chin forward to establish a strong, commanding jawline and balance a prominent nose.' },
          { icon: <ScanLine className="w-7 h-7" />, title: 'Chin Reduction & Setback', desc: 'Gently shifts an excessively protruding or pointed chin backward to soften facial aesthetics and balance profile lines.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Chin Asymmetry & Vertical Correction', desc: 'Realigns off-center chin points with facial midline and lengthens or shortens lower facial third proportions.' },
        ]}
      />

      <HowItWorksFlow
        title="The Precision Genioplasty Procedure"
        steps={[
          { icon: <ScanLine className="w-6 h-6" />, title: '3D CT Analysis', desc: 'Assess bone & soft tissue' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Internal Incision', desc: '100% inside the lower lip' },
          { icon: <Activity className="w-6 h-6" />, title: 'Bone Osteotomy', desc: 'Precision horizontal slide' },
          { icon: <Award className="w-6 h-6" />, title: 'Rigid Fixation', desc: 'Secured with titanium miniplates' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Dissolvable Sutures', desc: 'Fast internal mucosal heal' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Yousuf Qureshi"
            title="MDS – Oral & Maxillofacial Surgery"
            experienceBadge="19+ Years of Aesthetic Facial Surgery"
            bullets={[
              'Pioneer in Minimally Invasive Sliding Osteotomy Genioplasty',
              'Expert in Natural Facial Aesthetics & Cephalometric Analysis',
              'Over 2,000+ Successful Chin & Facial Symmetry Procedures',
              'Commitment to Zero External Scars & Patient Comfort',
            ]}
            eyebrow="Meet Your Genioplasty Surgeon"
          />
          <CostHighlightCard
            title="Genioplasty Consultation"
            price="Customized*"
            disclaimer="*Cost is tailored based on degree of chin advancement/reduction, 3D surgical guides, and anesthesia requirements."
            bullets={[
              'Complete 3D facial aesthetic profile evaluation',
              'Computerized facial proportion simulation',
              'Hospital anesthesia and titanium plating included',
              'Zero external facial incisions or visible scars',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Sliding Genioplasty vs Artificial Chin Implants vs Dermal Fillers"
            headers={['Feature', 'Sliding Genioplasty (Bone)', 'Silicone Chin Implants', 'Temporary Chin Fillers']}
            rows={[
              { feature: 'Longevity of Result', main: 'Permanent for Life (Own Bone)', alt: 'Permanent (unless removed)', opt2: 'Temporary (6 to 12 months)' },
              { feature: 'Risk of Shifting or Rejection', main: 'Zero (Natural bone healing)', alt: 'High (Can rotate or erode bone)', opt2: 'Zero (Absorbed by body)' },
              { feature: 'External Facial Scars', main: 'Zero (100% Inside Mouth)', alt: 'May leave scar under chin', opt2: 'Zero' },
              { feature: 'Corrects Asymmetry & Height', main: 'Yes (Multi-directional movement)', alt: 'No (Only adds front bulk)', opt2: 'Limited' },
              { feature: 'Natural Neck & Jawline Contour', main: 'Superior (Tightens neck muscles)', alt: 'Moderate', opt2: 'Minimal effect on neck' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Chin Reshaping?"
        items={[
          { icon: <Award className="w-6 h-6" />, title: '19+ Years', desc: 'Surgeons' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Zero Scars', desc: 'Technique' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Permanent', desc: 'Results' },
          { icon: <ScanLine className="w-6 h-6" />, title: '3D Guided', desc: 'Precision' },
          { icon: <Users className="w-6 h-6" />, title: 'Natural', desc: 'Proportions' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Pranay S.', text: 'I had a weak chin that made my profile look receded. Dr. Yousuf explained sliding genioplasty and showed the 3D plan. The surgery had zero cuts outside my mouth and my jawline is now strong and sharp!' },
          { name: 'Ritu M.', text: 'Best cosmetic decision I ever made. The healing was very fast and no one can tell I had surgery because there are zero scars. Thank you Dental World!' },
        ]}
        ctaTitle="Sculpt a Confident, Perfectly Defined Jawline"
        ctaDesc="Book a confidential 3D facial profile consultation with our senior maxillofacial surgeon today."
        ctaChecks={['Permanent', 'Zero Scars', 'Own Bone', '19+ Yrs Exp']}
        bookLabel="Book Chin Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Genioplasty Consultation" treatment="Genioplasty" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Achieve Perfect Chin & Profile Balance — Book Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
