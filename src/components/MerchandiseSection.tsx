import { Button } from "@/components/ui/button";

const merchandise = [
  {
    id: 1,
    name: "Trading Point Hoodie",
    description: "Premium quality cotton hoodie with embroidered logo",
    price: "$59",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    colors: ["Black", "Navy", "Charcoal"]
  },
  {
    id: 2,
    name: "Trader's Coffee Mug",
    description: "Ceramic mug perfect for your morning trading routine",
    price: "$24",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
    colors: ["Black", "White"]
  },
  {
    id: 3,
    name: "Premium T-Shirt",
    description: "Soft cotton blend with modern Trading Point design",
    price: "$35",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    colors: ["Black", "White", "Navy"]
  },
  {
    id: 4,
    name: "Snapback Cap",
    description: "Adjustable snapback with embroidered Trading Point logo",
    price: "$42",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    colors: ["Black", "Navy"]
  },
  {
    id: 5,
    name: "Trading Journal",
    description: "Professional leather-bound journal for trade tracking",
    price: "$68",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    colors: ["Black", "Brown"]
  },
  {
    id: 6,
    name: "Sticker Pack",
    description: "Set of 10 premium vinyl stickers with Trading Point designs",
    price: "$15",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    colors: ["Mixed"]
  }
];

export const MerchandiseSection = () => {
  return (
    <section id="merchandise" className="py-20 bg-surface/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold text-gradient mb-6">
            Merchandise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Show your Trading Point pride with our exclusive collection of premium merchandise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item) => (
            <div key={item.id} className="group">
              <div className="card-futuristic overflow-hidden hover:glow-teal transition-all duration-500 transform hover:scale-105">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Price overlay */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <span className="text-xl font-futuristic font-bold text-gradient">{item.price}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-futuristic font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Color options */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                      Available Colors:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.colors.map((color) => (
                        <span 
                          key={color} 
                          className="px-2 py-1 bg-surface-light rounded text-xs font-medium"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full btn-secondary hover:btn-hero transition-all duration-300">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};