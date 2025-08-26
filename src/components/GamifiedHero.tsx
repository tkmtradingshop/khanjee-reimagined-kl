import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, MapPin, Star, Users, Award, TrendingUp, 
  Gift, Target, Flame, Crown, Zap, Trophy, Heart, 
  Clock, Play, RotateCcw, Sparkles, Medal, CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import hero images
import heroFishBiryani from "@/assets/hero-fish-biryani-royal.jpg";
import heroMixedBBQ from "@/assets/hero-mixed-bbq-sizzling.jpg";
import heroButterChicken from "@/assets/hero-butter-chicken-deluxe.jpg";

const GamifiedHero = ({ onOrderNow }: { onOrderNow: () => void }) => {
  const { toast } = useToast();
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentReward, setCurrentReward] = useState<string | null>(null);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [streak, setStreak] = useState(3);
  const [foodPersonality, setFoodPersonality] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [liveStats, setLiveStats] = useState({
    ordersToday: 1247,
    activeCooking: 23,
    happyCustomers: 2847
  });

  const heroImages = [
    {
      src: heroFishBiryani,
      title: "Royal Fish Biryani",
      subtitle: "Premium fish tikka with golden saffron rice",
    },
    {
      src: heroMixedBBQ,
      title: "Sizzling BBQ Platter", 
      subtitle: "Mixed grill perfection with authentic spices",
    },
    {
      src: heroButterChicken,
      title: "Butter Chicken Deluxe",
      subtitle: "Creamy tomato curry with tender chicken",
    }
  ];

  const dailyRewards = [
    "🎉 25% OFF Your Order",
    "🍮 Free Dessert", 
    "🚚 Free Delivery",
    "🔥 Double Points",
    "🥤 Free Drink",
    "🍛 Free Rice Upgrade",
    "💫 VIP Treatment",
    "⭐ Chef's Special Discount"
  ];

  const availableAchievements = [
    { id: "biryani_master", name: "Biryani Master", icon: "🍛", description: "Order 5 different biryanis" },
    { id: "spice_champion", name: "Spice Champion", icon: "🔥", description: "Handle the heat like a pro" },
    { id: "karahi_king", name: "Karahi King", icon: "👑", description: "Try all karahi varieties" },
    { id: "bbq_legend", name: "BBQ Legend", icon: "🥩", description: "Grill master achievement" },
    { id: "loyal_customer", name: "Loyal Customer", icon: "❤️", description: "10+ orders completed" },
    { id: "food_explorer", name: "Food Explorer", icon: "🗺️", description: "Try dishes from each region" }
  ];

  const personalityTypes = [
    { type: "Spice Warrior", desc: "You love the heat and bold flavors!", dishes: ["Chicken Karahi", "Mutton Shinwari"] },
    { type: "Comfort Seeker", desc: "Creamy, mild dishes are your comfort zone", dishes: ["Butter Chicken", "White Qorma"] },
    { type: "Biryani Enthusiast", desc: "Rice dishes are your passion!", dishes: ["Fish Biryani", "Mutton Biryani"] },
    { type: "Grill Master", desc: "BBQ and grilled items call to you", dishes: ["Mixed BBQ", "Chicken Tikka"] }
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ordersToday: prev.ordersToday + Math.floor(Math.random() * 3),
        activeCooking: Math.max(15, prev.activeCooking + Math.floor(Math.random() * 5) - 2),
        happyCustomers: prev.happyCustomers + Math.floor(Math.random() * 2)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const spinRoulette = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setCurrentReward(null);
    
    setTimeout(() => {
      const randomReward = dailyRewards[Math.floor(Math.random() * dailyRewards.length)];
      setCurrentReward(randomReward);
      setIsSpinning(false);
      
      toast({
        title: "🎉 Congratulations!",
        description: `You won: ${randomReward}`,
        duration: 5000,
      });
    }, 2000);
  };

  const unlockAchievement = (achievementId: string) => {
    if (!achievements.includes(achievementId)) {
      setAchievements(prev => [...prev, achievementId]);
      const achievement = availableAchievements.find(a => a.id === achievementId);
      if (achievement) {
        toast({
          title: "🏆 Achievement Unlocked!",
          description: `${achievement.icon} ${achievement.name}`,
          duration: 3000,
        });
      }
    }
  };

  const startFoodQuiz = () => {
    setShowQuiz(true);
    const randomPersonality = personalityTypes[Math.floor(Math.random() * personalityTypes.length)];
    
    setTimeout(() => {
      setFoodPersonality(randomPersonality.type);
      setShowQuiz(false);
      unlockAchievement("food_explorer");
      
      toast({
        title: "🎯 Food Personality Revealed!",
        description: `You're a ${randomPersonality.type}! ${randomPersonality.desc}`,
        duration: 5000,
      });
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-deep/20 via-brass-gold/10 to-spice-red/20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={heroImages[currentImage].src}
            alt="Khanjee Restaurant"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/90 via-emerald-deep/70 to-spice-red/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-brass-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-emerald-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-spice-red/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Live Activity Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-emerald-light/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-sm font-medium border border-brass-gold/30 shadow-glow">
            <div className="w-2 h-2 bg-emerald-light rounded-full animate-pulse"></div>
            <TrendingUp size={14} />
            {liveStats.ordersToday.toLocaleString()} bowls served today
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-spice-red/20 to-brass-gold/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-sm font-medium border border-spice-red/30 shadow-glow">
            <Flame size={14} />
            {liveStats.activeCooking} dishes cooking now
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-deep/20 to-emerald-light/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-sm font-medium border border-emerald-light/30 shadow-glow">
            <Heart size={14} />
            {liveStats.happyCustomers.toLocaleString()}+ happy customers
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Daily Roulette & Gamification */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-br from-ivory-warm via-brass-gold to-ivory-soft bg-clip-text mb-4 tracking-tight leading-none">
                KHANJEE
              </h1>
              <h2 className="text-2xl md:text-4xl font-light text-brass-light mb-4 tracking-wide">
                Food Adventure Awaits
              </h2>
              <p className="text-xl text-ivory-soft mb-6 max-w-2xl leading-relaxed">
                {heroImages[currentImage].subtitle}
              </p>
            </div>

            {/* Daily Roulette */}
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-glow">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-spice-red/20 to-brass-gold/20 rounded-full px-4 py-2 mb-4">
                  <Target className="w-5 h-5 text-spice-red" />
                  <span className="text-spice-red font-semibold">Daily Surprise Roulette</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">🎯 Spin for Today's Reward!</h3>
                <p className="text-muted-foreground">Every spin guarantees a prize!</p>
              </div>

              <div className="relative mb-6">
                <div className={`w-48 h-48 mx-auto rounded-full border-8 border-brass-gold bg-gradient-to-r from-emerald-deep via-brass-gold to-spice-red flex items-center justify-center transition-transform duration-2000 ${
                  isSpinning ? 'animate-spin' : ''
                }`}>
                  {currentReward ? (
                    <div className="text-center text-white">
                      <div className="text-3xl mb-2">🎉</div>
                      <div className="text-sm font-bold">{currentReward}</div>
                    </div>
                  ) : (
                    <div className="text-center text-white">
                      <Gift className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-bold">SPIN ME!</div>
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={spinRoulette}
                disabled={isSpinning}
                className="w-full bg-gradient-to-r from-spice-red to-brass-gold hover:from-brass-gold hover:to-spice-red text-white font-bold py-4 text-lg group"
              >
                {isSpinning ? (
                  <>
                    <RotateCcw className="w-5 h-5 mr-2 animate-spin" />
                    Spinning...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    {currentReward ? 'Spin Again Tomorrow!' : 'Spin for Daily Prize!'}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Achievement Dashboard */}
          <div className="space-y-6">
            {/* Streak Counter */}
            <div className="bg-gradient-to-r from-emerald-light/10 to-brass-gold/10 rounded-2xl p-6 border border-emerald-light/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Zap className="w-6 h-6 text-brass-gold" />
                  Order Streak
                </h3>
                <Badge variant="secondary" className="bg-brass-gold text-emerald-deep font-bold">
                  {streak} Days
                </Badge>
              </div>
              <Progress value={(streak / 7) * 100} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Order {7 - streak} more days for <strong>FREE DELIVERY FOREVER!</strong>
              </p>
            </div>

            {/* Food Personality Quiz */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-spice-red" />
                Food Personality
              </h3>
              
              {foodPersonality ? (
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-bold text-lg text-brass-gold mb-2">{foodPersonality}</h4>
                  <p className="text-sm text-muted-foreground">
                    {personalityTypes.find(p => p.type === foodPersonality)?.desc}
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Discover your Pakistani food personality!
                  </p>
                  <Button
                    onClick={startFoodQuiz}
                    variant="outline"
                    disabled={showQuiz}
                    className="border-spice-red text-spice-red hover:bg-spice-red hover:text-white"
                  >
                    {showQuiz ? (
                      <>
                        <Play className="w-4 h-4 mr-2 animate-pulse" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Take Quiz (30 sec)
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>

            {/* Achievements Grid */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-brass-gold" />
                Achievements ({achievements.length}/6)
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                {availableAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`text-center p-3 rounded-xl border transition-all ${
                      achievements.includes(achievement.id)
                        ? 'bg-brass-gold/10 border-brass-gold text-brass-gold'
                        : 'bg-muted/20 border-muted text-muted-foreground'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-medium">{achievement.name}</div>
                    {achievements.includes(achievement.id) && (
                      <CheckCircle className="w-4 h-4 mx-auto mt-1 text-emerald-light" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <Button
                onClick={onOrderNow}
                className="bg-gradient-to-r from-brass-gold to-brass-light text-emerald-deep hover:from-brass-light hover:to-brass-gold font-bold px-8 py-4 text-lg group"
              >
                <Crown className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Start Food Adventure
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-white"
                  onClick={() => unlockAchievement("food_explorer")}
                >
                  <Medal className="w-4 h-4 mr-2" />
                  View Journey Map
                </Button>
                <Button
                  variant="outline"
                  className="border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-emerald-deep"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
            <div className="text-3xl font-bold text-brass-gold flex items-center justify-center gap-2">
              <Clock className="w-8 h-8" />
              15min
            </div>
            <div className="text-sm text-muted-foreground">Avg Delivery</div>
          </div>
          <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
            <div className="text-3xl font-bold text-emerald-light flex items-center justify-center gap-2">
              <Star className="w-8 h-8 fill-current" />
              4.9
            </div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
          <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
            <div className="text-3xl font-bold text-spice-red flex items-center justify-center gap-2">
              <Award className="w-8 h-8" />
              #1
            </div>
            <div className="text-sm text-muted-foreground">Pakistani Restaurant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamifiedHero;