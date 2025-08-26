import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

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
    <section className="bg-gradient-to-b from-background to-emerald-deep/5 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
              alt="Google" 
              className="w-8 h-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brass-gold text-brass-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-brass-gold">4.9</span>
            <span className="text-muted-foreground">(2,347 reviews)</span>
          </div>
          <p className="text-muted-foreground">See what our customers say about us</p>
        </div>

        {/* Animated Reviews Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out gap-6"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(reviews.length * 100) / 3}%`
            }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="flex-shrink-0 w-full md:w-1/3 bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                {/* Review Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brass-gold to-brass-light rounded-full flex items-center justify-center text-emerald-deep font-bold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      {review.verified && (
                        <div className="w-4 h-4 bg-emerald-light rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brass-gold text-brass-gold" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-brass-gold/30" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    {review.text}
                  </p>
                </div>

                {/* Google Verified Badge */}
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-light">
                  <div className="w-4 h-4 bg-emerald-light rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  Verified Google Review
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: reviews.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-brass-gold scale-110'
                  : 'bg-muted hover:bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join thousands of satisfied customers</p>
          <a
            href="https://g.page/r/khanjee-reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold to-brass-light text-emerald-deep px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-glow"
          >
            <Star className="w-5 h-5" />
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;