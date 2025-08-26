import { useState, useEffect } from "react";
import { Star, Quote, ThumbsUp, MapPin, Clock, Verified, TrendingUp } from "lucide-react";
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
      verified: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "SC",
      rating: 5,
      text: "Amazing flavors and generous portions. The BBQ platter was perfectly grilled and the spices were just right.",
      date: "1 week ago",
      verified: true
    },
    {
      id: 3,
      name: "Muhammad Ali",
      avatar: "MA",
      rating: 5,
      text: "Authentic Pakistani taste that reminds me of home. The karahi is exceptional and the naan bread is fresh!",
      date: "3 days ago",
      verified: true
    },
    {
      id: 4,
      name: "Lisa Wong",
      avatar: "LW",
      rating: 5,
      text: "Excellent food quality and fast delivery. The chicken tikka masala is the best I've had in Malaysia!",
      date: "5 days ago",
      verified: true
    },
    {
      id: 5,
      name: "Hassan Ahmed",
      avatar: "HA",
      rating: 5,
      text: "Perfect blend of traditional and modern dining. Great atmosphere and the mutton biryani is outstanding!",
      date: "1 week ago",
      verified: true
    },
    {
      id: 6,
      name: "Jennifer Tan",
      avatar: "JT",
      rating: 5,
      text: "Love the ambiance and food quality. Staff is very friendly and accommodating. Will definitely come back!",
      date: "4 days ago",
      verified: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (reviews.length - 2));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  return (
    <section className="relative bg-gradient-to-br from-emerald-deep/10 via-brass-gold/5 to-spice-red/10 py-20 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brass-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-emerald-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-10 right-1/3 w-32 h-32 bg-spice-red/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          {/* Google Badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-elegant mb-6 border border-border/20">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
              alt="Google" 
              className="w-6 h-6"
            />
            <span className="font-semibold text-foreground">Google Reviews</span>
            <Verified className="w-5 h-5 text-blue-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-emerald-deep via-brass-gold to-spice-red bg-clip-text text-transparent">
            What Our Customers Say
          </h2>

          {/* Enhanced Rating Display */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-8 h-8 fill-brass-gold text-brass-gold animate-pulse" 
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <span className="text-4xl font-bold text-brass-gold ml-2">4.9</span>
              </div>
              <p className="text-muted-foreground font-medium">out of 5 stars</p>
            </div>
            
            <div className="h-16 w-px bg-border"></div>
            
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-emerald-light" />
                <span className="text-3xl font-bold text-foreground">2,347</span>
              </div>
              <p className="text-muted-foreground font-medium">verified reviews</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-emerald-light">
              <ThumbsUp className="w-5 h-5" />
              <span className="font-medium">98% Recommend</span>
            </div>
            <div className="flex items-center gap-2 text-brass-gold">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">#1 Pakistani Restaurant</span>
            </div>
            <div className="flex items-center gap-2 text-spice-red">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Fast Response</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - see what thousands of satisfied customers have to say about their authentic Pakistani dining experience!
          </p>
        </div>

        {/* Enhanced Reviews Carousel */}
        <div className="relative overflow-hidden mb-12">
          <div 
            className="flex transition-transform duration-1000 ease-in-out gap-8"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(reviews.length * 100) / 3}%`
            }}
          >
            {reviews.map((review, index) => (
              <div 
                key={review.id}
                className={`flex-shrink-0 w-full md:w-1/3 relative group ${
                  index === currentIndex + 1 ? 'md:scale-110 md:z-10' : 'md:scale-95'
                } transition-all duration-700`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brass-gold/20 via-emerald-light/20 to-spice-red/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 hover:border-brass-gold/30">
                  {/* Review Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-brass-gold via-emerald-light to-spice-red rounded-full flex items-center justify-center text-white font-bold text-lg shadow-elegant">
                        {review.avatar}
                      </div>
                      {review.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-light rounded-full flex items-center justify-center border-2 border-white shadow-soft">
                          <Verified className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-foreground text-lg">{review.name}</h4>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-5 h-5 fill-brass-gold text-brass-gold animate-pulse" 
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </div>
                        <span className="px-2 py-1 bg-brass-gold/10 text-brass-gold text-xs font-medium rounded-full">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-brass-gold/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6 text-base italic">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  {/* Enhanced Google Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-light/10 to-brass-gold/10 rounded-full">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                        alt="Google" 
                        className="w-4 h-4"
                      />
                      <span className="text-xs font-medium text-emerald-light">Verified Review</span>
                    </div>
                    <ThumbsUp className="w-5 h-5 text-brass-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {Array.from({ length: reviews.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-brass-gold scale-125 shadow-glow'
                  : 'bg-muted hover:bg-brass-gold/50 hover:scale-110'
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-brass-gold rounded-full animate-ping"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="bg-gradient-to-r from-emerald-deep/10 via-brass-gold/10 to-spice-red/10 rounded-3xl p-12 border border-brass-gold/20 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brass-gold to-spice-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Star className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Share Your Experience!
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Join over 2,347 satisfied customers who have shared their authentic Pakistani dining experience. 
              Your review helps us serve you better and helps others discover great food!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => window.open('https://g.page/r/khanjee-reviews', '_blank')}
                className="bg-gradient-to-r from-brass-gold to-brass-light text-emerald-deep hover:from-brass-light hover:to-brass-gold font-bold px-8 py-4 rounded-full shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
              >
                <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Leave a Google Review
                <Star className="w-5 h-5 ml-2 group-hover:-rotate-12 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.open('https://maps.google.com/?q=Khanjee+Restaurant+KL', '_blank')}
                className="border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-emerald-deep px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find Us on Google Maps
              </Button>
            </div>

            {/* Social Proof Footer */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-light rounded-full animate-pulse"></div>
                  <span>Real customers, real reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brass-gold rounded-full animate-pulse delay-500"></div>
                  <span>Google verified only</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spice-red rounded-full animate-pulse delay-1000"></div>
                  <span>Updated daily</span>
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