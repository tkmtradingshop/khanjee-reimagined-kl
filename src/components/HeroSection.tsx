import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Star, Users, Award, Truck, Sparkles, Flame, Crown } from "lucide-react";
import premiumBiryani from "@/assets/hero-premium-biryani-4k.jpg";
import tandooriSizzle from "@/assets/hero-tandoori-sizzle-4k.jpg";
import karahiPremium from "@/assets/hero-karahi-premium-4k.jpg";

const HeroSection = ({ onOrderNow }: { onOrderNow: () => void }) => {
  const heroImages = [
    {
      src: premiumBiryani,
      title: "Royal Biryani Experience",
      subtitle: "Premium saffron-infused basmati with aromatic spices and tender meat",
      accent: "Most Loved Dish",
      icon: Crown,
      color: "from-amber-500/20 to-orange-400/20",
      glow: "shadow-amber-500/20"
    },
    {
      src: tandooriSizzle,
      title: "Sizzling Tandoori BBQ",
      subtitle: "Charcoal-grilled perfection with traditional Pakistani marinades",
      accent: "Chef's Signature",
      icon: Flame,
      color: "from-red-500/20 to-orange-500/20",
      glow: "shadow-red-500/20"
    },
    {
      src: karahiPremium,
      title: "Authentic Karahi",
      subtitle: "Traditional copper vessel cooking with fresh herbs and premium cuts",
      accent: "Family Recipe",
      icon: Sparkles,
      color: "from-emerald-500/20 to-teal-400/20",
      glow: "shadow-emerald-500/20"
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentHero = heroImages[currentImage];
  const IconComponent = currentHero.icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Food Image with Enhanced Effects */}
          <img
            src={currentHero.src}
            alt="Premium Pakistani Cuisine"
            className="w-full h-full object-cover transition-all duration-2000 scale-110 hover:scale-105"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          
          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/90 transition-all duration-2000`}></div>
          <div className={`absolute inset-0 bg-gradient-to-tr ${currentHero.color} transition-all duration-2000`}></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse opacity-60 animation-delay-1000"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
            <Star className="text-amber-400" size={24} fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-40 right-16 animate-float-delayed">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
            <Award className="text-orange-400" size={24} />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
            <Flame className="text-red-400" size={24} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Premium Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-400/20 backdrop-blur-xl rounded-full px-8 py-4 border border-amber-400/30 shadow-2xl">
            <IconComponent className="text-amber-400" size={20} />
            <span className="text-amber-100 font-semibold text-lg tracking-wide">{currentHero.accent}</span>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Location & Stats */}
        <div className="mb-10 flex flex-wrap justify-center gap-4 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-xl">
            <div className="flex items-center gap-2 text-white">
              <MapPin size={16} className="text-emerald-400" />
              <span className="font-medium">Kuala Lumpur • 3 Locations</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-xl">
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">250+ Orders Today</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-xl">
            <div className="flex items-center gap-2 text-white">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <span className="font-medium">4.9 (3.2k Reviews)</span>
            </div>
          </div>
        </div>

        {/* Main Heading with Futuristic Design */}
        <div className="mb-12 animate-scale-in">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-white mb-6 tracking-tight leading-none drop-shadow-2xl">
              KHANJEE
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-black text-white/5 blur-sm">
              KHANJEE
            </div>
          </div>
          
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
              {currentHero.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Dynamic Description */}
        <div className="mb-16 animate-fade-in">
          <p className="text-2xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            {currentHero.subtitle}
          </p>
          
          {/* Specialty Tags */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-400/20 backdrop-blur-xl rounded-full px-6 py-3 border border-amber-400/30">
              <span className="text-amber-100 font-semibold flex items-center gap-2">
                <Crown size={16} />
                Malaysian's #1 Choice
              </span>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-400/20 backdrop-blur-xl rounded-full px-6 py-3 border border-emerald-400/30">
              <span className="text-emerald-100 font-semibold flex items-center gap-2">
                <Award size={16} />
                Authentic Heritage
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons with Glow Effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
          <Button
            onClick={onOrderNow}
            className={`relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold px-12 py-6 text-xl rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl ${currentHero.glow} hover:shadow-amber-500/40 border border-amber-400/50 backdrop-blur-xl`}
          >
            <span className="relative z-10 flex items-center gap-3">
              Order Now
              <ChevronRight size={24} className="animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity"></div>
          </Button>
          
          <Button
            variant="outline"
            className="relative border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-12 py-6 text-xl rounded-full transition-all duration-500 transform hover:scale-110 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-white/20"
          >
            <span className="flex items-center gap-3">
              <Users size={20} />
              Reserve Table
            </span>
          </Button>
        </div>

        {/* Enhanced Info Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 shadow-xl">
            <Clock size={20} className="text-emerald-400" />
            <span className="text-white font-medium text-lg">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 shadow-xl">
            <Truck size={20} className="text-blue-400" />
            <span className="text-white font-medium text-lg">Free Delivery • 25-35 min</span>
          </div>
        </div>

        {/* Enhanced Image Indicators */}
        <div className="flex justify-center gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative group transition-all duration-500 ${
                index === currentImage
                  ? 'scale-125'
                  : 'hover:scale-110'
              }`}
            >
              <div className={`w-16 h-2 rounded-full transition-all duration-500 ${
                index === currentImage
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 shadow-lg shadow-amber-400/50'
                  : 'bg-white/30 hover:bg-white/50 group-hover:shadow-lg group-hover:shadow-white/30'
              }`}></div>
              {index === currentImage && (
                <div className="absolute inset-0 w-16 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 blur opacity-60"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;