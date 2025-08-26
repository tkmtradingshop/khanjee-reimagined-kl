import { useState, useEffect } from "react";
import { Star, Quote, ThumbsUp, MapPin, Clock, Verified, TrendingUp, Users, Award, Sparkles, Heart } from "lucide-react";
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
    },
    {
      id: 6,
      name: "Jennifer Tan",
      avatar: "JT",
      rating: 5,
      text: "Love the ambiance and food quality. Staff is very friendly and accommodating. Will definitely come back!",
      date: "4 days ago",
      verified: true,
      featured: false,
      location: "Mont Kiara"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (reviews.length - 2));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredReviews = reviews.filter(review => review.featured);

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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-spice-red/20 px-6 py-3 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-brass-gold" />
              <span className="font-bold text-foreground">Featured Customer Stories</span>
              <Sparkles className="w-5 h-5 text-brass-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <div 
                key={review.id}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brass-gold via-emerald-light to-spice-red rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-border/30 shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Featured Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-brass-gold to-spice-red text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    ⭐ FEATURED
                  </div>

                  {/* Review Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-brass-gold via-emerald-light to-spice-red rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                        {review.avatar}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-light rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <Verified className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-foreground text-xl mb-1">{review.name}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{review.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-6 h-6 fill-brass-gold text-brass-gold animate-pulse" 
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </div>
                        <span className="bg-brass-gold/20 text-brass-gold text-xs font-bold px-3 py-1 rounded-full">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brass-gold/30" />
                    <p className="text-muted-foreground leading-relaxed pl-8 text-lg font-medium italic">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  {/* Review Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/20">
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                        alt="Google" 
                        className="w-5 h-5"
                      />
                      <span className="text-sm font-semibold text-emerald-light">Google Verified</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-5 h-5 text-brass-gold" />
                      <span className="text-sm font-bold text-brass-gold">Helpful</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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