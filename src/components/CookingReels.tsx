import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Heart, Share2, MessageCircle, ChefHat, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

// Cooking video data (using placeholder videos but structured for real content)
const cookingReels = [
  {
    id: 1,
    title: "🔥 SIZZLING Chicken Karahi in Action!",
    description: "Watch our master chef create magic with fresh chicken & aromatic spices",
    videoUrl: "/placeholder-video.mp4", // Placeholder - would be real cooking videos
    thumbnail: "/api/placeholder/400/600",
    duration: "0:45",
    likes: 2847,
    comments: 142,
    dish: "Chicken Karahi",
    price: "RM 35",
    cookTime: "15 mins",
    popularity: "🔥 VIRAL",
    chef: "Chef Mahmood"
  },
  {
    id: 2,
    title: "✨ The SECRET to Perfect Biryani Layers",
    description: "Experience the art of layering that makes our biryani legendary",
    videoUrl: "/placeholder-video-2.mp4",
    thumbnail: "/api/placeholder/400/600",
    duration: "1:20",
    likes: 4521,
    comments: 298,
    dish: "Chicken Biryani", 
    price: "RM 16",
    cookTime: "45 mins",
    popularity: "👑 SIGNATURE",
    chef: "Chef Amara"
  },
  {
    id: 3,
    title: "🥩 TANDOOR Magic - Malai Boti Perfection",
    description: "From marinade to mouth-watering perfection in our blazing tandoor",
    videoUrl: "/placeholder-video-3.mp4", 
    thumbnail: "/api/placeholder/400/600",
    duration: "0:38",
    likes: 3156,
    comments: 187,
    dish: "Malai Boti",
    price: "RM 16",
    cookTime: "12 mins",
    popularity: "🌟 TRENDING",
    chef: "Chef Hassan"
  },
  {
    id: 4,
    title: "💎 PREMIUM Mutton Lahori - Pure Luxury!",
    description: "Watch tender mutton transform into our most coveted dish",
    videoUrl: "/placeholder-video-4.mp4",
    thumbnail: "/api/placeholder/400/600", 
    duration: "1:05",
    likes: 5892,
    comments: 341,
    dish: "Mutton Lahori Karahi",
    price: "RM 45",
    cookTime: "35 mins",
    popularity: "💎 PREMIUM",
    chef: "Head Chef Khan"
  }
];

interface CookingReelsProps {
  onOrderDish: (dishName: string) => void;
}

const CookingReels = ({ onOrderDish }: CookingReelsProps) => {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState<{[key: number]: boolean}>({});

  const currentVideo = cookingReels[currentReel];

  useEffect(() => {
    // Auto-advance reels every 10 seconds when playing
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentReel(prev => (prev + 1) % cookingReels.length);
      }, 10000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  const toggleLike = (reelId: number) => {
    setLiked(prev => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % cookingReels.length);
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + cookingReels.length) % cookingReels.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-stone-900 to-zinc-900 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-amber-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.1),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(245,101,101,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-orange-500/30">
            <ChefHat className="text-orange-400" size={24} />
            <span className="text-orange-300 font-semibold text-lg">LIVE FROM OUR KITCHEN</span>
            <Flame className="text-red-400 animate-pulse" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-orange-400 via-red-400 to-amber-400 bg-clip-text mb-6">
            Behind The Sizzle
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Get hypnotized by our master chefs creating culinary masterpieces. 
            <span className="text-orange-400 font-semibold"> Every sizzle tells a story</span>, 
            every flame births flavor that'll make you crave more! 🔥
          </p>
        </div>

        {/* Reels Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Video Player */}
            <div className="lg:col-span-7">
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-stone-700/50">
                {/* Video Placeholder */}
                <div className="aspect-[9/16] bg-gradient-to-br from-stone-800 to-slate-900 relative group cursor-pointer"
                     onClick={() => setIsPlaying(!isPlaying)}>
                  
                  {/* Video Thumbnail/Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🍳</div>
                  </div>
                  
                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="xl"
                      className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-md rounded-full p-6 transition-all duration-300 group-hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(!isPlaying);
                      }}
                    >
                      {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                    </Button>
                  </div>

                  {/* Video Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300"
                         style={{ width: isPlaying ? '100%' : '0%' }}></div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute top-4 right-4 flex gap-3">
                    <Button 
                      size="sm"
                      variant="ghost"
                      className="bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm rounded-full p-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </Button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {currentVideo.duration}
                    </div>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-red-400 transition-colors"
                        onClick={() => toggleLike(currentVideo.id)}
                      >
                        <Heart 
                          size={24} 
                          className={`${liked[currentVideo.id] ? 'fill-red-500 text-red-500' : ''} transition-all duration-300`} 
                        />
                        <span className="ml-2">{currentVideo.likes + (liked[currentVideo.id] ? 1 : 0)}</span>
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:text-orange-400">
                        <MessageCircle size={24} />
                        <span className="ml-2">{currentVideo.comments}</span>
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:text-blue-400">
                        <Share2 size={24} />
                      </Button>
                    </div>
                    <div className="text-orange-400 font-bold text-sm bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                      {currentVideo.popularity}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Details & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-orange-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <ChefHat size={16} />
                  {currentVideo.chef}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {currentVideo.title}
                </h3>
                <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                  {currentVideo.description}
                </p>
                
                {/* Dish Details */}
                <div className="bg-gradient-to-r from-stone-800/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-stone-600/30 mb-6">
                  <h4 className="text-xl font-bold text-orange-400 mb-3">{currentVideo.dish}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-stone-400">Price:</span>
                      <div className="text-white font-bold text-lg">{currentVideo.price}</div>
                    </div>
                    <div>
                      <span className="text-stone-400">Cook Time:</span>
                      <div className="text-white font-bold text-lg">{currentVideo.cookTime}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size="xl"
                  onClick={() => onOrderDish(currentVideo.dish)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  🛒 Order This Amazing Dish Now!
                </Button>

                <p className="text-center text-stone-400 text-sm mt-3">
                  ⚡ Fresh made-to-order • 🚚 30min delivery • 💯 Satisfaction guaranteed
                </p>
              </div>
            </div>
          </div>

          {/* Reel Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <Button
              onClick={prevReel}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-full px-6"
            >
              ← Previous Reel
            </Button>

            {/* Reel Indicators */}
            <div className="flex gap-3">
              {cookingReels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReel(index)}
                  className={`w-12 h-2 rounded-full transition-all duration-300 ${
                    index === currentReel
                      ? 'bg-gradient-to-r from-orange-400 to-red-400 shadow-lg shadow-orange-500/50'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextReel}
              variant="outline"
              size="lg" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-full px-6"
            >
              Next Reel →
            </Button>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Can't Decide? <span className="text-orange-400">We Got You! 🎯</span>
              </h3>
              <p className="text-stone-300 mb-6">
                Our chefs recommend trying the dishes that made you drool while watching! 
                Order any 2 dishes and get <span className="text-orange-400 font-bold">FREE delivery</span> 🚚
              </p>
              <Button
                size="xl"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                🔥 Order Chef's Selection Now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingReels;