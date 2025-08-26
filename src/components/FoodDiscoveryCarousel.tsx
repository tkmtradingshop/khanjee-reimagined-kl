import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Flame, Heart, Share2, ShoppingCart, Zap, Trophy, Crown } from "lucide-react";

// Trending dishes with engaging copy and social proof
const trendingDishes = [
  {
    id: 1,
    name: "🔥 VIRAL Chicken Karahi",
    description: "The dish that broke the internet! Our most Instagrammed karahi that's converting food bloggers into loyal customers!",
    image: "/api/placeholder/400/300",
    price: "RM 35",
    originalPrice: "RM 45",
    rating: 4.9,
    reviews: 2847,
    cookTime: "15 mins",
    popularity: "🔥 TRENDING #1",
    socialProof: "2.1K orders this week",
    urgency: "Only 12 portions left today!",
    engagement: { likes: 15420, shares: 892, comments: 543 },
    tags: ["Viral Hit", "Most Ordered", "Insta Famous"],
    discount: 22,
    chef: "Chef Mahmood's Signature"
  },
  {
    id: 2,
    name: "👑 LEGENDARY Biryani",
    description: "The biryani that made food critics cry tears of joy! Each grain tells a story of passion, tradition, and pure deliciousness!",
    image: "/api/placeholder/400/300", 
    price: "RM 16",
    originalPrice: "RM 20",
    rating: 4.95,
    reviews: 4521,
    cookTime: "25 mins",
    popularity: "👑 SIGNATURE",
    socialProof: "4.8K orders this month",
    urgency: "Most ordered dish - Limited evening batch!",
    engagement: { likes: 28750, shares: 1205, comments: 967 },
    tags: ["Signature Dish", "Award Winner", "Heritage Recipe"],
    discount: 20,
    chef: "Grandma Fatima's Secret Recipe"
  },
  {
    id: 3,
    name: "💎 PREMIUM Mutton Lahori",
    description: "The aristocrat of karahis! Tender mutton that melts in your mouth, cooked with spices worth their weight in gold!",
    image: "/api/placeholder/400/300",
    price: "RM 45", 
    originalPrice: "RM 55",
    rating: 4.88,
    reviews: 1892,
    cookTime: "35 mins",
    popularity: "💎 PREMIUM",
    socialProof: "VIP customers' #1 choice",
    urgency: "Premium ingredients - Only 8 servings daily!",
    engagement: { likes: 12340, shares: 678, comments: 432 },
    tags: ["Premium Choice", "Luxury Taste", "Limited Edition"],
    discount: 18,
    chef: "Head Chef's Masterpiece"
  },
  {
    id: 4,
    name: "⚡ LIGHTNING Malai Boti",
    description: "Soft, creamy, and dangerously addictive! The tandoor magic that's converting vegetarians and making meat lovers weak in the knees!",
    image: "/api/placeholder/400/300",
    price: "RM 16",
    originalPrice: "RM 22",
    rating: 4.82,
    reviews: 3156,
    cookTime: "12 mins",
    popularity: "⚡ FAST FAVORITE", 
    socialProof: "3.2K orders in 30 days",
    urgency: "Hot off the tandoor - Order before 9 PM!",
    engagement: { likes: 18960, shares: 756, comments: 612 },
    tags: ["Quick Bite", "Tandoor Special", "Addictive"],
    discount: 27,
    chef: "Tandoor Master Hassan"
  },
  {
    id: 5,
    name: "🌟 SHOWSTOPPER Fish Biryani",
    description: "The plot twist in biryani world! Fresh fish meets aromatic rice in a love story that'll make you forget chicken biryani exists!",
    image: "/api/placeholder/400/300",
    price: "RM 25",
    originalPrice: "RM 32", 
    rating: 4.76,
    reviews: 1456,
    cookTime: "30 mins",
    popularity: "🌟 UNIQUE",
    socialProof: "Food bloggers' secret obsession",
    urgency: "Fresh catch daily - Limited quantities!",
    engagement: { likes: 9875, shares: 445, comments: 298 },
    tags: ["Unique Recipe", "Fresh Daily", "Blogger's Choice"],
    discount: 22,
    chef: "Chef Marina's Innovation"
  }
];

interface FoodDiscoveryCarouselProps {
  onAddToCart: (dish: any) => void;
}

const FoodDiscoveryCarousel = ({ onAddToCart }: FoodDiscoveryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedDishes, setLikedDishes] = useState<{[key: number]: boolean}>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const currentDish = trendingDishes[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingDishes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const toggleLike = (dishId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedDishes(prev => ({ ...prev, [dishId]: !prev[dishId] }));
  };

  const nextDish = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingDishes.length);
  };

  const prevDish = () => {
    setCurrentIndex((prev) => (prev - 1 + trendingDishes.length) % trendingDishes.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-stone-900 to-zinc-900 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-orange-500/30">
            <Trophy className="text-yellow-400" size={24} />
            <span className="text-orange-300 font-semibold text-lg">TRENDING NOW</span>
            <Zap className="text-yellow-400 animate-pulse" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-orange-400 via-red-400 to-amber-400 bg-clip-text mb-6">
            What's Making Everyone CRAZY! 
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            These dishes are breaking the internet, converting foodies, and creating 
            <span className="text-orange-400 font-semibold"> viral food moments</span> across KL! 
            Join the hype before it's too late! 🔥📱
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Main Featured Dish */}
            <div className="bg-gradient-to-br from-stone-800/60 to-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-stone-600/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Dish Image */}
                <div className="lg:col-span-6 relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-700 to-slate-800 rounded-2xl overflow-hidden relative group">
                    {/* Discount Badge */}
                    {currentDish.discount > 0 && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
                          -{currentDish.discount}% OFF
                        </Badge>
                      </div>
                    )}
                    
                    {/* Popularity Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-3 py-1 rounded-full shadow-lg">
                        {currentDish.popularity}
                      </Badge>
                    </div>

                    {/* Image Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-600/20 to-red-600/20">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🍽️</div>
                        <div className="text-white font-bold text-lg">{currentDish.name.split(' ').slice(-2).join(' ')}</div>
                      </div>
                    </div>

                    {/* Social Engagement Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={(e) => toggleLike(currentDish.id, e)}
                            className="flex items-center gap-1 hover:text-red-400 transition-colors"
                          >
                            <Heart 
                              size={18} 
                              className={`${likedDishes[currentDish.id] ? 'fill-red-500 text-red-500' : ''} transition-all duration-300`}
                            />
                            <span>{(currentDish.engagement.likes + (likedDishes[currentDish.id] ? 1 : 0)).toLocaleString()}</span>
                          </button>
                          <span className="flex items-center gap-1">
                            <Share2 size={18} />
                            {currentDish.engagement.shares}
                          </span>
                        </div>
                        <div className="text-orange-400 font-bold">
                          {currentDish.socialProof}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dish Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="text-yellow-400" size={20} />
                      <span className="text-orange-400 font-semibold text-sm">{currentDish.chef}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {currentDish.name}
                    </h3>
                    <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                      {currentDish.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentDish.tags.map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="text-yellow-400 fill-yellow-400" size={18} />
                          <span className="text-white font-bold text-lg">{currentDish.rating}</span>
                        </div>
                        <span className="text-stone-400 text-sm">{currentDish.reviews.toLocaleString()} reviews</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Clock className="text-blue-400" size={18} />
                          <span className="text-white font-bold text-lg">{currentDish.cookTime}</span>
                        </div>
                        <span className="text-stone-400 text-sm">Ready in</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Flame className="text-red-400" size={18} />
                          <span className="text-white font-bold text-lg">{currentDish.reviews}</span>
                        </div>
                        <span className="text-stone-400 text-sm">This week</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-orange-400">{currentDish.price}</span>
                        {currentDish.originalPrice !== currentDish.price && (
                          <span className="text-lg text-stone-500 line-through">{currentDish.originalPrice}</span>
                        )}
                      </div>
                      {currentDish.discount > 0 && (
                        <Badge className="bg-green-500 text-white font-bold">
                          Save {currentDish.discount}%
                        </Badge>
                      )}
                    </div>

                    {/* Urgency */}
                    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-4 border border-red-500/30 mb-6">
                      <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                        <Zap size={16} className="animate-pulse" />
                        {currentDish.urgency}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      onClick={() => onAddToCart(currentDish)}
                      size="xl"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 rounded-xl"
                    >
                      <ShoppingCart className="mr-2" size={20} />
                      🛒 GET THIS VIRAL DISH NOW!
                    </Button>

                    <p className="text-center text-stone-400 text-sm mt-3">
                      ⚡ Join {currentDish.socialProof.split(' ')[0]} happy customers • 🚚 Free delivery on orders above RM40
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <Button
                onClick={prevDish}
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-full px-6"
              >
                ← Previous Hit
              </Button>

              {/* Dish Indicators */}
              <div className="flex gap-3">
                {trendingDishes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-12 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-orange-400 to-red-400 shadow-lg shadow-orange-500/50'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextDish}
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-full px-6"
              >
                Next Viral →
              </Button>
            </div>
          </div>

          {/* Bottom Social Proof */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don't Just Take Our Word For It! <span className="text-orange-400">See What's Trending! 📱✨</span>
              </h3>
              <p className="text-stone-300 mb-6">
                Over <span className="text-orange-400 font-bold">15,000+ food lovers</span> have already joined the viral food movement! 
                Your favorite dish is just one click away from becoming your new obsession! 🔥
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  📸 Share Your Food Moment
                </Button>
                <Button
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  🔥 Order All Trending Dishes!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDiscoveryCarousel;