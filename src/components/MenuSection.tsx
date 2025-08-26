import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Star, MapPin } from "lucide-react";

// Import dish images
import muttonLahoriKarahi from "@/assets/dishes/mutton-lahori-karahi.jpg";
import chickenBiryani from "@/assets/dishes/chicken-biryani.jpg";
import muttonBiryani from "@/assets/dishes/mutton-biryani.jpg";
import chickenKarahi from "@/assets/dishes/chicken-karahi.jpg";
import chickenTikkaMasala from "@/assets/dishes/chicken-tikka-masala.jpg";
import muttonShinwari from "@/assets/dishes/mutton-shinwari.jpg";
import fishTikkaBiryani from "@/assets/dishes/fish-tikka-biryani.jpg";
import chickenTikkaBBQ from "@/assets/dishes/chicken-tikka-bbq.jpg";
import chickenKebab from "@/assets/dishes/chicken-kebab.jpg";
import beefKebabKarahi from "@/assets/dishes/beef-kebab-karahi.jpg";
import butterChicken from "@/assets/dishes/butter-chicken.jpg";
import malaiBoti from "@/assets/dishes/malai-boti.jpg";
import fishTikka from "@/assets/dishes/fish-tikka.jpg";
import chickenQorma from "@/assets/dishes/chicken-qorma.jpg";
import kjSpecialFriedRice from "@/assets/dishes/kj-special-fried-rice.jpg";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  spiceLevel: number;
  image?: string;
}

// Real menu data from Khanjee app - Complete Menu
const menuData: MenuItem[] = [
  // Khanjee Kitchen Special
  { 
    id: 1, 
    name: "MUTTON LAHORI KARAHI", 
    description: "Traditional Lahori-style mutton cooked in karahi with aromatic spices", 
    price: 45, 
    category: "signature", 
    rating: 4.9, 
    spiceLevel: 3,
    image: muttonLahoriKarahi
  },
  { 
    id: 2, 
    name: "MUTTON SHINWARI", 
    description: "Authentic Pashtun-style mutton with minimal spices, maximum flavor", 
    price: 45, 
    category: "signature", 
    rating: 4.8, 
    spiceLevel: 2,
    image: muttonShinwari
  },
  { 
    id: 3, 
    name: "BEEF KEBAB KARAHI", 
    description: "Beef kebab pieces cooked in traditional karahi style", 
    price: 22, 
    category: "signature", 
    rating: 4.6, 
    spiceLevel: 3,
    image: beefKebabKarahi
  },
  { 
    id: 4, 
    name: "BEEF QEEMA (SMALL)", 
    description: "Minced beef cooked with traditional spices and herbs", 
    price: 12, 
    category: "signature", 
    rating: 4.5, 
    spiceLevel: 2
  },
  { 
    id: 5, 
    name: "BEEF QEEMA (Large)", 
    description: "Large portion of minced beef cooked with traditional spices", 
    price: 22, 
    category: "signature", 
    rating: 4.5, 
    spiceLevel: 2
  },
  { 
    id: 6, 
    name: "CHICKEN TIKKA MASALA", 
    description: "Grilled chicken tikka in rich creamy tomato masala sauce", 
    price: 22, 
    category: "signature", 
    rating: 4.7, 
    spiceLevel: 2,
    image: chickenTikkaMasala
  },
  { 
    id: 7, 
    name: "CHICKEN KEBAB HANDI", 
    description: "Minced chicken kebab cooked in traditional handi style", 
    price: 22, 
    category: "signature", 
    rating: 4.6, 
    spiceLevel: 2
  },
  { 
    id: 8, 
    name: "CHICKEN ACHARI HANDI", 
    description: "Chicken cooked with pickle spices in traditional handi", 
    price: 22, 
    category: "signature", 
    rating: 4.6, 
    spiceLevel: 3
  },
  { 
    id: 9, 
    name: "MUTTON KARAHI", 
    description: "Classic mutton karahi with tomatoes and aromatic spices", 
    price: 45, 
    category: "signature", 
    rating: 4.8, 
    spiceLevel: 3
  },
  { 
    id: 10, 
    name: "CHICKEN KARAHI", 
    description: "Classic Pakistani chicken karahi with tomatoes and spices", 
    price: 35, 
    category: "signature", 
    rating: 4.8, 
    spiceLevel: 3,
    image: chickenKarahi
  },
  { 
    id: 11, 
    name: "CHICKEN MAKHNI HANDI", 
    description: "Creamy chicken makhni cooked in traditional handi", 
    price: 22, 
    category: "signature", 
    rating: 4.7, 
    spiceLevel: 1
  },

  // Mutton Dishes
  { 
    id: 12, 
    name: "MUTTON CURRY (Small)", 
    description: "Traditional mutton curry with aromatic spices", 
    price: 15, 
    category: "mutton", 
    rating: 4.6, 
    spiceLevel: 2
  },
  { 
    id: 13, 
    name: "MUTTON CURRY (Large)", 
    description: "Large portion of traditional mutton curry", 
    price: 30, 
    category: "mutton", 
    rating: 4.6, 
    spiceLevel: 2
  },
  { 
    id: 14, 
    name: "MUTTON KUNNA (Small)", 
    description: "Slow-cooked mutton kunna with rich gravy", 
    price: 15, 
    category: "mutton", 
    rating: 4.7, 
    spiceLevel: 2
  },
  { 
    id: 15, 
    name: "MUTTON KUNNA (Large)", 
    description: "Large portion of slow-cooked mutton kunna", 
    price: 30, 
    category: "mutton", 
    rating: 4.7, 
    spiceLevel: 2
  },

  // Chicken Dishes
  { 
    id: 16, 
    name: "CHICKEN GINGER (SMALL)", 
    description: "Chicken cooked with fresh ginger and spices", 
    price: 13, 
    category: "chicken", 
    rating: 4.5, 
    spiceLevel: 2
  },
  { 
    id: 17, 
    name: "CHICKEN GINGER (Large)", 
    description: "Large portion of chicken cooked with fresh ginger", 
    price: 26, 
    category: "chicken", 
    rating: 4.5, 
    spiceLevel: 2
  },
  { 
    id: 18, 
    name: "CHICKEN QEEMA", 
    description: "Minced chicken cooked with traditional spices", 
    price: 18, 
    category: "chicken", 
    rating: 4.4, 
    spiceLevel: 2
  },
  { 
    id: 19, 
    name: "CHICKEN QORMA (Small)", 
    description: "Traditional yogurt-based chicken curry", 
    price: 11, 
    category: "chicken", 
    rating: 4.6, 
    spiceLevel: 2
  },
  { 
    id: 20, 
    name: "CHICKEN QORMA (Large)", 
    description: "Large portion of traditional yogurt-based chicken curry", 
    price: 22, 
    category: "chicken", 
    rating: 4.6, 
    spiceLevel: 2,
    image: chickenQorma
  },
  { 
    id: 21, 
    name: "BUTTER CHICKEN (Small)", 
    description: "Creamy tomato-based chicken curry", 
    price: 13, 
    category: "chicken", 
    rating: 4.7, 
    spiceLevel: 1
  },
  { 
    id: 22, 
    name: "BUTTER CHICKEN (Large)", 
    description: "Large portion of creamy tomato-based chicken curry", 
    price: 26, 
    category: "chicken", 
    rating: 4.7, 
    spiceLevel: 1,
    image: butterChicken
  },
  { 
    id: 23, 
    name: "WHITE CHICKEN QORMA (Small)", 
    description: "Mild white chicken qorma with yogurt and cream", 
    price: 13, 
    category: "chicken", 
    rating: 4.5, 
    spiceLevel: 1
  },
  { 
    id: 24, 
    name: "WHITE CHICKEN QORMA (Large)", 
    description: "Large portion of mild white chicken qorma", 
    price: 26, 
    category: "chicken", 
    rating: 4.5, 
    spiceLevel: 1
  },

  // Rice Dishes
  { 
    id: 25, 
    name: "FISH TIKKA BIRYANI", 
    description: "Special biryani with marinated fish tikka pieces", 
    price: 25, 
    category: "rice", 
    rating: 4.7, 
    spiceLevel: 2,
    image: fishTikkaBiryani
  },
  { 
    id: 26, 
    name: "K.J SPECIAL FRIED RICE", 
    description: "House special fried rice with mixed ingredients", 
    price: 20, 
    category: "rice", 
    rating: 4.6, 
    spiceLevel: 1,
    image: kjSpecialFriedRice
  },
  { 
    id: 27, 
    name: "PLAIN WHITE RICE", 
    description: "Steamed basmati rice", 
    price: 4, 
    category: "rice", 
    rating: 4.2, 
    spiceLevel: 0
  },
  { 
    id: 28, 
    name: "CHICKEN BIRYANI", 
    description: "Aromatic basmati rice with tender chicken and spices", 
    price: 16, 
    category: "rice", 
    rating: 4.9, 
    spiceLevel: 2,
    image: chickenBiryani
  },
  { 
    id: 29, 
    name: "MUTTON BIRYANI", 
    description: "Premium basmati rice with succulent mutton pieces", 
    price: 18, 
    category: "rice", 
    rating: 4.9, 
    spiceLevel: 2,
    image: muttonBiryani
  },
  { 
    id: 30, 
    name: "CHICKEN PULAO", 
    description: "Aromatic rice cooked with chicken and mild spices", 
    price: 16, 
    category: "rice", 
    rating: 4.7, 
    spiceLevel: 1
  },
  { 
    id: 31, 
    name: "MUTTON POLAO", 
    description: "Aromatic rice cooked with mutton and mild spices", 
    price: 18, 
    category: "rice", 
    rating: 4.7, 
    spiceLevel: 1
  },
  { 
    id: 32, 
    name: "BIRYANI RICE", 
    description: "Aromatic biryani rice without meat", 
    price: 10, 
    category: "rice", 
    rating: 4.3, 
    spiceLevel: 1
  },
  { 
    id: 33, 
    name: "PULAO RICE", 
    description: "Aromatic pulao rice without meat", 
    price: 12, 
    category: "rice", 
    rating: 4.3, 
    spiceLevel: 1
  },
  { 
    id: 34, 
    name: "KEBAB BIRYANI SET", 
    description: "Special biryani served with kebab", 
    price: 22, 
    category: "rice", 
    rating: 4.8, 
    spiceLevel: 2
  },

  // Morning Special
  { 
    id: 35, 
    name: "EGG FRY", 
    description: "Simple fried egg cooked to perfection", 
    price: 2, 
    category: "morning", 
    rating: 4.2, 
    spiceLevel: 0
  },
  { 
    id: 36, 
    name: "OMELETTE", 
    description: "Fluffy omelette with traditional seasoning", 
    price: 3, 
    category: "morning", 
    rating: 4.3, 
    spiceLevel: 0
  },

  // BBQ/Grilled Items
  { 
    id: 37, 
    name: "CHICKEN TANDOORI", 
    description: "Traditional tandoor-cooked chicken with spices", 
    price: 12, 
    category: "bbq", 
    rating: 4.7, 
    spiceLevel: 3
  },
  { 
    id: 38, 
    name: "CHICKEN TIKKA", 
    description: "Marinated chicken pieces grilled to perfection", 
    price: 12, 
    category: "bbq", 
    rating: 4.8, 
    spiceLevel: 2,
    image: chickenTikkaBBQ
  },
  { 
    id: 39, 
    name: "CHEESY KOFTA", 
    description: "Cheese-filled kofta grilled with aromatic spices", 
    price: 18, 
    category: "bbq", 
    rating: 4.6, 
    spiceLevel: 2
  },
  { 
    id: 40, 
    name: "CHICKEN BOTI", 
    description: "Succulent chicken boti pieces grilled on skewers", 
    price: 12, 
    category: "bbq", 
    rating: 4.7, 
    spiceLevel: 2
  },
  { 
    id: 41, 
    name: "MALAI BOTI", 
    description: "Creamy white chicken pieces grilled on skewers", 
    price: 16, 
    category: "bbq", 
    rating: 4.7, 
    spiceLevel: 1,
    image: malaiBoti
  },
  { 
    id: 42, 
    name: "CHICKEN KEBAB", 
    description: "Minced chicken kebab with traditional spices", 
    price: 11, 
    category: "bbq", 
    rating: 4.6, 
    spiceLevel: 2,
    image: chickenKebab
  },
  { 
    id: 43, 
    name: "FISH TIKKA", 
    description: "Marinated fish pieces grilled with aromatic spices", 
    price: 18, 
    category: "bbq", 
    rating: 4.5, 
    spiceLevel: 2,
    image: fishTikka
  },
];

const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'signature', name: 'Khanjee Special', icon: '⭐' },
  { id: 'mutton', name: 'Mutton Dishes', icon: '🥩' },
  { id: 'chicken', name: 'Chicken', icon: '🐔' },
  { id: 'rice', name: 'Rice & Biryani', icon: '🍛' },
  { id: 'morning', name: 'Morning Special', icon: '🍳' },
  { id: 'bbq', name: 'BBQ Grill', icon: '🔥' },
];

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  deliveryTime: string;
}

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
  selectedBranch: Branch | null;
}

const MenuSection = ({ onAddToCart, selectedBranch }: MenuSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const filteredMenu = selectedCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  const updateQuantity = (itemId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const addToCart = (item: MenuItem) => {
    const quantity = quantities[item.id] || 1;
    onAddToCart(item, quantity);
    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };

  const SpiceIndicator = ({ level }: { level: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= level ? 'bg-spice-red' : 'bg-muted'
          }`}
        />
      ))}
    </div>
  );

  // Don't render anything if no branch is selected
  if (!selectedBranch) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 cultural-accent">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Pakistani flavors crafted with traditional recipes and premium ingredients
          </p>
          <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            Ordering from: <span className="font-medium text-primary ml-1">{selectedBranch.name}</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-deep text-ivory-warm shadow-lg'
                  : 'bg-card text-card-foreground hover:bg-emerald-light/10 hover:text-emerald-deep border border-border'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map(item => (
            <div key={item.id} className="card-premium overflow-hidden group">
              {/* Dish Image */}
              {item.image && (
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-deep/90 text-ivory-warm px-2 py-1 rounded-full text-sm font-medium">
                    RM {item.price}
                  </div>
                </div>
              )}
              
              <div className="p-6 pt-0">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-brass-gold text-brass-gold" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <SpiceIndicator level={item.spiceLevel} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-emerald-light/20 flex items-center justify-center transition-colors"
                      disabled={!quantities[item.id]}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {quantities[item.id] || 0}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-emerald-light/20 hover:bg-emerald-light/40 flex items-center justify-center transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <Button
                    variant="order"
                    size="sm"
                    onClick={() => addToCart(item)}
                    disabled={!quantities[item.id]}
                    className="opacity-100 group-hover:opacity-100 transition-opacity"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;