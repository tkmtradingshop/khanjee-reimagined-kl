import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Star, Users, Award, Truck } from "lucide-react";
import heroBiryaniPremium from "@/assets/hero-chicken-biryani-authentic.jpg";
import heroBBQPremium from "@/assets/hero-pakistani-bbq-platter.jpg";
import heroChapliKebab from "@/assets/hero-mutton-lahori-karahi.jpg";

const HeroSection = ({ onOrderNow }: { onOrderNow: () => void }) => {
  const heroImages = [
    {
      src: heroBiryaniPremium,
      title: "Artisan BBQ",
      subtitle: "Charcoal-grilled perfection with ancient spices",
      stats: "🔥 Chef's Special • 🏆 Award Winning",
    },
    {
      src: heroBBQPremium,
      title: "Authentic Karahi",
      subtitle: "Traditional copper vessel cooking with premium cuts",
      stats: "👑 Family Recipe • 🌶️ Signature Spices",
    },
    {
      src: heroChapliKebab,
      title: "Royal Biryani",
      subtitle: "Saffron-infused basmati with tender meat layers",
      stats: "🍛 Heritage Recipe • ⭐ Most Loved",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={heroImages[currentImage].src}
            alt="Khanjee Restaurant"
            className="w-full h-full object-cover transition-all duration-1000 opacity-40"
          />
          {/* Soft Neutral Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-gray-100/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/60 via-transparent to-white/40"></div>
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px), 
                                radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px)`
            }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Clean Stats Bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 text-gray-700 text-sm font-medium border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            127 Active Orders
          </div>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 text-gray-700 text-sm font-medium border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            4.9 (2.3k Reviews)
          </div>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 text-gray-700 text-sm font-medium border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
            <Award size={14} className="text-orange-500" />
            KL's #1 Pakistani
          </div>
        </div>

        {/* Location Badge */}
        <div className="mb-10 relative">
          <div className="relative inline-flex items-center gap-2 bg-gray-900/5 backdrop-blur-sm rounded-xl px-6 py-3 text-gray-600 text-base font-medium border border-gray-200/30">
            <MapPin size={16} className="text-gray-500" />
            <span>Kuala Lumpur • 3 Premium Locations</span>
          </div>
        </div>

        {/* Main Brand Heading */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 tracking-tight leading-none">
            KHANJEE
          </h1>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 mb-3 tracking-wide">
              {heroImages[currentImage].title}
            </h2>
            <div className="w-20 h-0.5 bg-gray-400 mx-auto"></div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-fade-in">
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
            {heroImages[currentImage].subtitle}
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <span className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
              🔥 Chef's Special
            </span>
            <span className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
              🏆 Award Winning
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button
            onClick={onOrderNow}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-3">
              Order Now
              <ChevronRight size={20} />
            </span>
          </Button>
          
          <Button
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            Reserve Table
          </Button>
        </div>

        {/* Info Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-3 text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 shadow-sm">
            <Clock size={16} className="text-gray-500" />
            <span className="text-sm font-medium">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 shadow-sm">
            <Truck size={16} className="text-gray-500" />
            <span className="text-sm font-medium">Free Delivery • 25-35 min</span>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="flex justify-center gap-3">
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
                  ? 'bg-gray-900'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;