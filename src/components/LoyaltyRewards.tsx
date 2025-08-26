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
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Loyalty Rewards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Earn points with every order and unlock exclusive rewards
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Status */}
          <div className="bg-card rounded-xl p-6 mb-8 border shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Your Status</h3>
                <div className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium text-foreground">{tier} Member</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{points}</p>
                <p className="text-sm text-muted-foreground">Points</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress to next tier</span>
                <span className="text-muted-foreground">{progressToNext().toFixed(0)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressToNext()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Available Rewards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {rewards.map((reward) => (
              <div 
                key={reward.id}
                className={`bg-card rounded-xl p-6 border transition-all duration-200 ${
                  reward.available 
                    ? 'shadow-sm hover:shadow-md cursor-pointer' 
                    : 'opacity-60'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{reward.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{reward.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{reward.points} pts</span>
                      </div>
                      {reward.available && (
                        <Button size="sm" className="text-xs">
                          Redeem
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tier Information */}
          <div className="bg-card rounded-xl p-6 border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">Membership Tiers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tiers.map((tierInfo) => (
                <div 
                  key={tierInfo.name}
                  className={`text-center p-4 rounded-lg transition-all ${
                    tierInfo.name === tier 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-muted/30'
                  }`}
                >
                  <div className="mb-2">
                    {tierInfo.name === 'Silver' && <Gift className="h-6 w-6 mx-auto text-muted-foreground" />}
                    {tierInfo.name === 'Gold' && <Crown className="h-6 w-6 mx-auto text-primary" />}
                    {tierInfo.name === 'Platinum' && <Zap className="h-6 w-6 mx-auto text-emerald-600" />}
                    {tierInfo.name === 'Diamond' && <Trophy className="h-6 w-6 mx-auto text-red-600" />}
                  </div>
                  <h4 className={`font-medium mb-1 ${tierInfo.name === tier ? 'text-primary' : 'text-foreground'}`}>
                    {tierInfo.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{tierInfo.min}+ pts</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoyaltyRewards;