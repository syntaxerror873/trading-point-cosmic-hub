import { useEffect, useRef } from "react";

// Mock trade screenshots - replace with your actual trade images
const tradeImages = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=400&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1617817488876-5e91c37c2fbc?w=400&h=300&fit=crop&crop=center",
];

export const TradesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollSpeed = 1;

    const animate = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset scroll position when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...tradeImages, ...tradeImages];

  return (
    <section id="trades" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold text-gradient mb-6">
            W Trades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Check out our successful trades and winning strategies in action.
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedImages.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 h-60 relative group cursor-pointer"
              >
                <div className="card-futuristic overflow-hidden h-full hover:glow-green transition-all duration-500 transform group-hover:scale-105">
                  <img 
                    src={image} 
                    alt={`Winning trade ${(index % tradeImages.length) + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Trade info overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-sm font-semibold text-primary">+$2,150</div>
                      <div className="text-xs text-muted-foreground">EURUSD • 2h ago</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};