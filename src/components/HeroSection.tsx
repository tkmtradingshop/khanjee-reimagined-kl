import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Star, Users, Award } from "lucide-react";
import heroBiryaniPremium from "@/assets/hero-biryani-premium.jpg";
import heroBBQPremium from "@/assets/hero-bbq-premium.jpg";
import heroChapliKebab from "@/assets/hero-chapli-kebab.jpg";
const HeroSection = ({
  onOrderNow
}: {
  onOrderNow: () => void;
}) => {
  const heroImages = [{
    src: heroBiryaniPremium,
    title: "Signature Biryani",
    subtitle: "Aromatic saffron rice with premium cuts",
    stats: "⭐ 4.9 Rating • 🍽️ Most Ordered"
  }, {
    src: heroBBQPremium,
    title: "Artisan BBQ",
    subtitle: "Charcoal-grilled perfection with ancient spices",
    stats: "🔥 Chef's Special • 👨‍🍳 Award Winning"
  }, {
    src: heroChapliKebab,
    title: "Chapli Kebab",
    subtitle: "Authentic Peshawar-style flat kebabs with traditional spices",
    stats: "🥩 House Specialty • 🌶️ Perfect Spice Level"
  }];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img src={heroImages[currentImage].src} alt="Khanjee Restaurant" className="w-full h-full object-cover transition-all duration-1000" />
          {/* Futuristic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/90 via-emerald-deep/70 to-spice-red/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent"></div>
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full geometric-pattern"></div>
          </div>

          {/* Subtle Scan Lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brass-gold/5 to-transparent"></div>
        </div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-brass-gold/40 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-ivory-warm/30 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-spice-red/30 rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Live Stats Bar */}
        <div className="mb-6 flex flex-wrap justify-center gap-4 animate-fade-in">
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-spice-red/20 to-brass-gold/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-xs font-medium border border-spice-red/30 shadow-glow">
            <Star size={14} />
            4.9 ★ (2.3k Reviews)
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-deep/20 to-emerald-light/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-xs font-medium border border-emerald-light/30 shadow-glow">
            <Award size={14} />
            KL's #1 Pakistani Restaurant
          </div>
        </div>

        {/* Location Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/30 to-emerald-light/30 backdrop-blur-md rounded-full px-6 py-3 text-ivory-warm text-sm font-medium border border-brass-gold/40 shadow-glow-intense">
          <div className="w-2 h-2 bg-brass-gold rounded-full animate-pulse"></div>
          <MapPin size={16} />
          Kuala Lumpur • 3 Premium Locations
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

        {/* Subtitle with Stats */}
        <div className="mb-8 animate-fade-in-delayed">
          <p className="text-xl md:text-2xl lg:text-3xl text-ivory-soft mb-4 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            {heroImages[currentImage].subtitle}
          </p>
          <div className="text-sm md:text-base text-brass-light bg-emerald-deep/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block border border-brass-gold/20">
            {heroImages[currentImage].stats}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up-delayed">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="brass" size="xl" onClick={onOrderNow} className="group relative overflow-hidden bg-gradient-to-r from-brass-gold to-brass-light hover:from-brass-light hover:to-brass-gold transition-all duration-300 shadow-glow hover:shadow-glow-intense transform hover:scale-105 px-8 py-4 text-lg font-semibold border-2 border-brass-gold/30">
              <span className="relative z-10">🍽️ Order Now</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform relative z-10" size={24} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            
            <Button variant="outline" size="xl" className="group bg-emerald-deep/20 border-2 border-ivory-warm/30 text-ivory-warm hover:bg-ivory-warm hover:text-emerald-deep backdrop-blur-sm transition-all duration-300 px-8 py-4 text-lg font-semibold">
              <span>📞 Reserve Table</span>
            </Button>
          </div>
        </div>

        {/* Live Info Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-3 text-ivory-soft bg-emerald-deep/30 backdrop-blur-sm rounded-full px-6 py-3 border border-ivory-warm/20">
            <div className="relative">
              <Clock size={18} />
              <div className="absolute inset-0 bg-brass-gold/20 rounded-full animate-ping"></div>
            </div>
            <span className="text-base font-medium">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 text-ivory-soft bg-spice-red/20 backdrop-blur-sm rounded-full px-6 py-3 border border-spice-red/30">
            <div className="w-2 h-2 bg-spice-red rounded-full animate-pulse"></div>
            <span className="text-base font-medium">🚚 Free Delivery • 25-35 min</span>
          </div>
        </div>

        {/* Futuristic Image Indicators */}
        <div className="flex justify-center gap-4">
          {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentImage(index)} className={`group relative transition-all duration-500 ${index === currentImage ? 'scale-110' : 'hover:scale-105'}`}>
              <div className={`w-12 h-1 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-gradient-to-r from-brass-gold to-brass-light shadow-glow' : 'bg-ivory-warm/20 group-hover:bg-ivory-warm/40'}`}></div>
              {index === currentImage && <div className="absolute inset-0 w-12 h-1 rounded-full bg-gradient-to-r from-brass-gold to-brass-light animate-pulse"></div>}
            </button>)}
        </div>
      </div>

      {/* Side Accent Lines */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-brass-gold to-transparent animate-pulse"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-brass-gold to-transparent animate-pulse"></div>
    </section>;
};
export default HeroSection;