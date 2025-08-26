import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Timer, Users, Flame, Zap, TrendingUp, AlertTriangle, Clock, Heart } from "lucide-react";

const UrgencyBooster = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 });
  const [currentViewers, setCurrentViewers] = useState(347);
  const [recentOrders, setRecentOrders] = useState([
    { name: "Ahmad", dish: "Chicken Karahi", time: "2 mins ago", location: "Ampang" },
    { name: "Sarah", dish: "Mutton Biryani", time: "1 min ago", location: "Mont Kiara" },
    { name: "David", dish: "Malai Boti", time: "30 secs ago", location: "Bangsar" },
  ]);
  const [todayStats, setTodayStats] = useState({
    ordersLeft: 28,
    totalOrders: 156,
    happyCustomers: 142
  });

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    // Simulate live viewer changes
    const viewerTimer = setInterval(() => {
      setCurrentViewers(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 3000);

    // Simulate new orders
    const orderTimer = setInterval(() => {
      const names = ["Ali", "Maya", "John", "Fatima", "Chen", "Priya", "Omar"];
      const dishes = ["Chicken Karahi", "Mutton Biryani", "Fish Tikka", "Malai Boti", "Butter Chicken"];
      const locations = ["KLCC", "Ampang", "Cheras", "Mont Kiara", "Bangsar", "PJ", "Shah Alam"];
      
      const newOrder = {
        name: names[Math.floor(Math.random() * names.length)],
        dish: dishes[Math.floor(Math.random() * dishes.length)], 
        time: "Just now",
        location: locations[Math.floor(Math.random() * locations.length)]
      };

      setRecentOrders(prev => [newOrder, ...prev.slice(0, 2)]);
      setTodayStats(prev => ({ 
        ...prev, 
        ordersLeft: Math.max(0, prev.ordersLeft - 1),
        totalOrders: prev.totalOrders + 1,
        happyCustomers: prev.happyCustomers + 1
      }));
    }, 8000);

    return () => {
      clearInterval(timer);
      clearInterval(viewerTimer);
      clearInterval(orderTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pointer-events-auto">
          
          {/* Flash Sale Timer */}
          <div className="bg-gradient-to-r from-red-500/95 to-orange-500/95 backdrop-blur-md rounded-2xl p-4 border border-red-400/30 shadow-xl animate-pulse">
            <div className="flex items-center gap-2 mb-2">
              <Timer className="text-white animate-spin" size={20} />
              <span className="text-white font-bold text-sm">⚡ FLASH SALE ENDING!</span>
            </div>
            <div className="flex items-center gap-2 text-white text-lg font-bold">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="animate-pulse">:</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="animate-pulse">:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <div className="text-white/90 text-xs mt-1">20% OFF all dishes!</div>
          </div>

          {/* Live Activity Feed */}
          <div className="bg-gradient-to-r from-green-500/95 to-emerald-500/95 backdrop-blur-md rounded-2xl p-4 border border-green-400/30 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-sm">🔥 LIVE ORDERS</span>
            </div>
            <div className="space-y-1">
              {recentOrders.map((order, index) => (
                <div key={index} className="text-white text-xs">
                  <span className="font-semibold">{order.name}</span> ordered 
                  <span className="text-green-200"> {order.dish}</span>
                  <div className="text-green-100 opacity-75">{order.location} • {order.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scarcity Indicator */}
          <div className="bg-gradient-to-r from-amber-500/95 to-yellow-500/95 backdrop-blur-md rounded-2xl p-4 border border-amber-400/30 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-white animate-bounce" size={20} />
              <span className="text-white font-bold text-sm">⚠️ LIMITED STOCK</span>
            </div>
            <div className="text-white text-xs">
              <div className="flex justify-between mb-1">
                <span>Today's Portions:</span>
                <span className="font-bold">{todayStats.ordersLeft} left</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(todayStats.ordersLeft / 50) * 100}%` }}
                ></div>
              </div>
              <div className="mt-1 text-yellow-100">Hurry! Running out fast!</div>
            </div>
          </div>
        </div>

        {/* Mobile Floating CTA */}
        <div className="md:hidden mt-4">
          <Button 
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 text-lg shadow-lg animate-pulse rounded-xl"
          >
            🔥 ORDER NOW - LIMITED TIME!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBooster;