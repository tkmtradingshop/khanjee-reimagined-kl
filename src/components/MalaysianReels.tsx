import { Play, Heart, MessageCircle, Share, Eye } from "lucide-react";

const MalaysianReels = () => {
  const reels = [
    {
      id: 1,
      title: "Malaysian Street Food Tour",
      views: "2.3M",
      likes: "189K",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Best street food in KL! 🇲🇾"
    },
    {
      id: 2,
      title: "Nasi Lemak Recipe",
      views: "1.8M",
      likes: "145K",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Authentic Malaysian style! 🍛"
    },
    {
      id: 3,
      title: "Penang Food Paradise",
      views: "3.1M",
      likes: "267K",
      thumbnail: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Food heaven in Penang! 🏝️"
    },
    {
      id: 4,
      title: "Char Kway Teow Master",
      views: "1.5M",
      likes: "122K",
      thumbnail: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Wok hei perfection! 🔥"
    },
    {
      id: 5,
      title: "Malaysian Desserts",
      views: "950K",
      likes: "78K",
      thumbnail: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Sweet Malaysian treats! 🍧"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-deep/5 via-brass-gold/5 to-spice-red/5 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-spice-red/20 rounded-full px-6 py-2 mb-4">
            <Play className="w-5 h-5 text-brass-gold" />
            <span className="text-brass-gold font-semibold">Viral Reels</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Malaysia's Food Scene Goes Viral
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Watch these trending Malaysian food reels that are taking social media by storm!
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-64 h-96 bg-black rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-full">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1 fill-current" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {reel.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-3">
                    {reel.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{reel.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{reel.likes}</span>
                    </div>
                  </div>
                </div>
                
                {/* Side actions */}
                <div className="absolute right-3 bottom-20 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Share className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Follow us for more viral Malaysian food content!
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              <span>@KhanjeeRestaurant</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              <span>@KhanjeeOfficial</span>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default MalaysianReels;