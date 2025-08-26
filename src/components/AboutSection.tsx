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
  return <section className="py-20 relative overflow-hidden">
      {/* Colorful Background with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-light via-ivory-warm to-brass-light opacity-90"></div>
      <div className="absolute inset-0 pattern-overlay opacity-30"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-brass-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Story Section */}
          <div className="space-y-8">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-brass-accent to-copper-accent rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-accent to-emerald-deep rounded-full opacity-40 animate-float delay-500"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-deep to-emerald-accent rounded-full shadow-glow">
                  <ChefHat className="text-white" size={36} />
                </div>
                <div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-deep via-brass-accent to-copper-accent bg-clip-text text-transparent">
                    Our Story
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-brass-accent to-copper-accent rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="space-y-8 text-lg leading-relaxed">
                {/* Love Story Opening */}
                <div className="card-premium p-6 bg-gradient-to-br from-white/80 to-ivory-soft/80 border border-brass-accent/30 shadow-glow">
                  <div className="flex items-start gap-4">
                    <Heart className="text-copper-accent mt-1 flex-shrink-0" size={24} fill="currentColor" />
                    <div>
                      <p className="font-bold text-emerald-deep text-xl mb-3">
                        "A Love Letter to Pakistani Cuisine"
                      </p>
                      <p className="text-foreground">
                        In the heart of bustling Lahore, 1952, our story began not just with recipes, 
                        but with <span className="font-semibold text-copper-accent">pure love</span> - love for tradition, 
                        love for family, and an unshakeable love for the art of Pakistani cooking.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Heritage Story */}
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-brass-accent via-emerald-accent to-copper-accent">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-brass-accent rounded-full"></div>
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-emerald-accent rounded-full"></div>
                  <div className="absolute -left-2 top-16 w-3 h-3 bg-copper-accent rounded-full"></div>
                  
                  <p className="font-medium text-emerald-deep mb-3 text-xl">
                    "Four generations of secret recipes, one passionate dream..."
                  </p>
                  <p className="text-foreground">
                    Bibi Khadija's weathered hands taught us that <span className="font-bold text-brass-accent">every grain of rice has a soul</span>, 
                    every spice blend tells a story of monsoons and harvests, of celebration and comfort. 
                    Today, we honor her legacy by bringing those same soul-stirring flavors to Malaysia.
                  </p>
                </div>
                
                {/* Passionate Promise */}
                <div className="bg-gradient-to-r from-emerald-deep/10 via-brass-accent/10 to-copper-accent/10 p-6 rounded-2xl border-2 border-gradient-to-r from-emerald-accent/20 via-brass-accent/20 to-copper-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-accent/5 via-transparent to-brass-accent/5"></div>
                  <div className="relative z-10">
                    <p className="text-xl font-bold text-emerald-deep mb-3">
                      💝 Our Promise to You
                    </p>
                    <p className="italic text-foreground leading-relaxed">
                      "When you dine with us, you're not just eating - you're experiencing decades of 
                      perfected artistry, tasting the <span className="font-bold text-copper-accent">warmth of Pakistani hospitality</span>, 
                      and becoming part of our extended family story."
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brass-accent to-copper-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                        MT
                      </div>
                      <div>
                        <p className="text-sm text-emerald-deep font-bold">Chef Muhammad Tariq</p>
                        <p className="text-xs text-muted-foreground">Head Chef & Guardian of Traditions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button variant="hero" size="lg" className="flex items-center gap-2 shadow-glow hover:shadow-glow-intense transition-all duration-300">
                  <ChefHat size={20} />
                  Meet Our Chef
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2 border-2 border-brass-accent text-brass-accent hover:bg-brass-accent hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                  Our Journey
                </Button>
              </div>
            </div>
          </div>

          {/* Colorful Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {achievements.map((item, index) => {
              const gradients = [
                'from-emerald-deep to-emerald-accent',
                'from-brass-accent to-copper-accent', 
                'from-copper-accent to-brass-deep',
                'from-emerald-accent to-brass-accent'
              ];
              const bgGradients = [
                'from-emerald-deep/5 via-emerald-accent/10 to-emerald-light/15',
                'from-brass-accent/5 via-copper-accent/10 to-brass-light/15',
                'from-copper-accent/5 via-brass-accent/10 to-copper-light/15', 
                'from-emerald-accent/5 via-brass-accent/10 to-emerald-light/15'
              ];
              
              return (
                <div key={index} className={`card-premium p-8 text-center group hover:shadow-glow hover:-translate-y-2 transition-all duration-500 border-2 border-gradient-to-r ${gradients[index]} relative overflow-hidden bg-gradient-to-br ${bgGradients[index]}`}>
                  {/* Animated Background Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow group-hover:scale-125 transition-all duration-500 shadow-lg`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${gradients[index]} text-white text-sm px-3 py-2 rounded-full font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                      {item.highlight}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-emerald-deep mb-3 group-hover:text-emerald-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-foreground leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br opacity-20 rounded-full group-hover:animate-bounce"></div>
                  <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br opacity-15 rounded-full group-hover:animate-pulse"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Customer Testimonials */}
        <div className="mt-20 pt-16 border-t-4 border-gradient-to-r from-brass-accent via-emerald-accent to-copper-accent relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-brass-light/10 via-transparent to-emerald-light/10 rounded-3xl"></div>
          
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <Star className="text-brass-accent" size={32} fill="currentColor" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-deep via-brass-accent to-copper-accent bg-clip-text text-transparent">
                Hearts We've Touched
              </h3>
              <Star className="text-copper-accent" size={32} fill="currentColor" />
            </div>
            <p className="text-xl text-muted-foreground font-medium">
              Authentic flavors that create <span className="text-emerald-deep font-bold">lasting memories</span> 💫
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {testimonials.map((testimonial, index) => {
              const cardGradients = [
                'from-emerald-deep/5 via-emerald-accent/10 to-brass-accent/5',
                'from-brass-accent/5 via-copper-accent/10 to-emerald-accent/5'
              ];
              const avatarGradients = [
                'from-emerald-deep to-emerald-accent',
                'from-brass-accent to-copper-accent'
              ];
              
              return (
                <div key={index} className={`card-premium p-8 relative overflow-hidden group hover:shadow-glow hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br ${cardGradients[index]} border-2 border-gradient-to-r ${avatarGradients[index]}`}>
                  {/* Floating Hearts */}
                  <div className="absolute top-4 right-4 text-copper-accent/30 group-hover:text-copper-accent/60 transition-colors animate-pulse">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div className="absolute top-2 right-12 text-brass-accent/20 group-hover:text-brass-accent/40 transition-colors animate-pulse delay-300">
                    <Heart size={16} fill="currentColor" />
                  </div>
                  
                  {/* Quote Marks */}
                  <div className="text-6xl text-emerald-deep/20 font-serif absolute top-2 left-4">"</div>
                  
                  <div className="space-y-6 relative z-10 mt-4">
                    <p className="text-xl italic text-foreground leading-relaxed font-medium pl-8">
                      {testimonial.text}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${avatarGradients[index]} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-emerald-deep text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                          📍 {testimonial.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 justify-center pt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current drop-shadow-md" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-brass-accent/20 rounded-full animate-bounce delay-1000"></div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-accent/10 rounded-full blur-sm group-hover:bg-emerald-accent/20 transition-colors duration-500"></div>
                </div>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-emerald-deep font-bold mb-4">
              Ready to create your own unforgettable memory? 🌟
            </p>
            <Button variant="hero" size="lg" className="shadow-glow hover:shadow-glow-intense">
              Reserve Your Table Now
            </Button>
          </div>
        </div>

        {/* Chef Highlight */}
        
      </div>
    </section>;
};
export default AboutSection;