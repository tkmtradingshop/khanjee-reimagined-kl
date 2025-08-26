import { useState, useEffect } from "react";
import { Star, Quote, MapPin, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ahmad Rahman",
      avatar: "AR",
      rating: 5,
      text: "Best Pakistani food in KL! The biryani is absolutely authentic and the service is exceptional. Highly recommended!",
      date: "2 days ago",
      verified: true,
      featured: true,
      location: "Kuala Lumpur"
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "SC",
      rating: 5,
      text: "Amazing flavors and generous portions. The BBQ platter was perfectly grilled and the spices were just right.",
      date: "1 week ago",
      verified: true,
      featured: false,
      location: "Petaling Jaya"
    },
    {
      id: 3,
      name: "Muhammad Ali",
      avatar: "MA",
      rating: 5,
      text: "Authentic Pakistani taste that reminds me of home. The karahi is exceptional and the naan bread is fresh!",
      date: "3 days ago",
      verified: true,
      featured: true,
      location: "Shah Alam"
    },
    {
      id: 4,
      name: "Lisa Wong",
      avatar: "LW",
      rating: 5,
      text: "Excellent food quality and fast delivery. The chicken tikka masala is the best I've had in Malaysia!",
      date: "5 days ago",
      verified: true,
      featured: false,
      location: "Subang Jaya"
    },
    {
      id: 5,
      name: "Hassan Ahmed",
      avatar: "HA",
      rating: 5,
      text: "Perfect blend of traditional and modern dining. Great atmosphere and the mutton biryani is outstanding!",
      date: "1 week ago",
      verified: true,
      featured: true,
      location: "Ampang"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredReviews = reviews.filter(review => review.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
              alt="Google" 
              className="w-6 h-6"
            />
            <span className="text-muted-foreground font-medium">Google Reviews</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic experiences from verified customers who chose Khanjee Restaurant
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">2,347+</div>
            <div className="text-sm text-muted-foreground">Total Reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Recommend Us</div>
          </div>
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredReviews.map((review, index) => (
            <div 
              key={review.id}
              className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {review.location}
                  </div>
                </div>
                {review.verified && (
                  <Verified className="w-5 h-5 text-blue-500" />
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-muted-foreground/30" />
                <p className="text-muted-foreground leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                    alt="Google" 
                    className="w-4 h-4"
                  />
                  <span className="text-xs text-muted-foreground">Google Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Happy Customers
          </h3>
          <p className="text-muted-foreground mb-8">
            Share your experience and help others discover authentic Pakistani cuisine
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => window.open('https://g.page/r/khanjee-reviews', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Star className="w-4 h-4 mr-2" />
              Leave a Review
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('https://maps.google.com/?q=Khanjee+Restaurant+KL', '_blank')}
              className="border-border hover:bg-accent px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Find Us on Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;