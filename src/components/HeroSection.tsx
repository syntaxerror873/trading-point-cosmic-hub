import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-futuristic font-black text-gradient leading-none">
            TRADING POINT
          </h1>
          <p className="text-2xl md:text-3xl font-clean font-light text-foreground/80 tracking-wide">
            Learn • Trade • Grow
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button className="btn-hero animate-glow">
              Join Community
            </Button>
            <Button className="btn-secondary">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-accent/20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-teal/10 rotate-12 animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-violet/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};