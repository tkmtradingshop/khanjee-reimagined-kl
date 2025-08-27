import { useState, useEffect } from "react";
import { Star, Quote, ThumbsUp, MapPin, Clock, Verified, TrendingUp, Users, Award, Sparkles, Heart, ChevronLeft, ChevronRight } from "lucide-react";
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
      featured: true,
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
      featured: true,
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
    },
    {
      id: 6,
      name: "Jennifer Tan",
      avatar: "JT",
      rating: 5,
      text: "Love the ambiance and food quality. Staff is very friendly and accommodating. Will definitely come back!",
      date: "4 days ago",
      verified: true,
      featured: true,
      location: "Mont Kiara"
    },
    {
      id: 7,
      name: "Raj Patel",
      avatar: "RP",
      rating: 5,
      text: "Outstanding experience! The lamb curry was perfectly spiced and the hospitality was top-notch. A must-visit!",
      date: "1 day ago",
      verified: true,
      featured: true,
      location: "Bangsar"
    },
    {
      id: 8,
      name: "Fatimah Zahra",
      avatar: "FZ",
      rating: 5,
      text: "Feels like home! Authentic flavors and generous portions. The kulfi dessert was the perfect ending to our meal.",
      date: "3 days ago",
      verified: true,
      featured: true,
      location: "Wangsa Maju"
    },
    {
      id: 9,
      name: "David Kim",
      avatar: "DK",
      rating: 5,
      text: "First time trying Pakistani cuisine and I'm blown away! The staff guided us through the menu perfectly.",
      date: "5 days ago",
      verified: true,
      featured: true,
      location: "KLCC"
    },
    {
      id: 10,
      name: "Priya Sharma",
      avatar: "PS",
      rating: 5,
      text: "The biryani here is legendary! Perfect rice, tender meat, and incredible aroma. Worth every penny!",
      date: "2 weeks ago",
      verified: true,
      featured: true,
      location: "Cheras"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const featuredReviews = reviews.filter(review => review.featured);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, featuredReviews.length - itemsPerView);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const dragEnd = e.changedTouches[0].clientX;
    const dragDistance = dragStart - dragEnd;
    
    if (Math.abs(dragDistance) > 50) { // minimum drag distance
      if (dragDistance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    setIsDragging(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-emerald-deep/5 to-brass-gold/5 py-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-brass-gold/10 to-spice-red/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-emerald-light/10 to-brass-gold/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-br from-spice-red/5 to-emerald-deep/5 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header with Social Proof */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Floating Google Badge */}
          <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-2xl mb-8 border border-emerald-light/20 hover:scale-105 transition-all duration-300">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
              alt="Google" 
              className="w-8 h-8"
            />
            <span className="font-bold text-foreground text-lg">Google Reviews</span>
            <Verified className="w-6 h-6 text-blue-500 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-deep via-brass-gold to-spice-red bg-clip-text text-transparent">
              2,347+ Happy Customers
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-semibold text-muted-foreground">
              Can&apos;t Be Wrong!
            </span>
          </h2>

          {/* Mega Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-light/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 fill-brass-gold text-brass-gold animate-pulse" 
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
              <div className="text-4xl font-black text-brass-gold mb-1">4.9</div>
              <div className="text-sm font-semibold text-muted-foreground">Average Rating</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-light/20 hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-emerald-light mx-auto mb-3" />
              <div className="text-4xl font-black text-emerald-light mb-1">2,347</div>
              <div className="text-sm font-semibold text-muted-foreground">Total Reviews</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-light/20 hover:scale-105 transition-all duration-300">
              <ThumbsUp className="w-8 h-8 text-spice-red mx-auto mb-3" />
              <div className="text-4xl font-black text-spice-red mb-1">98%</div>
              <div className="text-sm font-semibold text-muted-foreground">Recommend Us</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-light/20 hover:scale-105 transition-all duration-300">
              <Award className="w-8 h-8 text-brass-gold mx-auto mb-3" />
              <div className="text-4xl font-black text-brass-gold mb-1">#1</div>
              <div className="text-sm font-semibold text-muted-foreground">In Malaysian Pakistani</div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-emerald-light/10 px-4 py-2 rounded-full">
              <Verified className="w-5 h-5 text-emerald-light" />
              <span className="font-semibold text-emerald-light text-sm">100% Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2 bg-brass-gold/10 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-brass-gold" />
              <span className="font-semibold text-brass-gold text-sm">10,000+ Served Monthly</span>
            </div>
            <div className="flex items-center gap-2 bg-spice-red/10 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-spice-red" />
              <span className="font-semibold text-spice-red text-sm">Family Favorite Since 2018</span>
            </div>
          </div>
        </div>

        {/* Featured Reviews Spotlight */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-spice-red/20 px-6 py-3 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-brass-gold" />
              <span className="font-bold text-foreground">Featured Customer Stories</span>
              <Sparkles className="w-5 h-5 text-brass-gold" />
            </div>
            <p className="text-muted-foreground text-sm">Swipe to see more reviews</p>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-brass-gold/20 flex items-center justify-center shadow-lg hover:bg-brass-gold hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            
            <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10">
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-brass-gold/20 flex items-center justify-center shadow-lg hover:bg-brass-gold hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Reviews Container */}
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  width: `${(featuredReviews.length / itemsPerView) * 100}%`
                }}
              >
                {featuredReviews.map((review, index) => (
                  <div 
                    key={review.id}
                    className="w-full md:w-1/3 px-3 flex-shrink-0"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="group relative h-full">
                      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-brass-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                        
                        {/* Review Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-brass-gold to-emerald-light rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                            {review.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-base mb-1 truncate">{review.name}</h4>
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                              <span className="text-xs text-muted-foreground truncate">{review.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className="w-4 h-4 fill-brass-gold text-brass-gold" 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-brass-gold font-medium bg-brass-gold/10 px-2 py-1 rounded">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Review Content */}
                        <div className="flex-1 mb-4">
                          <div className="relative">
                            <Quote className="absolute -top-2 -left-2 w-6 h-6 text-brass-gold/30" />
                            <p className="text-muted-foreground leading-relaxed text-sm pl-4">
                              "{review.text}"
                            </p>
                          </div>
                        </div>

                        {/* Review Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                              alt="Google" 
                              className="w-4 h-4"
                            />
                            <span className="text-xs font-medium text-emerald-light">Google Verified</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-brass-gold cursor-pointer hover:text-spice-red transition-colors">
                            <ThumbsUp className="w-3 h-3" />
                            <span>Helpful</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-brass-gold w-6' 
                      : 'bg-brass-gold/30 hover:bg-brass-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Conversion-Focused CTA Section */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/20 via-brass-gold/20 to-spice-red/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm rounded-3xl p-12 border border-brass-gold/30 shadow-2xl">
            <div className="text-center">
              {/* Attention-Grabbing Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-brass-gold to-spice-red rounded-full animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-brass-gold to-spice-red rounded-full flex items-center justify-center shadow-2xl">
                  <Star className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Ready to Join 
                <span className="bg-gradient-to-r from-emerald-deep to-brass-gold bg-clip-text text-transparent"> 2,347+ </span>
                Happy Customers?
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
                🔥 <strong>Limited Time:</strong> Experience the #1 rated Pakistani restaurant in Malaysia. 
                Join thousands who discovered authentic flavors that exceed expectations!
              </p>

              {/* Urgency Elements */}
              <div className="flex items-center justify-center gap-8 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2 text-emerald-light">
                  <div className="w-3 h-3 bg-emerald-light rounded-full animate-pulse"></div>
                  <span>🕒 Booking up fast</span>
                </div>
                <div className="flex items-center gap-2 text-spice-red">
                  <div className="w-3 h-3 bg-spice-red rounded-full animate-pulse"></div>
                  <span>🔥 Trending #1 in KL</span>
                </div>
                <div className="flex items-center gap-2 text-brass-gold">
                  <div className="w-3 h-3 bg-brass-gold rounded-full animate-pulse"></div>
                  <span>⭐ 4.9/5 satisfaction</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  onClick={() => window.open('https://g.page/r/khanjee-reviews', '_blank')}
                  className="bg-gradient-to-r from-brass-gold to-spice-red text-white hover:from-spice-red hover:to-brass-gold font-black px-10 py-6 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 group text-lg"
                >
                  <Star className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Share Your Experience on Google
                  <Sparkles className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform duration-300" />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => window.open('https://maps.google.com/?q=Khanjee+Restaurant+KL', '_blank')}
                  className="border-2 border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-white px-8 py-6 rounded-full font-bold transition-all duration-300 hover:scale-105 text-lg"
                >
                  <MapPin className="w-6 h-6 mr-3" />
                  Find Us on Google Maps
                </Button>
              </div>

              {/* Social Proof Counter */}
              <div className="mt-12 pt-8 border-t border-border/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-light mb-2">2,347+</div>
                    <div className="text-sm text-muted-foreground font-semibold">Verified Google Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-brass-gold mb-2">50+</div>
                    <div className="text-sm text-muted-foreground font-semibold">New Reviews This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-spice-red mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground font-semibold">Customer Support</div>
                  </div>
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