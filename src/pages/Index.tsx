import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TradesSection } from "@/components/TradesSection";
import { VideosSection } from "@/components/VideosSection";
import { CoursesSection } from "@/components/CoursesSection";
import { MerchandiseSection } from "@/components/MerchandiseSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TradesSection />
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