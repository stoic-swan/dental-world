import Link from 'next/link';
import { Users, Star, ShieldCheck, Sparkles, CheckCircle2, Clock3, Award, Activity, ShieldAlert, HeartHandshake } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, FaqReviewsCta, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function PreventiveDentistryPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['preventive-dentistry'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Comprehensive Preventive Dental Care', 'Pit & Fissure Cavity Sealants', 'Medical Enamel Fluoride Varnish', 'Affordable Family Checkup Packages']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Proactive & Painless"
        headlineMain="Preventive Dentistry"
        subtitle="Protect Your Natural Smile Before Problems Start"
        desc="Safeguard your teeth and gums from decay, enamel erosion, and expensive future dental work with proven preventive sealants, remineralizing fluoride, and ultrasonic hygiene."
        bullets={[
          'Pit & Fissure Dental Sealants (Blocks 80% of Cavities)',
          'High-Concentration Enamel Fluoride Varnish',
          'Gentle Ultrasonic Scaling & Prophylaxis',
          'Early Caries & Oral Cancer Screenings',
          'Custom Night Guards for Teeth Grinding (Bruxism)',
          'Saves Thousands in Avoidable Future Treatments',
        ]}
        image={mediaMap?.hero_preventive || '/images/new images/Treatments Theme Images/Preventive Dentistry.png'}
        imageAlt="Preventive dentistry checkup and dental sealants"
        bookLabel="Book Preventive Checkup"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="Prevention First"
      />

      <StatsBar items={[
        { icon: <ShieldCheck className="w-6 h-6" />, label: '80% Cavity', sub: 'Reduction Rate' },
        { icon: <Users className="w-6 h-6" />, label: '20,000+', sub: 'Smiles Protected' },
        { icon: <Clock3 className="w-6 h-6" />, label: 'Every 6 Months', sub: 'Optimal Health' },
        { icon: <Award className="w-6 h-6" />, label: '15+ Years', sub: 'Preventive Care' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Family Satisfaction' },
      ]} />

      <ServiceIconGrid
        title="Proactive Preventive Services"
        cols={4}
        items={[
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Pit & Fissure Sealants', desc: 'Bonds an ultra-thin protective shield over the deep grooves of chewing teeth, completely blocking cavity-causing food debris.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Medical Fluoride Varnish', desc: 'Penetrates weak enamel to remineralize microscopic acid demineralization spots before full cavities form.' },
          { icon: <Activity className="w-7 h-7" />, title: 'Ultrasonic Biofilm Cleaning', desc: 'Gently removes hardened calculus (tartar) and bacterial plaque without scraping or thinning natural enamel.' },
          { icon: <HeartHandshake className="w-7 h-7" />, title: 'Custom Bruxism Night Guards', desc: 'Custom 3D molded guards to protect natural teeth and crowns from night clenching, enamel chipping, and TMJ strain.' },
        ]}
      />

      <HowItWorksFlow
        title="Your 6-Monthly Preventive Health Protocol"
        steps={[
          { icon: <Activity className="w-6 h-6" />, title: 'Digital RVG Scan', desc: 'Check hidden interdental spaces' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Periodontal Exam', desc: 'Measure gum health & bone' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Ultrasonic Cleanse', desc: 'Eradicate plaque & stains' },
          { icon: <Award className="w-6 h-6" />, title: 'Enamel Polish', desc: 'Smoothen tooth surfaces' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Fluoride / Sealant', desc: 'Apply protective shield' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Long-term Plan', desc: 'Personalized home guidance' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Sneha"
            title="BDS, PGD Clinical Cosmetology & Restorative Dentistry"
            image="/sneha.jpg"
            experienceBadge="8+ Years of Family Preventive Dentistry"
            bullets={[
              'Passionate advocate for conservative, tooth-preserving dentistry',
              'Specialist in pediatric & adult pit and fissure sealant application',
              'Expert in enamel remineralization and non-invasive cavity reversal',
              'Gentle, anxiety-free clinical appointments for adults and children',
            ]}
            eyebrow="Meet Your Preventive Dental Team"
          />
          <CostHighlightCard
            title="Comprehensive Preventive Package"
            price="₹999*"
            disclaimer="*Package includes full mouth checkup, digital X-rays, scaling & polish. Sealants and fluoride can be added at special bundled rates."
            bullets={[
              'Complete doctor consultation & digital RVG examination',
              'Full mouth ultrasonic scaling and stain removal',
              'Enamel surface polishing and hygiene briefing',
              'Special family and annual membership discounts',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Proactive Prevention vs Delayed Reactive Treatment"
            headers={['Criteria', 'Regular Preventive Checkups', 'Visiting Dentist Only When In Pain']}
            rows={[
              { feature: 'Average Treatment Cost', main: 'Very Low (Affordable routine maintenance)', alt: 'Very High (Root canals, crowns, implants)' },
              { feature: 'Tooth Enamel Preserved', main: '100% Intact Natural Tooth', alt: 'Extensive drilling & tooth loss risk' },
              { feature: 'Appointment Experience', main: '100% Pain-free and relaxing', alt: 'Urgent emergency pain and anxiety' },
              { feature: 'Time Spent in Dental Chair', main: '30 minutes twice a year', alt: 'Multiple long surgical visits' },
              { feature: 'Lifelong Smile Longevity', main: 'Guaranteed healthy natural teeth', alt: 'Repeated tooth failures' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Preventive Care?"
        items={[
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Cavity Shield', desc: 'Sealants & Varnish' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Zero Pain', desc: 'Gentle Care' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Modern RVG', desc: 'Digital Diagnostics' },
          { icon: <Award className="w-6 h-6" />, title: 'Affordable', desc: 'Family Packages' },
          { icon: <Users className="w-6 h-6" />, title: '85,000+', desc: 'Happy Smiles' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Rajesh G.', text: 'We bring our two kids to Dental World every 6 months for sealants and fluoride. The doctors are so gentle and neither of my kids has ever had a single cavity!' },
          { name: 'Sunita M.', text: 'The regular cleaning and checkup here is very thorough and comfortable. Truly painless preventive care that gives great peace of mind.' },
        ]}
        ctaTitle="Protect Your Natural Smile Today"
        ctaDesc="An ounce of prevention is worth a pound of cure. Book your family's preventive dental checkup today."
        ctaChecks={['Painless', 'Affordable', 'Family Friendly', 'Saves Money']}
        bookLabel="Book Preventive Checkup"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Preventive Dental Checkup" treatment="Preventive Dentistry" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Healthy Teeth for Life — Schedule Your Checkup Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
