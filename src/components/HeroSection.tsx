import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Star, Users, Award, Truck, Flame } from "lucide-react";
import heroBBQ from "@/assets/hero-bbq.jpg";

const HeroSection = ({ onOrderNow }: { onOrderNow: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBBQ}
          alt="Premium Pakistani BBQ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Top Stats Badges */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center gap-2 text-white">
              <Users size={16} className="text-emerald-400" />
              <span className="font-medium text-sm">127 Active Orders</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center gap-2 text-white">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <span className="font-medium text-sm">4.9 ⭐ (2.3k Reviews)</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center gap-2 text-white">
              <Award size={16} className="text-amber-400" />
              <span className="font-medium text-sm">KL's #1 Pakistani Restaurant</span>
            </div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="mb-12 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center gap-2 text-white">
              <MapPin size={18} className="text-amber-400" />
              <span className="font-medium">Kuala Lumpur • 3 Premium Locations</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 mb-6 tracking-tight leading-none">
            KHANJEE
          </h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-amber-200 mb-4 tracking-wide">
            Artisan BBQ
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Charcoal-grilled perfection with ancient spices
          </p>
        </div>

        {/* Specialty Badges */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-400/20 backdrop-blur-md rounded-full px-6 py-3 border border-amber-400/30">
            <span className="text-amber-200 font-semibold flex items-center gap-2 text-sm">
              <Flame size={16} />
              Chef's Special
            </span>
          </div>
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-400/20 backdrop-blur-md rounded-full px-6 py-3 border border-emerald-400/30">
            <span className="text-emerald-200 font-semibold flex items-center gap-2 text-sm">
              <Award size={16} />
              Award Winning
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            onClick={onOrderNow}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/30 border border-amber-400/50"
          >
            <span className="flex items-center gap-3">
              Order Now
              <ChevronRight size={20} />
            </span>
          </Button>
          
          <Button
            variant="outline"
            className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 bg-white/5 backdrop-blur-md shadow-xl"
          >
            <span className="flex items-center gap-3">
              Reserve Table
            </span>
          </Button>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <Clock size={18} className="text-emerald-400" />
            <span className="text-white font-medium">Open Daily 11:30 AM - 11:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <Truck size={18} className="text-blue-400" />
            <span className="text-white font-medium">🍕 Free Delivery • 25-35 min</span>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
          <div className="w-12 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;