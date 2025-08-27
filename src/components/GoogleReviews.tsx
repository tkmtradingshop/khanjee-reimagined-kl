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
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Striking Header */}
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Google Badge with Animation */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full p-0.5 animate-spin-slow">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                    alt="Google" 
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-foreground font-bold text-sm md:text-base tracking-wide">VERIFIED REVIEWS</span>
          </div>
          
          {/* Hero Title with Gradient */}
          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
              What People
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.5s' }}>
              Are Saying
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Real stories from customers who experienced our authentic Pakistani cuisine
          </p>
        </div>

        {/* Bold Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="stats-card group cursor-pointer">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">4.9</div>
                <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="stats-card group cursor-pointer">
            <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/25">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black text-secondary mb-2">2.3K+</div>
                <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="stats-card group cursor-pointer">
            <div className="relative bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black text-accent mb-2">98%</div>
                <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">Recommend Us</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra-Modern Carousel Reviews */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Carousel 
            setApi={setApi}
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-3 md:-ml-6">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-3 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="review-card-ultra group cursor-pointer h-full">
                    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-xl border-2 border-transparent rounded-3xl p-6 md:p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-700 transform-gpu hover:scale-[1.02] hover:-translate-y-2 review-glow">
                      {/* Dynamic Border Animation */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                      <div className="absolute inset-0.5 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-xl"></div>
                      
                      {/* Card Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Header with Enhanced Avatar */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="relative">
                            <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${review.avatar_color} rounded-2xl flex items-center justify-center text-white font-black text-base md:text-lg shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                              {review.avatar}
                            </div>
                            {/* Status Indicator */}
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card flex items-center justify-center animate-pulse">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-black text-foreground text-lg md:text-xl truncate mb-1">{review.name}</h4>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              <span className="text-sm font-medium truncate">{review.location}</span>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }} />
                              ))}
                            </div>
                          </div>
                          
                          {review.verified && (
                            <div className="flex flex-col items-center gap-1 flex-shrink-0">
                              <Verified className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-xs text-blue-500 font-bold uppercase tracking-wider">Verified</span>
                            </div>
                          )}
                        </div>

                        {/* Quote with Modern Styling */}
                        <div className="relative flex-1 mb-6">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            <Quote className="w-4 h-4 text-white" />
                          </div>
                          <blockquote className="text-muted-foreground leading-relaxed text-base md:text-lg font-medium pl-8 relative">
                            <span className="absolute left-0 top-0 text-4xl text-primary/20 font-black">"</span>
                            {review.text}
                            <span className="absolute bottom-0 right-0 text-4xl text-primary/20 font-black">"</span>
                          </blockquote>
                        </div>

                        {/* Enhanced Footer */}
                        <div className="flex items-center justify-between pt-6 border-t-2 border-gradient-to-r from-transparent via-border to-transparent">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-6 h-6 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full p-0.5 animate-spin-slow">
                                <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                                  <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                                    alt="Google" 
                                    className="w-3 h-3"
                                  />
                                </div>
                              </div>
                            </div>
                            <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Google Review</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded-full font-medium">
                              {review.date}
                            </span>
                            <div className="w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
                            <span className="text-xs text-muted-foreground font-medium">
                              #{index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Ultra-Modern Navigation */}
            <div className="flex items-center justify-center gap-6 mt-16">
              <CarouselPrevious className="relative static translate-y-0 w-14 h-14 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50" />
              
              <div className="flex items-center gap-4 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-3">
                <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider">
                  {current} of {count}
                </span>
                <div className="w-px h-6 bg-border"></div>
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-500 rounded-full ${
                        i === (current - 1) % 5 
                          ? 'w-8 h-3 bg-gradient-to-r from-primary to-secondary' 
                          : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <CarouselNext className="relative static translate-y-0 w-14 h-14 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 border-2 border-secondary/30 hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-secondary/50" />
            </div>
          </Carousel>
        </div>

        {/* Revolutionary CTA Section */}
        <div className={`mt-20 md:mt-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl md:rounded-[3rem] p-8 md:p-16 border-2 border-transparent overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl md:rounded-[3rem]"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rounded-3xl md:rounded-[3rem] blur-xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                  </div>
                  <span className="text-muted-foreground font-bold text-sm uppercase tracking-wider">Join 2.3K+ Happy Customers</span>
                </div>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x">
                  Share Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.5s' }}>
                  Experience
                </span>
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                Help others discover the authentic taste of Pakistan and become part of our growing community
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  onClick={() => window.open('https://g.page/r/khanjee-reviews', '_blank')}
                  className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-10 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden min-w-[200px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <Star className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Write Review</span>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => window.open('https://maps.google.com/?q=Khanjee+Restaurant+KL', '_blank')}
                  className="group relative border-3 border-primary/30 hover:border-primary/60 bg-card/50 backdrop-blur-md hover:bg-primary/5 px-10 py-6 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 overflow-hidden min-w-[200px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span>Find Location</span>
                  </div>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-border/30">
                <div className="flex items-center justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full p-0.5">
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                        alt="Google" 
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">Google Verified</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Verified className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-semibold text-muted-foreground">100% Authentic</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">Active Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;