import { useState } from "react";
import { Mail, Phone, Gift, Crown, Star, ArrowRight, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const VipClubSignup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to save customer data
    setTimeout(() => {
      toast({
        title: "Welcome to VIP Club! 🎉",
        description: "Check your phone for your exclusive 25% OFF code!",
      });
      setEmail("");
      setPhone("");
      setBirthday("");
      setIsLoading(false);
    }, 1500);
  };

  const benefits = [
    {
      icon: <Gift className="w-6 h-6 text-spice-red" />,
      title: "25% OFF First Order",
      description: "Instant discount code via SMS"
    },
    {
      icon: <Crown className="w-6 h-6 text-brass-gold" />,
      title: "VIP Early Access",
      description: "New dishes & special menus first"
    },
    {
      icon: <Star className="w-6 h-6 text-emerald-light" />,
      title: "Birthday Surprise",
      description: "Free meal + dessert on your special day"
    },
    {
      icon: <Heart className="w-6 h-6 text-spice-red" />,
      title: "Exclusive Deals",
      description: "Member-only promotions & discounts"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-deep/5 via-brass-gold/5 to-spice-red/5 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-spice-red/20 rounded-full px-6 py-2 mb-4">
              <Crown className="w-5 h-5 text-brass-gold" />
              <span className="text-brass-gold font-semibold">VIP Club</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Exclusive VIP Club
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get instant access to exclusive deals, early menu previews, and special birthday treats!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Signup Form */}
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-spice-red to-brass-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Get 25% OFF Now!
                </h3>
                <p className="text-muted-foreground">
                  Sign up and receive your discount code instantly via SMS
                </p>
              </div>

              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="tel"
                      placeholder="+60 12-345-6789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Birthday (Optional)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Get a free meal on your birthday! 🎂
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-spice-red to-brass-gold hover:from-brass-gold hover:to-spice-red text-white font-semibold py-3 group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Joining VIP Club..."
                  ) : (
                    <>
                      Join VIP Club & Get 25% OFF
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By joining, you agree to receive promotional SMS & emails. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                VIP Member Benefits
              </h3>
              
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/70 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brass-gold/20 to-spice-red/20 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social Proof */}
              <div className="bg-gradient-to-r from-emerald-light/10 to-brass-gold/10 rounded-xl p-6 border border-emerald-light/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-brass-gold to-spice-red rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-white font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">2,847+ VIP Members</p>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-brass-gold text-brass-gold" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">4.9/5 satisfaction</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "The VIP deals are amazing! I save so much money and always get the best dishes first." - Sarah K.
                </p>
              </div>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="mt-12 bg-gradient-to-r from-spice-red to-brass-gold rounded-2xl p-6 text-center text-white">
            <h4 className="text-xl font-bold mb-2">⏰ Limited Time Offer!</h4>
            <p className="text-white/90">
              The 25% welcome discount is only available to the first 100 new VIP members this month.
              <br />
              <span className="font-semibold">Join now before it's too late!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipClubSignup;