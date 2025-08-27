import { Button } from "@/components/ui/button";
import { Crown, Gift, Star, Zap, Users, Trophy, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

const VipBenefitsSection = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const benefits = [
    {
      id: "loyalty",
      icon: Star,
      title: "Loyalty Rewards",
      subtitle: "Earn with every order",
      description: "Get 1 point for every RM spent. 100 points = RM10 off your next order!",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      id: "vip",
      icon: Crown,
      title: "VIP Membership",
      subtitle: "Exclusive perks await",
      description: "Join our VIP club for priority seating, special discounts, and birthday treats!",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      id: "deals",
      icon: Gift,
      title: "Weekly Specials",
      subtitle: "Fresh deals every week",
      description: "Enjoy 20% off selected dishes every Tuesday and free dessert on Fridays!",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: "express",
      icon: Zap,
      title: "Express Pickup",
      subtitle: "Skip the wait",
      description: "VIP members get dedicated pickup counter. Order ready in 15 minutes or less!",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    }
  ];

  const stats = [
    { number: "5,000+", label: "VIP Members", icon: Users },
    { number: "500+", label: "Rewards Redeemed Monthly", icon: Trophy },
    { number: "25%", label: "Average Savings", icon: Heart }
  ];

  const joinVipClub = () => {
    const message = encodeURIComponent("Hi! I'd like to join the Khanjee VIP Club and learn about the benefits.");
    window.open(`https://wa.me/60123456789?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Crown className="w-6 h-6" />
            <span className="font-bold text-lg">Exclusive Customer Benefits</span>
            <Sparkles className="w-6 h-6" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            More Than Just Great Food
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Exceptional Rewards!
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-medium">
            Join thousands of happy customers enjoying exclusive perks, rewards, and special treatment. 
            Every visit gets better with our customer loyalty program!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`relative p-6 rounded-2xl border border-border/50 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden ${
                  isHovered === benefit.id ? 'scale-105 -translate-y-2' : ''
                }`}
                onMouseEnter={() => setIsHovered(benefit.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className={`w-8 h-8 ${benefit.textColor}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground/80 mb-3">
                    {benefit.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-border/20 shadow-xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">Join Our Growing Community</h3>
            <p className="text-muted-foreground">See why customers love our rewards program</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute top-8 right-12 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute bottom-6 left-12 w-6 h-6 border-2 border-white rotate-45"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10 text-white">
              <Crown className="w-16 h-16 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Unlock Your Rewards?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join our VIP club today and start earning points with your first order. 
                <strong> First-time members get 50 bonus points!</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={joinVipClub}
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Crown className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Join VIP Club Now
                  <Sparkles className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform duration-300" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Learn More Benefits
                </Button>
              </div>

              <div className="mt-8 text-sm text-white/80">
                <p>✨ No signup fees • Instant rewards • Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipBenefitsSection;