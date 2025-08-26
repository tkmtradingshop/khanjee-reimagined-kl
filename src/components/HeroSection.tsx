import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Star, Users, Award, Brain, Zap, Code } from "lucide-react";
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
    title: "AI-CRAFTED BIRYANI",
    subtitle: "Neural networks analyzed 10,000+ recipes to perfect this saffron-loaded masterpiece that hits different every single time 🤖",
    stats: "⭐ 4.9/5 • 🧠 AI-Optimized Recipe"
  }, {
    src: heroBBQPremium,
    title: "SMART BBQ ALGORITHMS",
    subtitle: "Machine learning meets centuries-old Pakistani BBQ techniques for the ultimate charcoal-grilled perfection",
    stats: "💻 AI-Enhanced • 🔥 Award-Winning Code"
  }, {
    src: heroChapliKebab,
    title: "DIGITAL CHAPLI MASTERY",
    subtitle: "Our AI chef analyzed traditional Peshawar techniques and elevated them to create the perfect crispy, juicy experience",
    stats: "🤖 Tech-Enhanced • 🌶️ Algorithm Perfect"
  }];

  const [currentImage, setCurrentImage] = useState(0);
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
      // Add glitch effect occasionally
      if (Math.random() > 0.7) {
        setGlitchText(true);
        setTimeout(() => setGlitchText(false), 200);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ai-black via-ai-grey-dark to-ai-navy">
      {/* AI Grid Background */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30"></div>
      
      {/* Neural Network Overlay */}
      <div className="absolute inset-0 neural-network"></div>

      {/* Dynamic Background with Cyber Effects */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img 
            src={heroImages[currentImage].src} 
            alt="Khanjee AI Restaurant" 
            className="w-full h-full object-cover transition-all duration-1000 opacity-40" 
          />
          
          {/* Cyber Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-ai-black/90 via-ai-navy/80 to-ai-grey-dark/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ai-black via-transparent to-transparent"></div>
          
          {/* Digital Scan Lines */}
          <div className="absolute inset-0 ai-data-stream opacity-20"></div>
        </div>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-ai-cyan rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-ai-electric rounded-full opacity-60 animate-ping"></div>
      <div className="absolute bottom-1/4 left-20 w-4 h-4 border border-ai-cyan/50 rotate-45 animate-spin"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* AI Status Bar */}
        <div className="mb-4 flex flex-wrap justify-center gap-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 ai-hologram rounded-full px-3 py-1.5 text-ai-cyan text-xs font-mono border border-ai-cyan/30 ai-glow">
            <Brain size={12} className="animate-pulse" />
            AI SYSTEM ONLINE
          </div>
          <div className="inline-flex items-center gap-2 ai-hologram rounded-full px-3 py-1.5 text-ai-electric text-xs font-mono border border-ai-electric/30">
            <Star size={12} />
            4.9/5 ★ (2.3k+ Neural Reviews)
          </div>
          <div className="inline-flex items-center gap-2 ai-hologram rounded-full px-3 py-1.5 text-ai-grey-light text-xs font-mono border border-ai-grey-medium/30">
            <Award size={12} />
            KL'S #1 AI PAKISTANI RESTAURANT
          </div>
        </div>

        {/* Location Badge with Tech Elements */}
        <div className="mb-4 inline-flex items-center gap-2 ai-hologram rounded-full px-4 py-2 text-ai-grey-light text-xs font-mono border border-ai-cyan/40 ai-glow">
          <div className="w-2 h-2 bg-ai-electric rounded-full animate-pulse"></div>
          <MapPin size={14} />
          <Code size={12} className="opacity-60" />
          KUALA LUMPUR • 3 SMART LOCATIONS
        </div>

        {/* Main Heading with AI Glitch Effect */}
        <div className="mb-6 animate-fade-in-up">
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono mb-3 tracking-wider leading-tight ${
            glitchText ? 'animate-pulse' : ''
          }`}>
            <span className="text-transparent bg-gradient-to-r from-ai-cyan via-ai-electric to-ai-grey-light bg-clip-text ai-text-glow">
              KHANJEE
            </span>
            <span className="block text-sm font-light text-ai-grey-medium mt-2">
              [AI_RESTAURANT_v2.0]
            </span>
          </h1>
          <div className="relative">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-ai-cyan mb-2 tracking-wider font-mono ai-text-glow">
              {heroImages[currentImage].title}
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-ai-electric to-transparent"></div>
          </div>
        </div>

        {/* AI Description */}
        <div className="mb-6 animate-fade-in-delayed">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ai-grey-light mb-3 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            {heroImages[currentImage].subtitle}
          </p>
          <div className="text-xs sm:text-sm text-ai-electric ai-hologram rounded-full px-4 py-1.5 inline-block border border-ai-electric/20 font-mono">
            {heroImages[currentImage].stats}
          </div>
        </div>

        {/* Enhanced CTA Section with AI Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up-delayed">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={onOrderNow} 
              className="group relative overflow-hidden bg-gradient-to-r from-ai-cyan to-ai-electric hover:from-ai-electric hover:to-ai-cyan transition-all duration-300 ai-glow transform hover:scale-105 px-6 py-3 text-base font-mono font-semibold border border-ai-cyan/30 text-ai-black"
            >
              <Zap className="mr-2 group-hover:animate-spin" size={16} />
              <span className="relative z-10">INITIALIZE ORDER 🤖</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform relative z-10 ml-1" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            
            <Button 
              variant="outline" 
              className="group ai-hologram border-2 border-ai-cyan/50 text-ai-cyan hover:bg-ai-cyan/10 hover:text-ai-electric backdrop-blur-sm transition-all duration-300 px-6 py-3 text-base font-mono font-semibold"
            >
              <Brain className="mr-2 group-hover:animate-pulse" size={16} />
              <span>RESERVE SLOT 📡</span>
            </Button>
          </div>
        </div>

        {/* AI System Info */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <div className="flex items-center gap-2 text-ai-grey-light ai-hologram rounded-full px-4 py-2 border border-ai-cyan/20 font-mono text-sm">
            <div className="relative">
              <Clock size={16} />
              <div className="absolute inset-0 bg-ai-electric/30 rounded-full animate-ping"></div>
            </div>
            <span>SYSTEM ACTIVE: 11:30 AM - 11 PM</span>
          </div>
          
          <div className="flex items-center gap-2 text-ai-grey-light ai-hologram rounded-full px-4 py-2 border border-ai-electric/30 font-mono text-sm">
            <div className="w-2 h-2 bg-ai-electric rounded-full animate-pulse"></div>
            <span>🚀 AI DELIVERY • 25-35 MIN</span>
          </div>
        </div>

        {/* Futuristic Image Indicators */}
        <div className="flex justify-center gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`group relative transition-all duration-500 ${
                index === currentImage ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-gradient-to-r from-ai-cyan to-ai-electric ai-glow' 
                  : 'bg-ai-grey-medium/40 group-hover:bg-ai-grey-medium/60'
              }`}></div>
              {index === currentImage && (
                <div className="absolute inset-0 w-16 h-1 rounded-full bg-gradient-to-r from-ai-cyan to-ai-electric animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Side Digital Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-ai-cyan to-transparent animate-pulse"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-ai-electric to-transparent animate-pulse"></div>
      
      {/* Corner Tech Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-ai-cyan/30"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-ai-cyan/30"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-ai-cyan/30"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-ai-cyan/30"></div>
    </section>
  );
};

export default HeroSection;