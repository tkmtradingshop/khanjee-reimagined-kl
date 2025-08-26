import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Star, Users, Award } from "lucide-react";
import heroBiryaniPremium from "@/assets/hero-chicken-biryani-authentic.jpg";
import heroBBQPremium from "@/assets/hero-pakistani-bbq-platter.jpg";
import heroChapliKebab from "@/assets/hero-mutton-lahori-karahi.jpg";

const HeroSection = ({ onOrderNow }: { onOrderNow: () => void }) => {
  const heroImages = [
    {
      src: heroBiryaniPremium,
      title: "Chicken Biryani",
      subtitle: "Aromatic basmati rice with tender chicken, crafted with authentic Pakistani spices",
      stats: "🍛 Signature Dish • ⭐ Most Popular",
    },
    {
      src: heroBBQPremium,
      title: "Pakistani BBQ Platter",
      subtitle: "Fresh from the tandoor - chicken tikka, malai boti & seekh kebabs",
      stats: "🔥 Tandoor Special • 🥩 Halal Certified",
    },
    {
      src: heroChapliKebab,
      title: "Mutton Lahori Karahi",
      subtitle: "Traditional copper karahi with tender mutton in rich, aromatic gravy",
      stats: "👑 Chef's Pride • 🌶️ Authentic Recipe",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Authentic Pakistani Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={heroImages[currentImage].src}
            alt="Khanjee Restaurant"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          {/* Pakistani Spice-inspired Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-800/70 to-yellow-800/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,140,0,0.3) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(220,38,38,0.3) 0%, transparent 50%)`
            }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Authentic Stats Bar */}
        <div className="mb-6 flex flex-wrap justify-center gap-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-md rounded-full px-4 py-2 text-orange-100 text-xs font-medium border border-orange-400/30">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <Users size={14} />
            Serving 500+ families daily
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-yellow-600/20 backdrop-blur-md rounded-full px-4 py-2 text-orange-100 text-xs font-medium border border-red-400/30">
            <Star size={14} />
            4.9 ★ Authentic Taste
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-md rounded-full px-4 py-2 text-orange-100 text-xs font-medium border border-yellow-400/30">
            <Award size={14} />
            KL's Most Authentic Pakistani
          </div>
        </div>

        {/* Restaurant Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-md rounded-full px-6 py-3 text-orange-100 text-sm font-medium border border-orange-400/40">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <MapPin size={16} />
          Kuala Lumpur • Authentic Pakistani Cuisine Since 2015
        </div>

        {/* Main Brand Heading */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-br from-orange-200 via-yellow-200 to-red-200 bg-clip-text mb-4 tracking-tight leading-none drop-shadow-lg">
            KHANJEE
          </h1>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-orange-100 mb-2 tracking-wide">
              {heroImages[currentImage].title}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        {/* Authentic Description */}
        <div className="mb-8 animate-fade-in-delayed">
          <p className="text-xl md:text-2xl lg:text-3xl text-orange-50 mb-4 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            {heroImages[currentImage].subtitle}
          </p>
          <div className="text-sm md:text-base text-orange-200 bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-full px-6 py-2 inline-block border border-orange-400/30">
            {heroImages[currentImage].stats}
          </div>
        </div>

        {/* Authentic CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up-delayed">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="brass"
              size="xl"
              onClick={onOrderNow}
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg border-2 border-orange-400/30 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                🍽️ Order Authentic Pakistani Food
              </span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform relative z-10" size={24} />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="group bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-2 border-orange-400/40 text-orange-100 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-600 hover:text-white backdrop-blur-sm transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <span>📞 Reserve Table</span>
            </Button>
          </div>
        </div>

        {/* Restaurant Info Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-3 text-orange-100 bg-gradient-to-r from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30">
            <Clock size={18} />
            <span className="text-base font-medium">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 text-orange-100 bg-gradient-to-r from-red-900/30 to-yellow-900/30 backdrop-blur-sm rounded-full px-6 py-3 border border-red-400/30">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-base font-medium">🚗 Free Delivery • Halal Certified</span>
          </div>
        </div>

        {/* Enhanced Image Indicators */}
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
                  ? 'bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 shadow-lg shadow-orange-400/50'
                  : 'bg-orange-300/30 hover:bg-orange-300/50'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;