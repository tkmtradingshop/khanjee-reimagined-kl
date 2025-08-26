import { useState, useEffect } from "react";
import { Gift, Star, Crown, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
const LoyaltyRewards = () => {
  const [points, setPoints] = useState(850);
  const [tier, setTier] = useState("Gold");
  const [nextReward, setNextReward] = useState(150);
  const rewards = [{
    id: 1,
    name: "Free Biryani",
    points: 1000,
    description: "Get a complimentary chicken biryani",
    icon: "🍛",
    available: points >= 1000
  }, {
    id: 2,
    name: "10% Off Next Order",
    points: 500,
    description: "Save on your next purchase",
    icon: "💰",
    available: points >= 500
  }, {
    id: 3,
    name: "Free Delivery",
    points: 300,
    description: "No delivery charges on next order",
    icon: "🚚",
    available: points >= 300
  }, {
    id: 4,
    name: "BBQ Platter",
    points: 1500,
    description: "Premium mixed grill platter",
    icon: "🔥",
    available: points >= 1500
  }];
  const tiers = [{
    name: "Silver",
    min: 0,
    color: "text-gray-400",
    bgColor: "bg-gray-100"
  }, {
    name: "Gold",
    min: 500,
    color: "text-brass-gold",
    bgColor: "bg-brass-gold/10"
  }, {
    name: "Platinum",
    min: 1500,
    color: "text-emerald-light",
    bgColor: "bg-emerald-light/10"
  }, {
    name: "Diamond",
    min: 3000,
    color: "text-spice-red",
    bgColor: "bg-spice-red/10"
  }];
  useEffect(() => {
    const currentTier = tiers.reverse().find(t => points >= t.min);
    if (currentTier) {
      setTier(currentTier.name);
    }
  }, [points]);
  const progressToNext = () => {
    const currentTierIndex = tiers.findIndex(t => t.name === tier);
    if (currentTierIndex < tiers.length - 1) {
      const nextTier = tiers[currentTierIndex + 1];
      const progress = (points - tiers[currentTierIndex].min) / (nextTier.min - tiers[currentTierIndex].min) * 100;
      return Math.min(progress, 100);
    }
    return 100;
  };
  return;
};
export default LoyaltyRewards;