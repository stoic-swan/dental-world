import { Metadata } from 'next';
import type { ReactElement } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { LOCATIONS, SITE } from '@/lib/site';
import { treatmentsData } from '@/data/treatments';
import type { LocationData } from './shared';
import { getSiteMediaMap } from '@/lib/media-service';

import GumDiseasePage from './pages/GumDiseasePage';
import BracesPage from './pages/BracesPage';
import DenturesPage from './pages/DenturesPage';
import PediatricPage from './pages/PediatricPage';
import SmileDesigningPage from './pages/SmileDesigningPage';
import TeethWhiteningPage from './pages/TeethWhiteningPage';
import WisdomToothPage from './pages/WisdomToothPage';
import InvisalignPage from './pages/InvisalignPage';
import ImplantsPage from './pages/ImplantsPage';
import RootCanalPage from './pages/RootCanalPage';
import ToothDecayPage from './pages/ToothDecayPage';
import BadBreathPage from './pages/BadBreathPage';
import DentalCrownBridgesPage from './pages/DentalCrownBridgesPage';
import FrenectomyPage from './pages/FrenectomyPage';
import JawSurgeryPage from './pages/JawSurgeryPage';
import GenioplastyPage from './pages/GenioplastyPage';
import MouthUlcersPage from './pages/MouthUlcersPage';
import PreventiveDentistryPage from './pages/PreventiveDentistryPage';

interface PageEntry {
  dataKey: keyof typeof treatmentsData;
  title: string;
  description: string;
  Component: (props: { branch: LocationData; locations: LocationData[]; whatsappUrl: string; mediaMap?: Record<string, string> }) => ReactElement;
}

const PAGES: Record<string, PageEntry> = {
  'gum-disease': {
    dataKey: 'advanced-gum-treatment',
    title: 'Best Periodontal Specialist in Hyderabad for Gum Disease',
    description: 'Expert gum disease treatment, laser periodontal care, and personalized solutions to protect your oral health in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: GumDiseasePage,
  },
  'bleeding-gums': {
    dataKey: 'advanced-gum-treatment',
    title: 'Best Periodontal Specialist in Hyderabad for Gum Disease',
    description: 'Expert gum disease treatment, laser periodontal care, and personalized solutions to protect your oral health in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: GumDiseasePage,
  },
  'braces': {
    dataKey: 'braces',
    title: 'Best Dental Braces in Hyderabad | Dental World',
    description: 'Advanced braces & clear aligners for all ages. Metal, ceramic, invisible braces and Invisalign in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: BracesPage,
  },
  'braces-and-aligners': {
    dataKey: 'braces',
    title: 'Best Dental Braces in Hyderabad | Dental World',
    description: 'Advanced braces & clear aligners for all ages. Metal, ceramic, invisible braces and Invisalign in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: BracesPage,
  },
  'dentures': {
    dataKey: 'hybrid-dentures',
    title: 'Premium Dentures for a Confident Smile | Dental World',
    description: 'Custom-made complete, partial, and implant-supported dentures designed for perfect comfort and a natural look in Hyderabad.',
    Component: DenturesPage,
  },
  'pediatric-dentistry': {
    dataKey: 'pediatric-dentistry',
    title: 'Best Pediatric Dentist in Bachupally & Pragathi Nagar | Dental World',
    description: "Expert, gentle, fear-free dental care for children of all ages at Dental World's child-friendly clinics in Hyderabad.",
    Component: PediatricPage,
  },
  'smile-designing': {
    dataKey: 'smile-designing',
    title: 'Design Your Dream Smile | Smile Designing in Hyderabad',
    description: 'Advanced digital smile designing for natural, aesthetic & confident smiles in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: SmileDesigningPage,
  },
  'teeth-whitening': {
    dataKey: 'teeth-whitening',
    title: 'Best Teeth Whitening Treatment in Hyderabad | Dental World',
    description: 'Advanced laser teeth whitening for instant, visible results in Bachupally, Pragathi Nagar & Nizampet, Hyderabad.',
    Component: TeethWhiteningPage,
  },
  'wisdom-tooth-extraction': {
    dataKey: 'wisdom-tooth-extraction',
    title: 'Best Oral & Maxillofacial Surgeon for Wisdom Tooth Treatment',
    description: 'Safe, painless, precise wisdom tooth extraction and oral surgery in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: WisdomToothPage,
  },
  'invisalign-treatment': {
    dataKey: 'invisalign-treatment',
    title: 'Invisalign Treatment in Hyderabad | Dental World',
    description: 'Straighten your teeth without braces. Platinum Certified Invisalign Provider in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: InvisalignPage,
  },
  'invisalign-pragathi-nagar': {
    dataKey: 'invisalign-treatment',
    title: 'Invisalign Treatment in Pragathi Nagar | Dental World',
    description: 'Straighten your teeth without braces. Platinum Certified Invisalign Provider in Pragathi Nagar, Hyderabad.',
    Component: InvisalignPage,
  },
  'dental-implants': {
    dataKey: 'dental-implants',
    title: 'Best Dental Implant Clinic in Hyderabad | Dental World',
    description: 'Painless, long-lasting dental implants from expert implantologists with 15+ years of experience in Bachupally, Hyderabad.',
    Component: ImplantsPage,
  },
  'dental-implant-cost-hyderabad': {
    dataKey: 'dental-implants',
    title: 'Dental Implant Cost in Hyderabad | Dental World',
    description: 'Affordable dental implant cost with 0% EMI options. Expert implantologists in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: ImplantsPage,
  },
  'root-canal-treatment': {
    dataKey: 'root-canal-treatment',
    title: 'Pain-Free Root Canal Treatment in Hyderabad | Dental World',
    description: 'Painless, precise, permanent root canal therapy from expert MDS Endodontists in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: RootCanalPage,
  },
  'tooth-decay-fillings': {
    dataKey: 'tooth-decay-fillings',
    title: 'Painless Tooth Decay & Dental Fillings in Hyderabad | Dental World',
    description: 'Restore decayed teeth with invisible tooth-colored composite fillings. 100% mercury-free, painless single-visit care in Bachupally & Pragathi Nagar.',
    Component: ToothDecayPage,
  },
  'tooth-decay-and-dental-fillings': {
    dataKey: 'tooth-decay-fillings',
    title: 'Painless Tooth Decay & Dental Fillings in Hyderabad | Dental World',
    description: 'Restore decayed teeth with invisible tooth-colored composite fillings. 100% mercury-free, painless single-visit care in Bachupally & Pragathi Nagar.',
    Component: ToothDecayPage,
  },
  'bad-breath-halitosis': {
    dataKey: 'bad-breath-halitosis',
    title: 'Bad Breath & Halitosis Treatment in Hyderabad | Dental World',
    description: 'Permanent cure for bad breath (halitosis). Deep tongue and gum biofilm cleaning by expert specialists in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: BadBreathPage,
  },
  'bad-breath': {
    dataKey: 'bad-breath-halitosis',
    title: 'Bad Breath & Halitosis Treatment in Hyderabad | Dental World',
    description: 'Permanent cure for bad breath (halitosis). Deep tongue and gum biofilm cleaning by expert specialists in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: BadBreathPage,
  },
  'dental-crown-bridges': {
    dataKey: 'dental-crown-bridges',
    title: 'CAD/CAM Dental Crowns & Fixed Bridges in Hyderabad | Dental World',
    description: 'Precision monolithic Zirconia and E-Max ceramic crowns and bridges with up to 15-year warranty in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: DentalCrownBridgesPage,
  },
  'crown-and-bridges': {
    dataKey: 'dental-crown-bridges',
    title: 'CAD/CAM Dental Crowns & Fixed Bridges in Hyderabad | Dental World',
    description: 'Precision monolithic Zirconia and E-Max ceramic crowns and bridges with up to 15-year warranty in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: DentalCrownBridgesPage,
  },
  'frenectomy': {
    dataKey: 'frenectomy',
    title: 'Painless Laser Frenectomy in Hyderabad | Dental World',
    description: 'Safe, stitch-free laser tongue-tie and lip-tie release for infants, children, and adults in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: FrenectomyPage,
  },
  'tongue-tie-frenectomy': {
    dataKey: 'frenectomy',
    title: 'Painless Laser Frenectomy in Hyderabad | Dental World',
    description: 'Safe, stitch-free laser tongue-tie and lip-tie release for infants, children, and adults in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: FrenectomyPage,
  },
  'jaw-surgery': {
    dataKey: 'jaw-surgery',
    title: 'Corrective Orthognathic Jaw Surgery in Hyderabad | Dental World',
    description: 'Expert orthognathic surgery for underbite, overbite, TMJ pain, and facial asymmetry. 3D virtual surgical planning with zero facial scars.',
    Component: JawSurgeryPage,
  },
  'orthognathic-surgery': {
    dataKey: 'jaw-surgery',
    title: 'Corrective Orthognathic Jaw Surgery in Hyderabad | Dental World',
    description: 'Expert orthognathic surgery for underbite, overbite, TMJ pain, and facial asymmetry. 3D virtual surgical planning with zero facial scars.',
    Component: JawSurgeryPage,
  },
  'genioplasty': {
    dataKey: 'genioplasty',
    title: 'Surgical Genioplasty (Chin Reshaping) in Hyderabad | Dental World',
    description: 'Permanent chin advancement, reduction, and symmetry correction with zero external scars by senior maxillofacial surgeons in Hyderabad.',
    Component: GenioplastyPage,
  },
  'chin-surgery': {
    dataKey: 'genioplasty',
    title: 'Surgical Genioplasty (Chin Reshaping) in Hyderabad | Dental World',
    description: 'Permanent chin advancement, reduction, and symmetry correction with zero external scars by senior maxillofacial surgeons in Hyderabad.',
    Component: GenioplastyPage,
  },
  'mouth-ulcers': {
    dataKey: 'mouth-ulcers',
    title: 'Laser Mouth Ulcer Relief & Oral Lesion Biopsy in Hyderabad | Dental World',
    description: 'Instant canker sore pain relief in 60 seconds with diode lasers and expert diagnostic biopsy for non-healing oral lesions in Hyderabad.',
    Component: MouthUlcersPage,
  },
  'preventive-dentistry': {
    dataKey: 'preventive-dentistry',
    title: 'Preventive Dentistry & Cavity Protection in Hyderabad | Dental World',
    description: 'Protect your teeth with pit & fissure sealants, fluoride varnish, and routine checkups in Bachupally & Pragathi Nagar, Hyderabad.',
    Component: PreventiveDentistryPage,
  },
};

export async function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = PAGES[slug] || PAGES['gum-disease'];

  return {
    title: entry.title,
    description: entry.description.substring(0, 160),
    alternates: {
      canonical: `https://www.dentalworldhyd.in/landing/${slug}`,
    },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = PAGES[slug] || PAGES['gum-disease'];
  const data = treatmentsData[entry.dataKey];
  const mediaMap = await getSiteMediaMap();

  const branch: LocationData = (LOCATIONS.find((l) => slug.includes(l.slug)) || LOCATIONS[0]) as LocationData;
  const locations = LOCATIONS as unknown as LocationData[];

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: data.title,
    description: entry.description,
    bodyLocation: 'Mouth',
  };

  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : undefined;

  const Component = entry.Component;

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 antialiased font-sans">
      <Script
        id={`landing-procedure-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      {faqSchema && (
        <Script
          id={`landing-faq-schema-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />
      <Component branch={branch} locations={locations} whatsappUrl={SITE.whatsapp.url} mediaMap={mediaMap} />
      <Footer />
    </div>
  );
}
