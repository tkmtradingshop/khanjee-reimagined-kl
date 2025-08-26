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
      customer: "Sarah from Bangsar",
      item: "Mutton Karahi",
      time: "5 minutes ago",
      type: "delivered"
    },
    {
      id: 3,
      customer: "Hassan from Ampang",
      item: "Fish Tikka + Naan",
      time: "8 minutes ago",
      type: "order"
    },
    {
      id: 4,
      customer: "Lisa from Mont Kiara",
      item: "Butter Chicken + Rice",
      time: "12 minutes ago",
      type: "delivered"
    },
    {
      id: 5,
      customer: "Zain from Cheras",
      item: "BBQ Mixed Grill",
      time: "15 minutes ago",
      type: "order"
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
      <div className="bg-card border border-border/50 rounded-xl shadow-elegant p-4 max-w-sm backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentOrder.type === 'order' 
              ? 'bg-brass-gold/20 text-brass-gold' 
              : 'bg-emerald-light/20 text-emerald-light'
          }`}>
            {currentOrder.type === 'order' ? (
              <ShoppingBag className="w-5 h-5" />
            ) : (
              <CheckCircle className="w-5 h-5" />
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-semibold text-foreground">
                {currentOrder.type === 'order' ? 'New Order!' : 'Order Delivered!'}
              </p>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                currentOrder.type === 'order' ? 'bg-brass-gold' : 'bg-emerald-light'
              }`} />
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">{currentOrder.customer}</span> ordered{' '}
              <span className="text-foreground">{currentOrder.item}</span>
            </p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {currentOrder.time}
            </div>
          </div>
        </div>
        
        {/* Live indicator */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-emerald-light rounded-full animate-pulse" />
            <span className="text-xs text-emerald-light font-medium">Live</span>
          </div>
          <span className="text-xs text-muted-foreground">127 orders today</span>
        </div>
      </div>
    </div>
  );
};

export default LiveOrderNotifications;