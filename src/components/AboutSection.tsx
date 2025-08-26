import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Clock, Star, ChefHat, MapPin } from "lucide-react";
const AboutSection = () => {
  const achievements = [{
    icon: Award,
    title: "Award Winning",
    description: "Best Pakistani Restaurant KL 2023",
    highlight: "Gold Medal"
  }, {
    icon: Heart,
    title: "Made with Love",
    description: "Traditional family recipes passed down 4 generations",
    highlight: "Since 1952"
  }, {
    icon: Users,
    title: "Community Favorite", 
    description: "Over 50,000+ happy customers served",
    highlight: "4.9★ Rating"
  }, {
    icon: Clock,
    title: "Fresh Daily",
    description: "Ingredients sourced fresh every morning",
    highlight: "100% Fresh"
  }];

  const testimonials = [
    {
      text: "The most authentic Pakistani flavors I've tasted outside Pakistan!",
      author: "Ahmad Hassan",
      location: "Kuala Lumpur"
    },
    {
      text: "Every bite transports me back to my grandmother's kitchen in Lahore.",
      author: "Fatima Ali",
      location: "Petaling Jaya"
    }
  ];
  return <section className="py-16 bg-gradient-to-br from-ivory-warm to-ivory-soft">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ChefHat className="text-emerald-deep" size={32} />
                <h2 className="text-4xl font-bold text-emerald-deep cultural-accent">
                  Our Story
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <div className="relative pl-6 border-l-4 border-emerald-deep/30">
                  <p className="font-medium text-emerald-deep mb-2">
                    "It all started with my grandmother's secret spice blend..."
                  </p>
                  <p>
                    In 1952, our founder's grandmother began perfecting recipes in her small kitchen 
                    in Lahore. Today, we carry forward her legacy, bringing those same authentic 
                    flavors to Malaysia with the same passion and dedication.
                  </p>
                </div>
                
                <p>
                  <span className="font-semibold text-emerald-deep">Every spice tells a story.</span> 
                  Our master chefs hand-select premium ingredients, from fragrant basmati rice 
                  aged in traditional warehouses to spices sourced directly from the bustling 
                  markets of Karachi and Lahore.
                </p>
                
                <div className="bg-emerald-deep/5 p-4 rounded-lg border border-emerald-deep/20">
                  <p className="italic">
                    "We don't just serve food - we serve memories, traditions, and the 
                    warmth of Pakistani hospitality that makes every guest feel like family."
                  </p>
                  <p className="text-sm text-emerald-deep font-medium mt-2">
                    - Chef Muhammad Tariq, Head Chef & Co-Founder
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="hero" size="lg" className="flex items-center gap-2">
                  <ChefHat size={20} />
                  Meet Our Chef
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <MapPin size={20} />
                  Our Journey
                </Button>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="card-premium p-6 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-emerald-deep/10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-deep/10 to-emerald-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-deep/20 group-hover:to-emerald-deep/30 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="text-emerald-deep" size={28} />
                </div>
                
                <div className="relative">
                  <div className="absolute -top-2 -right-2 bg-emerald-deep text-white text-xs px-2 py-1 rounded-full font-bold">
                    {item.highlight}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-emerald-deep mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mt-16 pt-12 border-t border-emerald-deep/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-emerald-deep mb-4">
              What Our Customers Say
            </h3>
            <p className="text-muted-foreground">
              Authentic flavors that create lasting memories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 text-emerald-deep/20 group-hover:text-emerald-deep/40 transition-colors">
                  <Star size={24} fill="currentColor" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg italic text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-deep rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-deep">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Highlight */}
        
      </div>
    </section>;
};
export default AboutSection;