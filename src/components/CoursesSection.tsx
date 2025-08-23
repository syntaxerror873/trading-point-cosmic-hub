import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Trading Fundamentals Masterclass",
    description: "Complete beginner-friendly course covering all trading basics, technical analysis, and risk management strategies.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    price: "$297",
    duration: "8 weeks",
    lessons: "45 lessons",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Advanced Options Trading",
    description: "Master complex options strategies, volatility trading, and sophisticated risk management techniques.",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
    price: "$497",
    duration: "12 weeks",
    lessons: "68 lessons",
    level: "Advanced"
  },
  {
    id: 3,
    title: "Crypto Trading Bootcamp",
    description: "Comprehensive guide to cryptocurrency trading, DeFi strategies, and blockchain analysis.",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    price: "$397",
    duration: "10 weeks",
    lessons: "56 lessons",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Algorithmic Trading with Python",
    description: "Learn to build, test, and deploy automated trading systems using Python and machine learning.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    price: "$697",
    duration: "16 weeks",
    lessons: "82 lessons",
    level: "Expert"
  }
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold text-gradient mb-6">
            Premium Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your trading journey with our comprehensive, step-by-step courses designed by expert traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group">
              <div className="card-futuristic overflow-hidden hover:glow-violet transition-all duration-500 transform hover:scale-105">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  
                  {/* Level badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      course.level === 'Beginner' ? 'bg-neon-teal/20 text-neon-teal border border-neon-teal/30' :
                      course.level === 'Intermediate' ? 'bg-primary/20 text-primary border border-primary/30' :
                      course.level === 'Advanced' ? 'bg-accent/20 text-accent border border-accent/30' :
                      'bg-destructive/20 text-destructive border border-destructive/30'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <span className="text-2xl font-futuristic font-bold text-gradient">{course.price}</span>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-futuristic font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      {course.lessons}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      {course.duration}
                    </span>
                  </div>
                  
                  <Button className="w-full btn-hero">
                    Enroll Now
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