import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  TrendingUp, 
  Zap, 
  Star, 
  Shield, 
  Award,
  Timer,
  Gift,
  Heart,
  ThumbsUp
} from "lucide-react";

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-gradient-to-r from-spice-red to-copper-accent text-white p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="text-yellow-300" size={20} />
          <span className="font-bold text-lg">LIMITED TIME OFFER</span>
          <Zap className="text-yellow-300" size={20} />
        </div>
        <p className="text-lg">
          🔥 <span className="font-bold">20% OFF</span> on orders above RM 80 • 
          <span className="font-bold"> FREE DELIVERY</span> on all orders!
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Timer size={16} />
          <span className="font-mono font-bold">
            {String(hours).padStart(2, '0')}:
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </span>
          <span className="text-sm">remaining</span>
        </div>
      </div>
    </div>
  );
};

export const SocialProofBanner = () => {
  const [currentProof, setCurrentProof] = useState(0);
  
  const proofs = [
    { icon: Users, text: "Sarah J. just ordered Chicken Biryani from Khanjee 2", time: "2 mins ago" },
    { icon: Heart, text: "Ahmed K. rated us ⭐⭐⭐⭐⭐ 'Best Pakistani food in KL!'", time: "5 mins ago" },
    { icon: TrendingUp, text: "127 orders placed today from your area", time: "Just now" },
    { icon: ThumbsUp, text: "Fatima R. reordered Mutton Karahi for the 3rd time", time: "8 mins ago" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProof(prev => (prev + 1) % proofs.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const proof = proofs[currentProof];

  return (
    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 mb-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-100 rounded-full">
          <proof.icon size={16} className="text-emerald-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-emerald-800">{proof.text}</p>
          <p className="text-xs text-emerald-600">{proof.time}</p>
        </div>
      </div>
    </div>
  );
};

export const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      <Badge variant="outline" className="bg-white/80 border-emerald-200 text-emerald-800 px-4 py-2">
        <Shield size={16} className="mr-2" />
        Halal Certified
      </Badge>
      <Badge variant="outline" className="bg-white/80 border-brass-gold/50 text-brass-gold px-4 py-2">
        <Award size={16} className="mr-2" />
        KL's #1 Pakistani
      </Badge>
      <Badge variant="outline" className="bg-white/80 border-emerald-200 text-emerald-800 px-4 py-2">
        <Star size={16} className="mr-2 fill-current" />
        4.9★ Rated
      </Badge>
      <Badge variant="outline" className="bg-white/80 border-emerald-200 text-emerald-800 px-4 py-2">
        <Users size={16} className="mr-2" />
        10,000+ Happy Customers
      </Badge>
    </div>
  );
};

export const ScarcityIndicator = ({ dishName, remaining }: { dishName: string; remaining: number }) => {
  if (remaining > 5) return null;

  return (
    <div className="absolute top-2 left-2 z-10">
      <Badge variant="destructive" className="bg-spice-red/90 text-white animate-pulse">
        <Clock size={12} className="mr-1" />
        Only {remaining} left!
      </Badge>
    </div>
  );
};

export const PopularityBadge = ({ isPopular, isBestSeller }: { isPopular?: boolean; isBestSeller?: boolean }) => {
  if (!isPopular && !isBestSeller) return null;

  return (
    <div className="absolute top-2 right-2 z-10">
      {isBestSeller && (
        <Badge className="bg-brass-gold text-emerald-deep font-bold shadow-lg">
          🔥 Best Seller
        </Badge>
      )}
      {isPopular && !isBestSeller && (
        <Badge variant="secondary" className="bg-emerald-600 text-white">
          ⭐ Popular
        </Badge>
      )}
    </div>
  );
};

export const DeliveryPromise = () => {
  return (
    <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-600 rounded-full">
              <Clock className="text-white" size={16} />
            </div>
            <div>
              <p className="font-semibold text-emerald-800">30-Minute Guarantee</p>
              <p className="text-sm text-emerald-600">Hot, fresh food delivered on time or it's free!</p>
            </div>
          </div>
          <Badge className="bg-emerald-600 text-white">
            Guaranteed
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export const ReviewsPreview = () => {
  const reviews = [
    {
      name: "Priya S.",
      rating: 5,
      text: "Authentic Pakistani flavors! The biryani reminds me of home.",
      dish: "Chicken Biryani"
    },
    {
      name: "Abdullah M.",
      rating: 5,
      text: "Best karahi in Kuala Lumpur. Always fresh and perfectly spiced.",
      dish: "Mutton Karahi"
    },
    {
      name: "Lisa W.",
      rating: 5,
      text: "Incredible BBQ platter! The malai boti was absolutely divine.",
      dish: "BBQ Platter"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-center">What Our Customers Say</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <Card key={index} className="bg-white/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-brass-gold fill-brass-gold" />
                  ))}
                </div>
                <span className="text-sm font-medium">{review.name}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">"{review.text}"</p>
              <Badge variant="outline" className="text-xs">
                {review.dish}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const FreeDeliveryProgress = ({ currentAmount }: { currentAmount: number }) => {
  const freeDeliveryThreshold = 50;
  const remaining = Math.max(0, freeDeliveryThreshold - currentAmount);
  const progress = Math.min(100, (currentAmount / freeDeliveryThreshold) * 100);

  if (currentAmount >= freeDeliveryThreshold) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
        <div className="flex items-center gap-2 text-emerald-800">
          <Gift className="text-emerald-600" size={16} />
          <span className="font-semibold">🎉 You've earned FREE delivery!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brass-gold/10 border border-brass-gold/20 p-3 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Gift className="text-brass-gold" size={16} />
        <span className="font-semibold text-brass-gold">
          Add RM {remaining.toFixed(2)} more for FREE delivery!
        </span>
      </div>
      <div className="w-full bg-white rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-brass-gold to-copper-accent h-2 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default {
  UrgencyBanner,
  SocialProofBanner,
  TrustBadges,
  ScarcityIndicator,
  PopularityBadge,
  DeliveryPromise,
  ReviewsPreview,
  FreeDeliveryProgress
};