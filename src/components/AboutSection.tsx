import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Clock } from "lucide-react";
const AboutSection = () => {
  const achievements = [{
    icon: Award,
    title: "Award Winning",
    description: "Best Pakistani Restaurant KL 2023"
  }, {
    icon: Heart,
    title: "Made with Love",
    description: "Traditional family recipes passed down generations"
  }, {
    icon: Users,
    title: "Community Favorite",
    description: "Serving the Malaysian-Pakistani community since 2015"
  }, {
    icon: Clock,
    title: "Fresh Daily",
    description: "All dishes prepared fresh with premium ingredients"
  }];
  return <section className="py-16 bg-gradient-to-br from-ivory-warm to-ivory-soft">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h2 className="text-4xl font-bold text-emerald-deep mb-6 cultural-accent">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Born from a passion for authentic Pakistani cuisine, Khanjee Restaurant 
                brings the rich flavors of Lahore, Karachi, and Islamabad to the heart 
                of Kuala Lumpur.
              </p>
              <p>
                Our master chefs, trained in traditional Pakistani cooking methods, 
                use only the finest spices imported directly from Pakistan. Every dish 
                tells a story of heritage, culture, and the warmth of Pakistani hospitality.
              </p>
              <p>
                From our signature biryanis to perfectly grilled kebabs, we've created 
                a dining experience that celebrates the diversity and richness of 
                Pakistani culinary traditions.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Our Chef's Special
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => <div key={index} className="card-premium p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-deep/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-deep/20 transition-colors">
                  <item.icon className="text-emerald-deep" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-emerald-deep mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>

        {/* Chef Highlight */}
        
      </div>
    </section>;
};
export default AboutSection;