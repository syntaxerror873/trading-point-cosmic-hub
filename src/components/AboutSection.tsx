import veenusPortrait from "@/assets/veenus-portrait.jpg";
import satyendraPortrait from "@/assets/satyendra-portrait.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold text-gradient mb-6">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries behind Trading Point, dedicated to empowering traders with 
            cutting-edge knowledge and innovative strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Veenus */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl card-futuristic p-8 hover:glow-blue transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-500">
                    <img 
                      src={veenusPortrait} 
                      alt="Veenus - Founder of Trading Point" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-futuristic font-bold text-gradient">Veenus</h3>
                  <p className="text-lg font-semibold text-primary">Founder & Lead Trader</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Master trader with 8+ years of market experience. Specializes in technical analysis, 
                    risk management, and developing profitable trading strategies that have helped 
                    thousands of traders achieve consistent profits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Satyendra */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl card-futuristic p-8 hover:glow-violet transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-all duration-500">
                    <img 
                      src={satyendraPortrait} 
                      alt="Satyendra - Co-founder of Trading Point" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-futuristic font-bold text-gradient">Satyendra</h3>
                  <p className="text-lg font-semibold text-accent">Co-founder & Strategy Expert</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Financial markets strategist and educator with deep expertise in market psychology, 
                    algorithmic trading, and portfolio optimization. Passionate about making complex 
                    trading concepts accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};