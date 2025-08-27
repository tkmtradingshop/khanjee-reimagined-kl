import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Clock, Users } from "lucide-react";

// Import dish images
import chickenBiryaniImg from "@/assets/dishes/chicken-biryani.jpg";
import muttonKarahiImg from "@/assets/dishes/mutton-lahori-karahi.jpg";
import chickenTikkaImg from "@/assets/dishes/chicken-tikka-bbq.jpg";
import butterChickenImg from "@/assets/dishes/butter-chicken.jpg";

interface RecommendedDishesProps {
  onAddToCart: (item: any, quantity: number) => void;
}

const RecommendedDishes = ({ onAddToCart }: RecommendedDishesProps) => {
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const recommendedDishes = [
    {
      id: 101,
      name: "Chicken Biryani",
      price: 16,
      originalPrice: 18,
      image: chickenBiryaniImg,
      rating: 4.9,
      orders: 1247,
      prepTime: "20-25 min",
      tag: "Most Popular",
      tagColor: "bg-brass-gold text-emerald-deep",
      description: "Aromatic basmati rice with tender chicken pieces"
    },
    {
      id: 102,
      name: "Mutton Lahori Karahi",
      price: 45,
      originalPrice: 50,
      image: muttonKarahiImg,
      rating: 4.8,
      orders: 892,
      prepTime: "25-30 min",
      tag: "Chef's Special",
      tagColor: "bg-spice-red text-white",
      description: "Traditional karahi with premium mutton cuts"
    },
    {
      id: 103,
      name: "Chicken Tikka BBQ",
      price: 12,
      originalPrice: 15,
      image: chickenTikkaImg,
      rating: 4.9,
      orders: 2103,
      prepTime: "15-20 min",
      tag: "Trending",
      tagColor: "bg-emerald-light text-white",
      description: "Perfectly grilled chicken tikka with spices"
    },
    {
      id: 104,
      name: "Butter Chicken",
      price: 26,
      originalPrice: 30,
      image: butterChickenImg,
      rating: 4.7,
      orders: 756,
      prepTime: "18-22 min",
      tag: "Limited Time",
      tagColor: "bg-copper-accent text-white",
      description: "Creamy and rich butter chicken curry"
    }
  ];

  const handleAddToCart = (dish: any) => {
    const quantity = quantities[dish.id] || 1;
    onAddToCart({ ...dish, category: "Recommended" }, quantity);
    setQuantities({ ...quantities, [dish.id]: 1 });
  };

  const updateQuantity = (dishId: number, newQuantity: number) => {
    setQuantities({ ...quantities, [dishId]: Math.max(1, newQuantity) });
  };

  return (
    <section className="bg-gradient-to-b from-emerald-deep/5 to-background py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-spice-red/20 rounded-full px-6 py-2 mb-4">
            <TrendingUp className="w-5 h-5 text-brass-gold" />
            <span className="text-brass-gold font-semibold">Recommended for You</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Favorites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most ordered dishes loved by our customers. Limited time offers available!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedDishes.map((dish) => (
            <div 
              key={dish.id}
              className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Tag Overlay */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${dish.tagColor}`}>
                  {dish.tag}
                </div>

                {/* Discount Badge */}
                <div className="absolute top-3 right-3 bg-spice-red text-white px-2 py-1 rounded-full text-xs font-bold">
                  Save RM{dish.originalPrice - dish.price}
                </div>

                {/* Rating Overlay */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-brass-gold text-brass-gold" />
                  {dish.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">
                  {dish.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {dish.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {dish.prepTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {dish.orders.toLocaleString()} orders
                  </div>
                </div>

                {/* Price Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-foreground">
                      RM{dish.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      RM{dish.originalPrice}
                    </span>
                  </div>
                  
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(dish.id, (quantities[dish.id] || 1) - 1)}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center text-foreground transition-colors"
                      disabled={(quantities[dish.id] || 1) <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium text-foreground">
                      {quantities[dish.id] || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(dish.id, (quantities[dish.id] || 1) + 1)}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center text-foreground transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(dish)}
                  className="w-full bg-gradient-to-r from-brass-gold to-brass-light hover:from-brass-light hover:to-brass-gold text-emerald-deep font-semibold transition-all duration-300 hover:scale-105 shadow-glow"
                >
                  Add to Cart • RM{(dish.price * (quantities[dish.id] || 1)).toFixed(2)}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-12 bg-gradient-to-r from-spice-red/10 via-brass-gold/10 to-emerald-light/10 rounded-2xl p-8 border border-brass-gold/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            🔥 Limited Time Offer!
          </h3>
          <p className="text-muted-foreground mb-6">
            Order any 2 recommended dishes and get <span className="font-bold text-brass-gold">20% OFF</span> your total bill
          </p>
          <div className="inline-flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-spice-red">
              <Clock className="w-4 h-4" />
              Ends in 2 hours 15 minutes
            </div>
            <div className="flex items-center gap-2 text-emerald-light">
              <Users className="w-4 h-4" />
              47 people used this offer today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedDishes;