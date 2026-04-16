// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import { FetchProjectData } from "@/lib/FetchProjectData";
import { WhyUsSection } from "@/components/WhyUsSection";

export default async function HomePage() {
  const { data } = await FetchProjectData();
  return (
    <>
      <HeroSection {...data.hero} images={data.gallery} />
      <AboutSection {...data.about} />
      <ServicesSection {...data.services} />
      <WhyUsSection {...data.whyUs} />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <TestimonialsSection />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />
      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </>
  );
}
