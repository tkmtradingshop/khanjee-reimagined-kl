import { useState, useEffect } from "react";
import { Gift, Star, Crown, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoyaltyRewards = () => {
  const [points, setPoints] = useState(850);
  const [tier, setTier] = useState("Gold");
  const [nextReward, setNextReward] = useState(150);

  const rewards = [
    {
      id: 1,
      name: "Free Biryani",
      points: 1000,
      description: "Get a complimentary chicken biryani",
      icon: "🍛",
      available: points >= 1000
    },
    {
      id: 2,
      name: "10% Off Next Order",
      points: 500,
      description: "Save on your next purchase",
      icon: "💰",
      available: points >= 500
    },
    {
      id: 3,
      name: "Free Delivery",
      points: 300,
      description: "No delivery charges on next order",
      icon: "🚚",
      available: points >= 300
    },
    {
      id: 4,
      name: "BBQ Platter",
      points: 1500,
      description: "Premium mixed grill platter",
      icon: "🔥",
      available: points >= 1500
    }
  ];

  const tiers = [
    { name: "Silver", min: 0, color: "text-gray-400", bgColor: "bg-gray-100" },
    { name: "Gold", min: 500, color: "text-brass-gold", bgColor: "bg-brass-gold/10" },
    { name: "Platinum", min: 1500, color: "text-emerald-light", bgColor: "bg-emerald-light/10" },
    { name: "Diamond", min: 3000, color: "text-spice-red", bgColor: "bg-spice-red/10" }
  ];

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
      const progress = ((points - tiers[currentTierIndex].min) / (nextTier.min - tiers[currentTierIndex].min)) * 100;
      return Math.min(progress, 100);
    }
    return 100;
  };

  return (
    <section className="bg-gradient-to-r from-emerald-deep/5 via-brass-gold/5 to-spice-red/5 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-emerald-light/20 rounded-full px-6 py-2 mb-4">
            <Crown className="w-5 h-5 text-brass-gold" />
            <span className="text-brass-gold font-semibold">Loyalty Rewards</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Earn Points, Get Rewards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every order earns you points. Redeem them for free food, discounts, and exclusive perks!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Current Status */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brass-gold to-brass-light rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-emerald-deep" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {points.toLocaleString()} Points
                </h3>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  tier === 'Gold' ? 'bg-brass-gold/10 text-brass-gold' :
                  tier === 'Platinum' ? 'bg-emerald-light/10 text-emerald-light' :
                  tier === 'Diamond' ? 'bg-spice-red/10 text-spice-red' :
                  'bg-muted text-muted-foreground'
                }`}>
                  <Crown className="w-4 h-4" />
                  {tier} Member
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Progress to next tier</span>
                <span className="text-sm font-medium text-brass-gold">{Math.round(progressToNext())}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-brass-gold to-brass-light h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressToNext()}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-brass-gold" />
              Earn 10 points for every RM1 spent
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-brass-gold" />
              Quick Rewards
            </h3>
            
            <div className="space-y-4">
              {rewards.slice(0, 3).map((reward) => (
                <div key={reward.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{reward.icon}</span>
                    <div>
                      <p className="font-medium text-foreground">{reward.name}</p>
                      <p className="text-sm text-muted-foreground">{reward.points} points</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    disabled={!reward.available}
                    className={reward.available ? 'bg-brass-gold hover:bg-brass-light text-emerald-deep' : ''}
                  >
                    {reward.available ? 'Redeem' : 'Locked'}
                  </Button>
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-emerald-deep to-emerald-light hover:from-emerald-light hover:to-emerald-deep">
              View All Rewards
            </Button>
          </div>
        </div>

        {/* Bonus Points Opportunities */}
        <div className="bg-gradient-to-r from-brass-gold/10 to-spice-red/10 rounded-2xl p-8 border border-brass-gold/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              🎯 Bonus Points Today!
            </h3>
            <p className="text-muted-foreground">
              Complete these actions to earn extra points
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-emerald-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-emerald-light" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Leave a Review</h4>
              <p className="text-sm text-muted-foreground mb-4">Get 100 bonus points</p>
              <Button size="sm" variant="outline" className="border-emerald-light text-emerald-light hover:bg-emerald-light hover:text-white">
                +100 Points
              </Button>
            </div>

            <div className="bg-card/50 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-brass-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-brass-gold" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Refer a Friend</h4>
              <p className="text-sm text-muted-foreground mb-4">Both get 200 points</p>
              <Button size="sm" variant="outline" className="border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-emerald-deep">
                +200 Points
              </Button>
            </div>

            <div className="bg-card/50 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-spice-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-spice-red" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Order Today</h4>
              <p className="text-sm text-muted-foreground mb-4">Double points until 9 PM</p>
              <Button size="sm" variant="outline" className="border-spice-red text-spice-red hover:bg-spice-red hover:text-white">
                2x Points
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyRewards;