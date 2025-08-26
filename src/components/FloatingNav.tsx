import { Home, Menu, ShoppingCart, Calendar, User } from "lucide-react";
import { useState } from "react";

const FloatingNav = ({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Menu },
    { id: 'cart', label: 'Order', icon: ShoppingCart },
    { id: 'reservation', label: 'Reserve', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-emerald-deep/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-brass-gold/20">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-brass-gold text-emerald-deep shadow-lg' 
                    : 'text-ivory-warm hover:bg-emerald-light/50 hover:text-brass-light'
                }`}
              >
                <Icon size={20} />
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-spice-red rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;