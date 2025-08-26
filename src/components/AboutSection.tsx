import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Clock, Star, MapPin, Calendar, TrendingUp, Quote, Play, ChefHat } from "lucide-react";
import chefFamilyPortrait from "@/assets/chef-family-portrait.jpg";
import heritageKitchen from "@/assets/heritage-kitchen.jpg";
const AboutSection = () => {
  const achievements = [{
    icon: Award,
    number: "#1",
    title: "Pakistani Restaurant",
    description: "In Kuala Lumpur for 3 consecutive years",
    color: "text-brass-gold"
  }, {
    icon: Users,
    number: "50K+",
    title: "Happy Families Served",
    description: "Building community one meal at a time",
    color: "text-emerald-light"
  }, {
    icon: Clock,
    number: "65+",
    title: "Years of Combined Experience",
    description: "Three generations of culinary mastery",
    color: "text-spice-red"
  }, {
    icon: Star,
    number: "4.9★",
    title: "Customer Rating",
    description: "Based on 2,347+ verified reviews",
    color: "text-brass-gold"
  }];
  const storyHighlights = [{
    year: "1958",
    title: "The Beginning",
    description: "Grandmother Fatima's recipes in Lahore",
    icon: "👵🏻"
  }, {
    year: "1995",
    title: "Master Training",
    description: "Chef Amjad trained in Pakistan's finest hotels",
    icon: "🏨"
  }, {
    year: "2015",
    title: "Malaysian Dream",
    description: "First Khanjee restaurant opens in KL",
    icon: "🇲🇾"
  }, {
    year: "2024",
    title: "Legacy Continues",
    description: "3 locations, 50,000+ satisfied customers",
    icon: "🏆"
  }];
  return <section className="relative py-20 bg-gradient-to-br from-emerald-deep/10 via-brass-gold/5 to-spice-red/10 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-brass-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-emerald-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Story Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-emerald-light/20 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-spice-red animate-pulse" />
            <span className="text-brass-gold font-semibold">Our Heritage Story</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 bg-gradient-to-r from-emerald-deep via-brass-gold to-spice-red bg-clip-text text-transparent">
            Three Generations of Authentic Flavors
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From our grandmother's kitchen in Lahore to Malaysia's heart - discover how passion, 
            tradition, and love created KL's most beloved Pakistani restaurant.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-8">
            {/* Family Legacy */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-spice-red to-brass-gold rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">A Mother's Promise</h3>
                  <p className="text-muted-foreground">The story that started it all</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed border-l-4 border-brass-gold pl-6">
                "My grandmother Fatima made me promise to never let our family recipes disappear. 
                Today, every dish at Khanjee carries her love, her techniques, and her blessing. 
                When you taste our food, you taste 65 years of Pakistani culinary heritage."
              </blockquote>
              
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-deep to-emerald-light rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Chef Amjad Khan</p>
                  <p className="text-sm text-muted-foreground">Founder & Head Chef</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-emerald-deep/10 to-brass-gold/10 rounded-2xl p-8 border border-emerald-light/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-brass-gold" />
                Why 50,000+ Malaysians Choose Khanjee
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-light rounded-full"></div>
                  <span className="text-muted-foreground">Authentic family recipes since 1958</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brass-gold rounded-full"></div>
                  <span className="text-muted-foreground">Fresh spices imported from Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-spice-red rounded-full"></div>
                  <span className="text-muted-foreground">Halal certified & family-friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-light rounded-full"></div>
                  <span className="text-muted-foreground">No compromises on quality or taste</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-brass-gold to-brass-light text-emerald-deep hover:from-brass-light hover:to-brass-gold font-bold px-8 py-4 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Our Story (2 min)
              </Button>
              <Button variant="outline" className="border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Visit Our Kitchen
              </Button>
            </div>
          </div>

          {/* Visual Story Timeline */}
          <div className="space-y-8">
            {/* Family Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-2xl">
                <img src={chefFamilyPortrait} alt="Chef Family" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">Chef Amjad & Son</p>
                  <p className="text-white/80 text-sm">Continuing the legacy</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img src={heritageKitchen} alt="Heritage Kitchen" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brass-gold/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">1958 Kitchen</p>
                  <p className="text-white/80 text-sm">Where it all began</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-brass-gold" />
                Our Journey
              </h3>
              
              <div className="space-y-6">
                {storyHighlights.map((item, index) => <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brass-gold/20 to-emerald-light/20 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="border-l-2 border-brass-gold/30 pl-4 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-brass-gold bg-brass-gold/10 px-2 py-1 rounded">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        {/* Enhanced Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => <div key={index} className="relative group bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brass-gold/20 via-emerald-light/20 to-spice-red/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br from-brass-gold/20 to-emerald-light/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`${item.color}`} size={28} />
                </div>
                <div className={`text-3xl font-bold ${item.color} mb-2`}>
                  {item.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* Customer Success Stories */}
        
      </div>
    </section>;
};
export default AboutSection;