import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Users, Clock, Flame, ChefHat, Eye } from "lucide-react";

// Simulated live orders data
const liveOrders = [
  {
    id: 1,
    dish: "Chicken Karahi",
    customer: "Sarah K.",
    status: "Cooking",
    timeLeft: "8 mins",
    chef: "Chef Mahmood",
    stage: "Adding final spices 🌶️"
  },
  {
    id: 2,
    dish: "Mutton Biryani",
    customer: "Ahmad R.", 
    status: "Plating",
    timeLeft: "2 mins",
    chef: "Chef Amara",
    stage: "Layering the saffron rice 🍛"
  },
  {
    id: 3,
    dish: "Malai Boti",
    customer: "Lisa M.",
    status: "Grilling",
    timeLeft: "5 mins", 
    chef: "Chef Hassan",
    stage: "Perfect char on tandoor 🔥"
  },
  {
    id: 4,
    dish: "Fish Tikka",
    customer: "John D.",
    status: "Marinating",
    timeLeft: "15 mins",
    chef: "Chef Zara",
    stage: "Absorbing aromatic spices 🐟"
  }
];

const kitchenStats = {
  liveViewers: 847,
  ordersToday: 156,
  busyLevel: "Peak Hours",
  avgCookTime: "12 mins"
};

const LiveKitchenFeed = () => {
  const [viewers, setViewers] = useState(kitchenStats.liveViewers);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Simulate live viewer count changes
    const viewerTimer = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 3000);

    // Update current time
    const timeTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(viewerTimer);
      clearInterval(timeTimer);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-stone-900 to-zinc-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-red-500/30">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <Camera className="text-red-400" size={20} />
            <span className="text-red-300 font-semibold">LIVE FROM KITCHEN</span>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-br from-orange-400 via-red-400 to-amber-400 bg-clip-text mb-4">
            Your Food is Being Crafted! 
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Watch our master chefs create magic in real-time. 
            <span className="text-orange-400 font-semibold"> Every order has a story</span> 📺✨
          </p>
        </div>

        {/* Live Stats Bar */}
        <div className="bg-gradient-to-r from-stone-800/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-stone-600/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="text-orange-400" size={20} />
                <span className="text-orange-400 font-bold text-xl">{viewers.toLocaleString()}</span>
              </div>
              <span className="text-stone-400 text-sm">Live Viewers</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-green-400" size={20} />
                <span className="text-green-400 font-bold text-xl">{kitchenStats.ordersToday}</span>
              </div>
              <span className="text-stone-400 text-sm">Orders Today</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="text-red-400 animate-pulse" size={20} />
                <span className="text-red-400 font-bold text-xl">{kitchenStats.busyLevel}</span>
              </div>
              <span className="text-stone-400 text-sm">Kitchen Status</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-blue-400" size={20} />
                <span className="text-blue-400 font-bold text-xl">{kitchenStats.avgCookTime}</span>
              </div>
              <span className="text-stone-400 text-sm">Avg Cook Time</span>
            </div>
          </div>
        </div>

        {/* Live Kitchen Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Live Feed */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-stone-700/50 relative">
              {/* Live Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-stone-800 to-slate-900 relative">
                {/* Live Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-red-500 text-white px-3 py-1 rounded-full font-bold animate-pulse">
                    🔴 LIVE
                  </Badge>
                </div>
                
                {/* Viewer Count */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                    <Eye size={16} />
                    {viewers.toLocaleString()}
                  </div>
                </div>

                {/* Kitchen Scene Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍🍳</div>
                    <div className="text-white text-xl font-bold">Live Kitchen Feed</div>
                    <div className="text-stone-400">Watch our chefs in action</div>
                  </div>
                </div>

                {/* Simulated Kitchen Activity Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="font-bold">Chef Mahmood's Station</div>
                      <div className="text-sm text-stone-300">Currently preparing: Chicken Karahi</div>
                    </div>
                    <div className="text-orange-400 text-sm font-bold bg-orange-500/20 px-3 py-1 rounded-full">
                      🔥 Peak Time
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kitchen Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30">
                <ChefHat className="text-orange-400 mb-2" size={24} />
                <div className="text-white font-bold text-sm">Master Chefs</div>
                <div className="text-stone-300 text-xs">5 Active Now</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                <Flame className="text-green-400 mb-2" size={24} />
                <div className="text-white font-bold text-sm">Fresh Ingredients</div>
                <div className="text-stone-300 text-xs">Daily Sourced</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-500/30">
                <Clock className="text-blue-400 mb-2" size={24} />
                <div className="text-white font-bold text-sm">Fast Service</div>
                <div className="text-stone-300 text-xs">Under 15 mins</div>
              </div>
            </div>
          </div>

          {/* Live Orders Sidebar */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              Orders In Progress
            </h3>
            
            {liveOrders.map((order, index) => (
              <div 
                key={order.id}
                className="bg-gradient-to-r from-stone-800/60 to-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-stone-600/30 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeIn 0.6s ease-out forwards'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-white font-bold">{order.dish}</h4>
                    <p className="text-stone-400 text-sm">For {order.customer}</p>
                  </div>
                  <Badge 
                    variant={order.status === 'Cooking' ? 'destructive' : 
                             order.status === 'Grilling' ? 'default' : 'secondary'}
                    className={`${
                      order.status === 'Cooking' ? 'bg-orange-500' :
                      order.status === 'Grilling' ? 'bg-red-500' : 
                      order.status === 'Plating' ? 'bg-green-500' : 'bg-blue-500'
                    } animate-pulse`}
                  >
                    {order.status}
                  </Badge>
                </div>
                
                <div className="text-stone-300 text-sm mb-2">
                  👨‍🍳 {order.chef}
                </div>
                
                <div className="text-orange-400 text-sm font-medium mb-3">
                  {order.stage}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-sm">ETA:</span>
                  <span className="text-green-400 font-bold">{order.timeLeft}</span>
                </div>
              </div>
            ))}

            {/* Order CTA */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30 mt-6">
              <h4 className="text-white font-bold mb-2">Join the Queue! 🚀</h4>
              <p className="text-stone-300 text-sm mb-4">
                Your order will be prepared fresh by our master chefs with the same love and care!
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
              >
                🛒 Place Your Order Now!
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Engagement Bar */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-stone-800/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-stone-600/30">
            <p className="text-stone-300 mb-4">
              <span className="text-orange-400 font-bold">{viewers} people</span> are currently watching our chefs create magic! 
              <span className="text-white font-semibold"> Be part of the experience! 👨‍🍳✨</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                📺 Watch Full Kitchen Tour
              </Button>
              <Button 
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
              >
                🔥 Order What You See!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveKitchenFeed;