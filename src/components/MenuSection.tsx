import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Star } from "lucide-react";

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

const menuData: MenuItem[] = [
  // Starters
  { id: 1, name: "Chicken Tikka", description: "Grilled chicken marinated in yogurt and spices", price: 28, category: "starters", rating: 4.8, spiceLevel: 2 },
  { id: 2, name: "Seekh Kebab", description: "Minced lamb with herbs and traditional spices", price: 32, category: "starters", rating: 4.9, spiceLevel: 3 },
  { id: 3, name: "Samosa Chat", description: "Crispy samosas with chickpeas and chutneys", price: 18, category: "starters", rating: 4.6, spiceLevel: 2 },
  
  // Mains
  { id: 4, name: "Chicken Biryani", description: "Aromatic basmati rice with tender chicken and spices", price: 45, category: "mains", rating: 4.9, spiceLevel: 2 },
  { id: 5, name: "Lamb Karahi", description: "Tender lamb cooked in traditional wok with tomatoes", price: 55, category: "mains", rating: 4.8, spiceLevel: 3 },
  { id: 6, name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken", price: 42, category: "mains", rating: 4.7, spiceLevel: 1 },
  
  // BBQ
  { id: 7, name: "Mixed Grill", description: "Assorted grilled meats with naan and sides", price: 75, category: "bbq", rating: 4.9, spiceLevel: 2 },
  { id: 8, name: "Lamb Chops", description: "Succulent lamb chops with mint chutney", price: 65, category: "bbq", rating: 4.8, spiceLevel: 2 },
  
  // Desserts
  { id: 9, name: "Kulfi", description: "Traditional ice cream with pistachios and cardamom", price: 15, category: "desserts", rating: 4.7, spiceLevel: 0 },
  { id: 10, name: "Gulab Jamun", description: "Sweet milk dumplings in rose syrup", price: 12, category: "desserts", rating: 4.6, spiceLevel: 0 },
];

const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'starters', name: 'Starters', icon: '🥗' },
  { id: 'mains', name: 'Main Course', icon: '🍛' },
  { id: 'bbq', name: 'BBQ Grill', icon: '🔥' },
  { id: 'desserts', name: 'Desserts', icon: '🍮' },
];

const MenuSection = ({ onAddToCart }: { onAddToCart: (item: MenuItem, quantity: number) => void }) => {
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
            <div key={item.id} className="card-premium p-6 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-2xl font-bold text-brass-gold">
                    RM {item.price}
                  </div>
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;