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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={heroImages[currentImage].src}
            alt="Khanjee Restaurant"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          {/* Dark Green Overlay with Golden Accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-emerald-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-emerald-800/50"></div>
          
          {/* Golden Accent Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251,191,36,0.2) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(251,191,36,0.15) 0%, transparent 50%)`
            }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Stats Bar */}
        <div className="mb-6 flex flex-wrap justify-center gap-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-800/60 backdrop-blur-md rounded-full px-4 py-2 text-amber-100 text-sm font-medium border border-amber-400/30">
            <Users size={16} className="text-amber-400" />
            127 Active Orders
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-800/60 backdrop-blur-md rounded-full px-4 py-2 text-amber-100 text-sm font-medium border border-amber-400/30">
            <Star size={16} className="text-amber-400 fill-amber-400" />
            4.9 ★ (2.3k Reviews)
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-800/60 backdrop-blur-md rounded-full px-4 py-2 text-amber-100 text-sm font-medium border border-amber-400/30">
            <Award size={16} className="text-amber-400" />
            KL's #1 Pakistani Restaurant
          </div>
        </div>

        {/* Location Badge */}
        <div className="mb-8 relative">
          <div className="relative inline-flex items-center gap-3 bg-emerald-700/70 backdrop-blur-md rounded-full px-6 py-3 text-amber-100 text-base font-medium border border-amber-400/40">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <MapPin size={16} className="text-amber-400" />
            <span>Kuala Lumpur • 3 Premium Locations</span>
          </div>
        </div>

        {/* Main Brand Heading */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-400 bg-clip-text mb-4 tracking-tight leading-none drop-shadow-lg">
            KHANJEE
          </h1>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-amber-100 mb-2 tracking-wide">
              {heroImages[currentImage].title}
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 animate-fade-in-delayed">
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            {heroImages[currentImage].subtitle}
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium">
              🔥 Chef's Special
            </span>
            <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium">
              🏆 Award Winning
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up-delayed">
          <Button
            onClick={onOrderNow}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="flex items-center gap-2">
              🍽️ Order Now
              <ChevronRight size={20} />
            </span>
          </Button>
          
          <Button
            variant="outline"
            className="border-2 border-gray-300/60 text-gray-200 hover:bg-white/10 hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300"
          >
            🪑 Reserve Table
          </Button>
        </div>

        {/* Info Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-3 text-gray-200 bg-emerald-800/50 backdrop-blur-sm rounded-full px-5 py-2 border border-gray-400/20">
            <Clock size={18} className="text-amber-400" />
            <span className="text-sm font-medium">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-200 bg-emerald-800/50 backdrop-blur-sm rounded-full px-5 py-2 border border-gray-400/20">
            <Truck size={18} className="text-amber-400" />
            <span className="text-sm font-medium">🚗 Free Delivery • 25-35 min</span>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-amber-400 scale-110'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;