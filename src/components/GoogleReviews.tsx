import { useState, useEffect, useRef } from "react";
import { Star, Quote, MapPin, Verified, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
      location: "Kuala Lumpur",
      avatar_color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "SC",
      rating: 5,
      text: "Amazing flavors and generous portions. The BBQ platter was perfectly grilled and the spices were just right.",
      date: "1 week ago",
      verified: true,
      location: "Petaling Jaya",
      avatar_color: "from-pink-500 to-rose-600"
    },
    {
      id: 3,
      name: "Muhammad Ali",
      avatar: "MA",
      rating: 5,
      text: "Authentic Pakistani taste that reminds me of home. The karahi is exceptional and the naan bread is fresh!",
      date: "3 days ago",
      verified: true,
      location: "Shah Alam",
      avatar_color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      name: "Lisa Wong",
      avatar: "LW",
      rating: 5,
      text: "Excellent food quality and fast delivery. The chicken tikka masala is the best I've had in Malaysia!",
      date: "5 days ago",
      verified: true,
      location: "Subang Jaya",
      avatar_color: "from-yellow-500 to-orange-600"
    },
    {
      id: 5,
      name: "Hassan Ahmed",
      avatar: "HA",
      rating: 5,
      text: "Perfect blend of traditional and modern dining. Great atmosphere and the mutton biryani is outstanding!",
      date: "1 week ago",
      verified: true,
      location: "Ampang",
      avatar_color: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "Jennifer Lee",
      avatar: "JL",
      rating: 5,
      text: "The fish tikka biryani was incredible! Fresh ingredients, perfect spices, and excellent presentation.",
      date: "4 days ago",
      verified: true,
      location: "Mont Kiara",
      avatar_color: "from-teal-500 to-cyan-600"
    },
    {
      id: 7,
      name: "Omar Hassan",
      avatar: "OH",
      rating: 5,
      text: "Finally found authentic Pakistani food that tastes like my grandmother's cooking. The malai boti is a must-try!",
      date: "6 days ago",
      verified: true,
      location: "Bangsar",
      avatar_color: "from-red-500 to-pink-600"
    },
    {
      id: 8,
      name: "Priya Sharma",
      avatar: "PS",
      rating: 5,
      text: "Outstanding service and delicious food. The chicken qorma was rich and flavorful. Will definitely come back!",
      date: "1 week ago",
      verified: true,
      location: "KLCC",
      avatar_color: "from-purple-500 to-violet-600"
    },
    {
      id: 9,
      name: "David Tan",
      avatar: "DT",
      rating: 5,
      text: "Best Pakistani restaurant experience! The atmosphere is cozy and the BBQ is grilled to perfection.",
      date: "3 days ago",
      verified: true,
      location: "Damansara",
      avatar_color: "from-orange-500 to-red-600"
    },
    {
      id: 10,
      name: "Fatima Al-Zahra",
      avatar: "FA",
      rating: 5,
      text: "Exceptional food quality and authentic taste. The butter chicken reminds me of the best restaurants in Lahore!",
      date: "2 days ago",
      verified: true,
      location: "Cheras",
      avatar_color: "from-emerald-500 to-teal-600"
    },
    {
      id: 11,
      name: "Michael Chen",
      avatar: "MC",
      rating: 5,
      text: "Impressed by the quality and authenticity. The mixed BBQ platter is perfect for sharing with friends!",
      date: "5 days ago",
      verified: true,
      location: "Cyberjaya",
      avatar_color: "from-cyan-500 to-blue-600"
    },
    {
      id: 12,
      name: "Aisha Khan",
      avatar: "AK",
      rating: 5,
      text: "The most authentic Pakistani cuisine in Malaysia! Every dish is prepared with love and traditional recipes.",
      date: "1 week ago",
      verified: true,
      location: "Gombak",
      avatar_color: "from-violet-500 to-purple-600"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full p-0.5">
              <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                  alt="Google" 
                  className="w-5 h-5"
                />
              </div>
            </div>
            <span className="text-muted-foreground font-semibold text-lg">Google Reviews</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Customer Stories
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real experiences from our valued customers across Malaysia
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center group">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">4.9</div>
            <div className="text-muted-foreground font-medium">Average Rating</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">2,347+</div>
            </div>
            <div className="text-muted-foreground font-medium">Happy Customers</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">98%</div>
            </div>
            <div className="text-muted-foreground font-medium">Recommend Us</div>
          </div>
        </div>

        {/* 3D Carousel Reviews */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Carousel 
            setApi={setApi}
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="review-card-3d group">
                    <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu perspective-1000">
                      {/* Card Inner */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${review.avatar_color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {review.avatar}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground text-lg">{review.name}</h4>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{review.location}</span>
                            </div>
                          </div>
                          {review.verified && (
                            <div className="flex flex-col items-center gap-1">
                              <Verified className="w-6 h-6 text-blue-500" />
                              <span className="text-xs text-blue-500 font-medium">Verified</span>
                            </div>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                            {review.date}
                          </span>
                        </div>

                        {/* Quote */}
                        <div className="relative mb-6">
                          <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/20" />
                          <p className="text-muted-foreground leading-relaxed pl-6 text-base">
                            "{review.text}"
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-6 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full p-0.5">
                              <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                                <img 
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                                  alt="Google" 
                                  className="w-3 h-3"
                                />
                              </div>
                            </div>
                            <span className="text-xs text-muted-foreground font-medium">Google Reviews</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Review #{index + 1}
                          </div>
                        </div>
                      </div>

                      {/* 3D Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <CarouselPrevious className="relative static translate-y-0 w-12 h-12 rounded-2xl bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" />
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground font-medium">
                  {current} of {count}
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === (current - 1) % 5 ? 'bg-primary scale-125' : 'bg-primary/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <CarouselNext className="relative static translate-y-0 w-12 h-12 rounded-2xl bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" />
            </div>
          </Carousel>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center max-w-4xl mx-auto mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 border border-border/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Share Your Experience
            </h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers and help others discover the authentic taste of Pakistan
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={() => window.open('https://g.page/r/khanjee-reviews', '_blank')}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Star className="w-5 h-5 mr-3" />
                Write a Review
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.open('https://maps.google.com/?q=Khanjee+Restaurant+KL', '_blank')}
                className="border-2 border-primary/20 hover:bg-primary/5 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-3" />
                Find Our Location
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;