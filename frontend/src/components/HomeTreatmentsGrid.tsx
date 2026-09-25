"use client";

import Link from "next/link";
import Image from "next/image";

interface TreatmentItem {
  key: string;
  title: string;
  href: string;
  image: string;
}

const treatments: TreatmentItem[] = [
  {
    key: "grid_root_canal",
    title: "Root Canal Treatment",
    href: "/treatments/root-canal-treatment",
    image: "/images/treatments/root-canal-treatment.png",
  },
  {
    key: "grid_teeth_cleaning",
    title: "Teeth Cleaning/Scaling",
    href: "/treatments/teeth-cleaning-scaling",
    image: "/images/treatments/teeth-scaling-cleaning.png",
  },
  {
    key: "grid_implants",
    title: "Dental Implants / Full Mouth Implants",
    href: "/treatments/dental-implants",
    image: "/images/treatments/dental-implants.png",
  },
  {
    key: "grid_invisalign",
    title: "Clear Aligners / invisible aligners",
    href: "/treatments/invisalign-treatment",
    image: "/images/treatments/clear-aligners.png",
  },
  {
    key: "grid_pediatric",
    title: "Kids Dentistry/Pediatric Dentistry",
    href: "/treatments/pediatric-dentistry",
    image: "/images/treatments/kids-dentistry.png",
  },
  {
    key: "grid_wisdom_tooth",
    title: "Wisdom Tooth Extraction",
    href: "/treatments/wisdom-tooth-extraction",
    image: "/images/treatments/wisdom-tooth-extraction.png",
  },
  {
    key: "grid_periodontal",
    title: "Periodontal Diseases & Flap / Advanced Gum Treatment",
    href: "/treatments/advanced-gum-treatment",
    image: "/images/treatments/periodontal-diseases-flap-surgery.png",
  },
  {
    key: "grid_tooth_decay",
    title: "Tooth Decay and dental fillings",
    href: "/treatments/tooth-decay-fillings",
    image: "/images/treatments/tooth-decay-and-fillings.png",
  },
  {
    key: "grid_dentures",
    title: "Hybrid Denture/ Full mouth Dentures",
    href: "/treatments/hybrid-dentures",
    image: "/images/treatments/hybrid-full-mouth-denture.png",
  },
  {
    key: "grid_smile_designing",
    title: "Smile Designing",
    href: "/treatments/smile-designing",
    image: "/images/treatments/smile-designing.png",
  },
  {
    key: "grid_braces",
    title: "Dental Braces",
    href: "/treatments/braces",
    image: "/images/treatments/dental-braces.png",
  },
  {
    key: "grid_teeth_whitening",
    title: "Teeth Whitening",
    href: "/treatments/teeth-whitening",
    image: "/images/treatments/teeth-whitening.png",
  },
  {
    key: "grid_bad_breath",
    title: "Bad Breath and Halitosis",
    href: "/treatments/bad-breath-halitosis",
    image: "/images/treatments/bad-breath.png",
  },
  {
    key: "grid_crowns",
    title: "Dental Crown and Bridges",
    href: "/treatments/dental-crown-bridges",
    image: "/images/treatments/dental-crown-bridge.png",
  },
  {
    key: "grid_frenectomy",
    title: "Frenectomy",
    href: "/treatments/frenectomy",
    image: "/images/treatments/frenectomy.png",
  },
  {
    key: "grid_cosmetic",
    title: "Cosmetic Dentistry",
    href: "/treatments/cosmetic-dentistry",
    image: "/images/treatments/cosmetic-dentistry.png",
  },
  {
    key: "grid_laser",
    title: "Laser Dentistry",
    href: "/treatments/laser-dentistry",
    image: "/images/treatments/laser-dentistry.png",
  },
  {
    key: "grid_jaw_surgery",
    title: "Jaw Surgery",
    href: "/treatments/jaw-surgery",
    image: "/images/treatments/jaw-surgery.png",
  },
  {
    key: "grid_genioplasty",
    title: "Genioplasty",
    href: "/treatments/genioplasty",
    image: "/images/treatments/genioplasty.png",
  },
  {
    key: "grid_mouth_ulcers",
    title: "Mouth Ulcers",
    href: "/treatments/mouth-ulcers",
    image: "/images/treatments/mouth-ulcers.png",
  },
  {
    key: "grid_preventive",
    title: "Preventive Dentistry",
    href: "/treatments/preventive-dentistry",
    image: "/images/treatments/preventive-dentistry.png",
  },
];

export default function HomeTreatmentsGrid({ mediaMap }: { mediaMap?: Record<string, string> }) {
  const displayedTreatments = treatments.slice(0, 12);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-[1400px] mx-auto px-4 py-6">
      {displayedTreatments.map((treatment, idx) => {
        const imgSrc = (mediaMap && mediaMap[treatment.key]) || treatment.image;
        return (
          <Link
            key={`${treatment.title}-${idx}`}
            href={treatment.href}
            className="group flex flex-col items-center"
          >
            {/* Image Wrapper */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-premium group-hover:border-blue-200 group-hover:-translate-y-1.5 transition-all duration-300 bg-slate-50 relative">
              <Image
                src={imgSrc}
                alt={treatment.title}
                fill
                unoptimized={typeof imgSrc === 'string' && imgSrc.startsWith('data:')}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={idx < 6}
              />
            </div>
            {/* Treatment Name Text */}
            <span className="mt-3 text-center text-xs md:text-sm font-bold text-slate-700 group-hover:text-brand transition-colors duration-300 leading-tight px-1">
              {treatment.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
