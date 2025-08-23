import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Complete Beginner's Guide to Trading",
    thumbnail: "https://img.youtube.com/vi/Iq9vp-DV5OA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Iq9vp-DV5OA?si=4NJGwFZ0iKqt40qp",
    duration: "15:32",
    views: "125K"
  },
  {
    id: 2,
    title: "Advanced Technical Analysis Strategies",
    thumbnail: "https://img.youtube.com/vi/Iq9vp-DV5OA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Iq9vp-DV5OA?si=4NJGwFZ0iKqt40qp",
    duration: "22:18",
    views: "89K"
  },
  {
    id: 3,
    title: "Risk Management Masterclass",
    thumbnail: "https://img.youtube.com/vi/Iq9vp-DV5OA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Iq9vp-DV5OA?si=4NJGwFZ0iKqt40qp",
    duration: "18:45",
    views: "156K"
  },
  {
    id: 4,
    title: "Crypto Trading in 2024: What You Need to Know",
    thumbnail: "https://img.youtube.com/vi/Iq9vp-DV5OA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Iq9vp-DV5OA?si=4NJGwFZ0iKqt40qp",
    duration: "28:12",
    views: "203K"
  },
  {
    id: 5,
    title: "Market Psychology & Emotional Trading",
    thumbnail: "https://img.youtube.com/vi/Iq9vp-DV5OA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Iq9vp-DV5OA?si=4NJGwFZ0iKqt40qp",
    duration: "31:07",
    views: "178K"
  },
  {
    id: 6,
    title: "Building Your First Trading Portfolio",
    thumbnail: "https://img.youtube.com/vi/Iq9vp-DV5OA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Iq9vp-DV5OA?si=4NJGwFZ0iKqt40qp",
    duration: "25:43",
    views: "134K"
  }
];

export const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold text-gradient mb-6">
            Latest Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive video library covering everything from basics to advanced strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group cursor-pointer"
            >
              <div className="card-futuristic overflow-hidden hover:glow-blue transition-all duration-500 transform group-hover:scale-105">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-blue">
                      <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {video.views} views
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-secondary text-lg px-8 py-4">
            View All Videos on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};