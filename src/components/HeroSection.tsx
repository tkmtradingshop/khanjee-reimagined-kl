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
        {/* Enhanced Stats Bar */}
        <div className="mb-6 flex flex-wrap justify-center gap-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 backdrop-blur-md rounded-full px-6 py-3 text-white text-sm font-bold border-2 border-orange-300 shadow-xl shadow-orange-500/30 hover:scale-105 transition-transform">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
            <Users size={16} />
            Serving 500+ families daily
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-500 backdrop-blur-md rounded-full px-6 py-3 text-white text-sm font-bold border-2 border-red-300 shadow-xl shadow-red-500/30 hover:scale-105 transition-transform">
            <Star size={16} className="fill-white" />
            4.9 ★ Authentic Taste
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 backdrop-blur-md rounded-full px-6 py-3 text-white text-sm font-bold border-2 border-yellow-300 shadow-xl shadow-yellow-500/30 hover:scale-105 transition-transform">
            <Award size={16} />
            KL's Most Authentic Pakistani
          </div>
        </div>

        {/* Highlighted Restaurant Badge */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 backdrop-blur-md rounded-full px-8 py-4 text-white text-base font-bold border-2 border-orange-300 shadow-2xl shadow-orange-500/40">
            <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce shadow-lg"></div>
            <MapPin size={18} />
            <span className="text-shadow">Kuala Lumpur • Authentic Pakistani Cuisine Since 2015</span>
          </div>
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

        {/* Highlighted CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up-delayed">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Primary CTA - Extra Highlighted */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
              <Button
                variant="brass"
                size="xl"
                onClick={onOrderNow}
                className="relative group overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white font-black px-10 py-5 text-xl border-4 border-white/30 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 rounded-2xl"
              >
                <span className="relative z-10 flex items-center gap-3 drop-shadow-lg">
                  <span className="text-2xl animate-bounce">🍽️</span>
                  Order Authentic Pakistani Food
                </span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform relative z-10 drop-shadow-lg" size={28} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>
            
            {/* Secondary CTA - Also Enhanced */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Button
                variant="outline"
                size="xl"
                className="relative group bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-4 border-orange-300/60 text-orange-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:border-white backdrop-blur-sm transition-all duration-300 px-10 py-5 text-xl font-bold transform hover:scale-105 rounded-2xl shadow-xl"
              >
                <span className="flex items-center gap-3 drop-shadow-lg">
                  <span className="text-2xl">📞</span>
                  Reserve Table
                </span>
              </Button>
            </div>
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