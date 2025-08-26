import { useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReservationSection from "@/components/ReservationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import CartSheet from "@/components/CartSheet";
import BranchSelector from "@/components/BranchSelector";
import GoogleReviews from "@/components/GoogleReviews";
import MinimalSignup from "@/components/MinimalSignup";
import LiveOrderNotifications from "@/components/LiveOrderNotifications";
import DeliveryProgressBar from "@/components/DeliveryProgressBar";
import RecommendedDishes from "@/components/RecommendedDishes";
import CookingReels from "@/components/CookingReels";
import LiveKitchenFeed from "@/components/LiveKitchenFeed";
import FoodDiscoveryCarousel from "@/components/FoodDiscoveryCarousel";
import UrgencyBooster from "@/components/UrgencyBooster";
import { ShoppingCart } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  deliveryTime: string;
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  spiceLevel: number;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  const addToCart = (item: MenuItem, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prev, {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity
      }];
    });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Placeholder for checkout logic
    alert('Checkout functionality coming soon! For now, please call us at +60 12-345 6789 to complete your order.');
  };

  const scrollToSection = (section: string) => {
    setActiveTab(section);
    
    let elementId = section;
    if (section === 'cart') {
      setIsCartOpen(true);
      return;
    }
    if (section === 'reservation') {
      elementId = 'reserve';
    }
    if (section === 'profile') {
      elementId = 'about';
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div id="home">
        <HeroSection onOrderNow={() => scrollToSection('menu')} />
      </div>

      {/* Branch Selection Message */}
      {!selectedBranch && (
        <section className="py-16 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Select a Branch to View Menu
              </h2>
              <p className="text-muted-foreground text-lg">
                Please choose your nearest branch below to see our menu and place orders
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Branch Selection */}
      <div id="branches">
        <BranchSelector 
          selectedBranch={selectedBranch}
          onBranchSelect={setSelectedBranch}
        />
      </div>

      {/* Cooking Reels */}
      <CookingReels onOrderDish={(dishName) => scrollToSection('menu')} />

      {/* Food Discovery Carousel */}
      <FoodDiscoveryCarousel onAddToCart={(dish) => {
        const menuItem = {
          id: Date.now(),
          name: dish.name,
          price: parseFloat(dish.price.replace('RM ', '')),
          description: dish.description,
          category: 'trending',
          rating: dish.rating,
          spiceLevel: 2
        };
        addToCart(menuItem, 1);
      }} />

      {/* Live Kitchen Feed */}
      <LiveKitchenFeed />

      {/* Menu Section */}
      <div id="menu">
        <MenuSection onAddToCart={addToCart} selectedBranch={selectedBranch} />
      </div>

      {/* Recommended Dishes */}
      <RecommendedDishes onAddToCart={addToCart} />

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Minimal Signup */}
      <MinimalSignup />

      {/* Reservation Section */}
      <div id="reserve">
        <ReservationSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Footer */}
      <Footer />

      {/* Live Order Notifications */}
      <LiveOrderNotifications />

      {/* Delivery Progress Bar */}
      <DeliveryProgressBar cartTotal={cartTotal} />

      {/* Floating Cart Button */}
      {totalCartItems > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed top-6 right-6 z-40 bg-spice-red text-ivory-warm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <ShoppingCart size={24} />
          <div className="absolute -top-2 -right-2 bg-brass-gold text-emerald-deep text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {totalCartItems}
          </div>
        </button>
      )}

      {/* Cart Sheet */}
      <CartSheet
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Floating Navigation */}
      <FloatingNav activeTab={activeTab} onTabChange={scrollToSection} />

      {/* Urgency Booster */}
      <UrgencyBooster />
    </div>
  );
};

export default Index;
