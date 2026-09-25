import Link from 'next/link';
import { Users, Star, ShieldCheck, Sparkles, CheckCircle2, Clock3, Award, Activity, Search, Droplet, Wind } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, FaqReviewsCta, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function BadBreathPage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  const data = treatmentsData['bad-breath-halitosis'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Scientific Halitosis Treatment', 'Deep Oral Biofilm Decontamination', 'Permanent Fresh Breath', 'Painless & Non-Invasive']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Scientific Treatment for"
        headlineMain="Bad Breath & Halitosis"
        subtitle="Regain Fresh Breath & Social Confidence"
        desc="Permanent clinical relief from chronic bad breath (Halitosis). We diagnose the root bacterial, periodontal, and tongue biofilm causes for lasting freshness."
        bullets={[
          'Scientific Root-Cause Diagnosis',
          'Deep Ultrasonic Tongue & Gum Debridement',
          'Eradicates Volatile Sulfur Bacteria',
          'Treats Underlying Periodontal Pockets',
          'Personalized Fresh Breath Home Regimen',
          'Zero Discomfort, Immediate Results',
        ]}
        image={mediaMap?.hero_bad_breath || '/images/new images/Treatments Theme Images/Bad Breath & Halitosis.png'}
        imageAlt="Consultation for fresh breath and oral health"
        bookLabel="Book Fresh Breath Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="98% Success Rate"
      />

      <StatsBar items={[
        { icon: <Wind className="w-6 h-6" />, label: '98%', sub: 'Resolution Rate' },
        { icon: <Users className="w-6 h-6" />, label: '10,000+', sub: 'Patients Treated' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '100%', sub: 'Pain-Free Therapy' },
        { icon: <Award className="w-6 h-6" />, label: '15+ Years', sub: 'Clinical Experience' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'Patient Reviews' },
      ]} />

      <ServiceIconGrid
        title="Comprehensive Halitosis Care Protocol"
        cols={4}
        items={[
          { icon: <Search className="w-7 h-7" />, title: 'Volatile Sulfur Gas Analysis', desc: 'Identifies specific sulfur-producing bacterial colonies residing in deep oral crevices.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Subgingival Scaling & Irrigation', desc: 'Flushes hidden anaerobic bacteria from periodontal pockets beneath the gumline.' },
          { icon: <Activity className="w-7 h-7" />, title: 'Ultrasonic Tongue Debridement', desc: 'Breaks down dense bacterial biofilm in dorsal tongue papillae where 80% of odor originates.' },
          { icon: <Droplet className="w-7 h-7" />, title: 'Salivary Stimulation Therapy', desc: 'Treats underlying dry mouth (xerostomia) to naturally maintain an antibacterial oral pH.' },
        ]}
      />

      <HowItWorksFlow
        title="Your Clinical Journey to Fresh Breath"
        steps={[
          { icon: <Search className="w-6 h-6" />, title: 'Odor Assessment', desc: 'Evaluate gum, tooth & tongue source' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Deep Cleaning', desc: 'Ultrasonic calculus removal' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Tongue Therapy', desc: 'Specialized biofilm disinfection' },
          { icon: <Activity className="w-6 h-6" />, title: 'Pocket Irrigation', desc: 'Antimicrobial medication flush' },
          { icon: <Award className="w-6 h-6" />, title: 'Saliva Optimization', desc: 'Xerostomia & dry mouth balance' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Custom Care Kit', desc: 'Targeted rinses for long-term freshness' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Sneha"
            title="BDS, PGD Clinical Cosmetology & Restorative Dentistry"
            image="/dr.sneha.jpg"
            experienceBadge="8+ Years of Preventive & Cosmetic Dentistry"
            bullets={[
              'Specialist in Halitosis & Oral Biofilm Elimination',
              'Advanced Training in Periodontal Preventive Care',
              'Holistic Diagnosis of Dental & Systemic Odor Triggers',
              'Dedicated to Restoring Patient Social Confidence',
            ]}
            eyebrow="Meet Your Halitosis Specialist"
          />
          <CostHighlightCard
            title="Fresh Breath Therapy Package"
            price="₹1,500*"
            disclaimer="*Includes comprehensive clinical evaluation, deep scaling, and tongue disinfection."
            bullets={[
              'Periodontal pocket & tongue coating assessment',
              'Full mouth ultrasonic scaling & prophylaxis',
              'Antimicrobial subgingival irrigation',
              'Personalized oral hygiene & rinse recommendations',
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Clinical Halitosis Therapy vs Mints & Chewing Gum"
            headers={['Factor', 'Dental World Clinical Therapy', 'Mints & Mouthwashes']}
            rows={[
              { feature: 'Treats Root Bacterial Cause', main: 'Yes (Destroys Anaerobic Colonies)', alt: 'No (Only masks odor briefly)' },
              { feature: 'Duration of Fresh Breath', main: 'Permanent with simple maintenance', alt: '20 to 45 minutes max' },
              { feature: 'Resolves Gum & Tongue Disease', main: 'Yes (Stops gingivitis & biofilm)', alt: 'No (Often worsens dry mouth)' },
              { feature: 'Alcohol & Sugar-Free', main: 'Yes (pH-balanced protocol)', alt: 'No (Alcohol dries mouth)' },
              { feature: 'Restores Social Confidence', main: 'Yes (100% Reliable)', alt: 'No (Constant anxiety returns)' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Halitosis Care?"
        items={[
          { icon: <Search className="w-6 h-6" />, title: 'Scientific', desc: 'Diagnosis' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Biofilm', desc: 'Decontamination' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: '100% Safe', desc: '& Painless' },
          { icon: <Award className="w-6 h-6" />, title: 'Durable', desc: 'Freshness' },
          { icon: <Users className="w-6 h-6" />, title: 'Discreet &', desc: 'Compassionate' },
        ]}
      />

      <FaqReviewsCta
        faqs={data.faqs.map(f => ({ question: f.question, answer: f.answer }))}
        reviews={[
          { name: 'Arjun V.', text: 'I struggled with bad breath for years despite brushing thrice daily. Dental World cleaned the deep pockets behind my molars and tongue. It made an immediate 100% difference!' },
          { name: 'Megha T.', text: 'Very respectful and clinical approach. The treatment took just 40 minutes and was completely painless. Highly recommend Dr. Sneha!' },
        ]}
        ctaTitle="Reclaim Your Confident, Fresh Smile"
        ctaDesc="Don't let bad breath hold you back in meetings, conversations, or relationships. Get a clinical diagnosis today."
        ctaChecks={['Discreet', 'Painless', 'Scientific', 'Affordable']}
        bookLabel="Book Fresh Breath Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Halitosis Consultation" treatment="Bad Breath & Halitosis" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Don't Let Bad Breath Hold You Back — Book Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
