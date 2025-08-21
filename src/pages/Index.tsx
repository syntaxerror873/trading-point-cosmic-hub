import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VideosSection } from "@/components/VideosSection";
import { CoursesSection } from "@/components/CoursesSection";
import { MerchandiseSection } from "@/components/MerchandiseSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <ParticleBackground />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <VideosSection />
        <CoursesSection />
        <MerchandiseSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;