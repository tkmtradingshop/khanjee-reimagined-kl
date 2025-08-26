import { useState, useEffect } from "react";
import { ShoppingBag, MapPin, Clock, CheckCircle } from "lucide-react";

const LiveOrderNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    {
      id: 1,
      customer: "Ahmad from KLCC",
      item: "Chicken Biryani + BBQ Platter",
      time: "2 minutes ago",
      type: "order"
    },
    {
      id: 2,
      customer: "Fatima from Bangsar",
      item: "Mutton Karahi",
      time: "5 minutes ago",
      type: "delivered"
    },
    {
      id: 3,
      customer: "David from Ampang",
      item: "Fish Tikka + Naan",
      time: "8 minutes ago",
      type: "order"
    },
    {
      id: 4,
      customer: "Priya from Mont Kiara",
      item: "Butter Chicken + Rice",
      time: "12 minutes ago",
      type: "delivered"
    },
    {
      id: 5,
      customer: "Omar from Petaling Jaya",
      item: "BBQ Mixed Grill",
      time: "15 minutes ago",
      type: "order"
    },
    {
      id: 6,
      customer: "Michelle from Subang",
      item: "Chicken Qorma + Naan",
      time: "18 minutes ago",
      type: "delivered"
    },
    {
      id: 7,
      customer: "Raj from Damansara",
      item: "Malai Boti + Rice",
      time: "22 minutes ago",
      type: "order"
    },
    {
      id: 8,
      customer: "Nadia from Wangsa Maju",
      item: "Mutton Biryani",
      time: "25 minutes ago",
      type: "delivered"
    }
  ];

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Cycle through notifications
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 300);
    }, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const currentOrder = notifications[currentNotification];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
      <div className="bg-background/95 backdrop-blur-xl border border-border/30 rounded-2xl shadow-2xl p-5 max-w-80 group hover:shadow-3xl transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
            currentOrder.type === 'order' 
              ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 text-emerald-500 border border-emerald-500/20' 
              : 'bg-gradient-to-br from-green-500/20 to-green-600/20 text-green-500 border border-green-500/20'
          }`}>
            {currentOrder.type === 'order' ? (
              <ShoppingBag className="w-6 h-6" />
            ) : (
              <CheckCircle className="w-6 h-6" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-base font-bold text-foreground tracking-tight">
                {currentOrder.type === 'order' ? 'New Order!' : 'Delivered!'}
              </h4>
              <div className={`w-2.5 h-2.5 rounded-full animate-pulse shadow-sm ${
                currentOrder.type === 'order' ? 'bg-emerald-500' : 'bg-green-500'
              }`} />
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              <span className="font-semibold text-foreground">{currentOrder.customer}</span>
              <br />
              <span className="text-xs opacity-75">ordered</span> <span className="font-medium text-foreground">{currentOrder.item}</span>
            </p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{currentOrder.time}</span>
            </div>
          </div>
        </div>
        
        {/* Sleek live indicator */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-green-500/30 rounded-full animate-ping" />
            </div>
            <span className="text-xs text-green-500 font-bold tracking-wide">LIVE</span>
          </div>
          <div className="text-xs text-muted-foreground/60 font-medium">
            <span className="text-foreground font-bold">127</span> orders today
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOrderNotifications;