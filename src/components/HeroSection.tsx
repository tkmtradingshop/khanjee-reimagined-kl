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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImages[currentImage].src}
          alt="Khanjee Restaurant"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/80 via-emerald-deep/60 to-transparent"></div>
        <div className="absolute inset-0 pattern-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 bg-brass-gold/20 backdrop-blur-sm rounded-full px-4 py-2 text-brass-light text-sm font-medium">
          <MapPin size={16} />
          Kuala Lumpur's Finest Pakistani Cuisine
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-ivory-warm mb-6 cultural-accent">
          Khanjee
          <span className="block text-2xl md:text-3xl font-normal mt-2 text-brass-light">
            {heroImages[currentImage].title}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-ivory-soft mb-8 max-w-2xl mx-auto leading-relaxed">
          {heroImages[currentImage].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="brass"
            size="xl"
            onClick={onOrderNow}
            className="group"
          >
            Order Now
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          
          <div className="flex items-center gap-2 text-ivory-soft">
            <Clock size={16} />
            <span className="text-sm">Open Daily 11:30 AM - 11:00 PM</span>
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
                  ? 'bg-brass-gold'
                  : 'bg-ivory-warm/30 hover:bg-ivory-warm/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;