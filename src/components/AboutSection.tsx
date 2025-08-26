import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Clock, Star, MapPin, Calendar, TrendingUp, Quote, Play, ChefHat, ArrowRight } from "lucide-react";
import chefFamilyPortrait from "@/assets/chef-family-portrait.jpg";
import heritageKitchen from "@/assets/heritage-kitchen.jpg";

const AboutSection = () => {
  const journeyMilestones = [
    {
      year: "1958",
      title: "The Beginning",
      description: "Grandmother Fatima's secret recipes in Lahore",
      icon: "👵🏻",
      image: heritageKitchen,
      color: "from-spice-red to-brass-gold"
    },
    {
      year: "1995", 
      title: "Master Training",
      description: "Chef Amjad perfects the art in Pakistan's finest hotels",
      icon: "🏨",
      image: chefFamilyPortrait,
      color: "from-emerald-deep to-emerald-light"
    },
    {
      year: "2015",
      title: "Malaysian Dream",
      description: "First Khanjee opens in KL, bringing authentic flavors",
      icon: "🇲🇾",
      image: heritageKitchen,
      color: "from-brass-gold to-brass-light"
    },
    {
      year: "2024",
      title: "Legacy Thrives",
      description: "3 locations, 50,000+ families served, #1 Pakistani in KL",
      icon: "🏆",
      image: chefFamilyPortrait,
      color: "from-emerald-light to-spice-red"
    }
  ];

  const achievements = [
    { number: "#1", title: "Pakistani Restaurant in KL", icon: Award, color: "text-brass-gold" },
    { number: "50K+", title: "Happy Families Served", icon: Users, color: "text-emerald-light" },
    { number: "65+", title: "Years Heritage", icon: Clock, color: "text-spice-red" },
    { number: "4.9★", title: "Customer Rating", icon: Star, color: "text-brass-gold" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-deep/10 via-brass-gold/5 to-spice-red/10 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-brass-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-emerald-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Hero Story */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-emerald-light/20 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-spice-red animate-pulse" />
            <span className="text-brass-gold font-semibold">Our Heritage Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-emerald-deep via-brass-gold to-spice-red bg-clip-text text-transparent">
            Three Generations, One Promise
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            From Grandmother Fatima's kitchen in 1958 Lahore to becoming KL's #1 Pakistani restaurant - 
            every dish carries 65 years of authentic love and tradition.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {achievements.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-border/30 hover:scale-105 transition-all duration-300">
                <div className={`w-10 h-10 bg-gradient-to-br from-brass-gold/20 to-emerald-light/20 rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <item.icon className={`${item.color} w-5 h-5`} />
                </div>
                <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.number}</div>
                <p className="text-xs text-muted-foreground font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Journey Chart */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6 text-brass-gold" />
              Our Journey Through Time
            </h3>
            <p className="text-muted-foreground">Follow our family's culinary legacy across generations</p>
          </div>

          {/* Journey Chart - Interactive Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-spice-red via-brass-gold via-emerald-light to-brass-gold rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {journeyMilestones.map((milestone, index) => (
                <div key={index} className="group relative">
                  {/* Timeline Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-brass-gold rounded-full shadow-lg z-10 group-hover:scale-125 transition-all duration-300"></div>
                  
                  {/* Card */}
                  <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${index % 2 === 0 ? 'mt-16' : 'mb-16'}`}>
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${milestone.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg`}>
                      <span className="text-lg">{milestone.icon}</span>
                      {milestone.year}
                    </div>

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${milestone.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>

                    {/* Arrow for next step */}
                    {index < journeyMilestones.length - 1 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-brass-gold/50 group-hover:text-brass-gold group-hover:scale-125 transition-all duration-300" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder's Quote - Compact */}
        <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm rounded-3xl p-8 border border-brass-gold/30 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-spice-red to-brass-gold rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                "My grandmother Fatima made me promise to never let our family recipes disappear. 
                Today, every dish at Khanjee carries her love and blessing."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-deep to-emerald-light rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Chef Amjad Khan</p>
                  <p className="text-sm text-muted-foreground">Founder & Head Chef</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button className="bg-gradient-to-r from-brass-gold to-brass-light text-emerald-deep hover:from-brass-light hover:to-brass-gold font-bold px-6 py-3 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;