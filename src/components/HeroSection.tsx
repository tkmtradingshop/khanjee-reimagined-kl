import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Star, Users, Award } from "lucide-react";
import heroBiryaniPremium from "@/assets/hero-genz-biryani.jpg";
import heroBBQPremium from "@/assets/hero-genz-bbq.jpg";
import heroChapliKebab from "@/assets/hero-genz-karahi.jpg";

const HeroSection = ({ onOrderNow }: { onOrderNow: () => void }) => {
  const heroImages = [
    {
      src: heroBiryaniPremium,
      title: "Aesthetic Biryani Bowl",
      subtitle: "Instagram-worthy saffron rice that hits different ✨",
      stats: "📸 Insta-Famous • 🔥 Trending",
    },
    {
      src: heroBBQPremium,
      title: "Viral BBQ Platter",
      subtitle: "Gen Z approved grilled perfection for your feed",
      stats: "🔥 TikTok Trending • 💯 Fire",
    },
    {
      src: heroChapliKebab,
      title: "Modern Karahi Vibes",
      subtitle: "Traditional flavors with contemporary aesthetic appeal",
      stats: "✨ Aesthetic Goals • 🌈 Colorful",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20">
      {/* Simplified Dynamic Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={heroImages[currentImage].src}
            alt="Khanjee Restaurant"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          {/* Gen Z Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-pink-500/60 to-blue-600/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Live Stats Bar */}
        <div className="mb-6 flex flex-wrap justify-center gap-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-medium border border-purple-400/30">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <Users size={14} />
            247 people vibing
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-medium border border-pink-400/30">
            <Star size={14} />
            4.9 ★ (Gen Z approved)
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-medium border border-blue-400/30">
            <Award size={14} />
            TikTok Famous Restaurant
          </div>
        </div>

        {/* Location Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-md rounded-full px-6 py-3 text-white text-sm font-medium border border-purple-400/40">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          <MapPin size={16} />
          KL • Where the cool kids eat 😎
        </div>

        {/* Main Heading with Gen Z Typography */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 bg-clip-text mb-4 tracking-tight leading-none">
            KHANJEE
          </h1>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-wide">
              {heroImages[currentImage].title}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
        </div>

        {/* Subtitle with Stats */}
        <div className="mb-8 animate-fade-in-delayed">
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            {heroImages[currentImage].subtitle}
          </p>
          <div className="text-sm md:text-base text-white bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block border border-pink-400/20">
            {heroImages[currentImage].stats}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up-delayed">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="brass"
              size="xl"
              onClick={onOrderNow}
              className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold text-white border-2 border-pink-400/30"
            >
              <span className="relative z-10">🔥 Order Now</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform relative z-10" size={24} />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="group bg-blue-500/20 border-2 border-blue-400/30 text-white hover:bg-blue-500 hover:text-white backdrop-blur-sm transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <span>📱 Book Table</span>
            </Button>
          </div>
        </div>

        {/* Live Info Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-3 text-white bg-purple-600/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/20">
            <Clock size={18} />
            <span className="text-base font-medium">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 text-white bg-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-400/30">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-base font-medium">🚚 Fast Delivery • 15-25 min</span>
          </div>
        </div>

        {/* Simple Image Indicators */}
        <div className="flex justify-center gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-300 ${
                index === currentImage
                  ? 'scale-110'
                  : 'hover:scale-105'
              }`}
            >
              <div className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400'
                  : 'bg-white/20 hover:bg-white/40'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;