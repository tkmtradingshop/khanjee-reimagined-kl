import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock } from "lucide-react";
import heroBiryani from "@/assets/hero-biryani.jpg";
import heroBBQ from "@/assets/hero-bbq.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const HeroSection = ({ onOrderNow }: { onOrderNow: () => void }) => {
  const heroImages = [
    {
      src: heroBiryani,
      title: "Authentic Biryani",
      subtitle: "Aromatic basmati rice with tender meat",
    },
    {
      src: heroBBQ,
      title: "Premium BBQ",
      subtitle: "Grilled to perfection with traditional spices",
    },
    {
      src: restaurantInterior,
      title: "Premium Dining",
      subtitle: "Experience Pakistani hospitality",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={heroImages[currentImage].src}
            alt="Khanjee Restaurant"
            className="w-full h-full object-cover transition-all duration-1000 scale-105 animate-slow-zoom"
          />
          {/* Futuristic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/90 via-emerald-deep/70 to-spice-red/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent"></div>
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full geometric-pattern animate-pulse"></div>
          </div>

          {/* Holographic Scan Lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brass-gold/10 to-transparent animate-scan"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-brass-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-ivory-warm rounded-full animate-float-delayed opacity-40"></div>
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-spice-red/60 rounded-full animate-float-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-emerald-light/20 backdrop-blur-md rounded-full px-6 py-3 text-brass-light text-sm font-medium border border-brass-gold/30 shadow-glow animate-fade-in">
          <div className="w-2 h-2 bg-brass-gold rounded-full animate-pulse"></div>
          <MapPin size={16} />
          Kuala Lumpur's Finest Pakistani Cuisine
        </div>

        {/* Main Heading with Futuristic Typography */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-br from-ivory-warm via-brass-gold to-ivory-soft bg-clip-text mb-4 tracking-tight leading-none">
            KHANJEE
          </h1>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-brass-light mb-2 tracking-wide">
              {heroImages[currentImage].title}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-brass-gold to-transparent"></div>
          </div>
        </div>

        {/* Subtitle with Glow Effect */}
        <p className="text-xl md:text-2xl lg:text-3xl text-ivory-soft mb-10 max-w-3xl mx-auto leading-relaxed font-light tracking-wide animate-fade-in-delayed">
          {heroImages[currentImage].subtitle}
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up-delayed">
          <Button
            variant="brass"
            size="xl"
            onClick={onOrderNow}
            className="group relative overflow-hidden bg-gradient-to-r from-brass-gold to-brass-light hover:from-brass-light hover:to-brass-gold transition-all duration-300 shadow-glow hover:shadow-glow-intense transform hover:scale-105 px-8 py-4 text-lg font-semibold"
          >
            <span className="relative z-10">Order Now</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform relative z-10" size={24} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Button>
          
          <div className="flex items-center gap-3 text-ivory-soft bg-emerald-deep/30 backdrop-blur-sm rounded-full px-6 py-3 border border-ivory-warm/20">
            <div className="relative">
              <Clock size={18} />
              <div className="absolute inset-0 bg-brass-gold/20 rounded-full animate-ping"></div>
            </div>
            <span className="text-base font-medium">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
        </div>

        {/* Futuristic Image Indicators */}
        <div className="flex justify-center gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`group relative transition-all duration-500 ${
                index === currentImage
                  ? 'scale-110'
                  : 'hover:scale-105'
              }`}
            >
              <div className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-gradient-to-r from-brass-gold to-brass-light shadow-glow'
                  : 'bg-ivory-warm/20 group-hover:bg-ivory-warm/40'
              }`}></div>
              {index === currentImage && (
                <div className="absolute inset-0 w-12 h-1 rounded-full bg-gradient-to-r from-brass-gold to-brass-light animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Side Accent Lines */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-brass-gold to-transparent animate-pulse"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-brass-gold to-transparent animate-pulse"></div>
    </section>
  );
};

export default HeroSection;