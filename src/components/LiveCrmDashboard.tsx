import { useState, useEffect } from "react";
import { Users, TrendingUp, Clock, MapPin, Phone, Calendar, Eye, Star } from "lucide-react";

const LiveCrmDashboard = () => {
  const [visitorCount, setVisitorCount] = useState(247);
  const [todayOrders, setTodayOrders] = useState(89);
  const [activeReservations, setActiveReservations] = useState(12);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random visitor updates every 30 seconds
      if (Math.random() < 0.3) {
        setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
      
      // Random order updates
      if (Math.random() < 0.2) {
        setTodayOrders(prev => prev + 1);
      }

      // Update time every second
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      id: "visitors",
      label: "Today's Visitors",
      value: visitorCount.toLocaleString(),
      icon: Users,
      change: "+12%",
      changeType: "positive",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "orders",
      label: "Orders Today",
      value: todayOrders.toString(),
      icon: TrendingUp,
      change: "+8%",
      changeType: "positive",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "reservations",
      label: "Active Reservations",
      value: activeReservations.toString(),
      icon: Calendar,
      change: "+3%",
      changeType: "positive",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "rating",
      label: "Average Rating",
      value: "4.8",
      icon: Star,
      change: "+0.2",
      changeType: "positive",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const recentActivity = [
    { time: "2 min ago", action: "New order from Kuala Lumpur", type: "order" },
    { time: "5 min ago", action: "Table reservation for 6 people", type: "reservation" },
    { time: "8 min ago", action: "5-star review received", type: "review" },
    { time: "12 min ago", action: "New customer registered", type: "customer" },
    { time: "15 min ago", action: "Order delivered to Petaling Jaya", type: "delivery" }
  ];

  const branches = [
    { name: "KL Central", visitors: 89, orders: 34, status: "busy" },
    { name: "Petaling Jaya", visitors: 67, orders: 28, status: "moderate" },
    { name: "Shah Alam", visitors: 91, orders: 27, status: "busy" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full mb-6 shadow-lg">
            <Eye className="w-6 h-6" />
            <span className="font-bold text-lg">Live Restaurant Analytics</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Real-Time Customer
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Analytics Dashboard
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-medium mb-6">
            Track your restaurant's performance with live visitor counts, order statistics, and customer insights
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span className="font-mono text-lg">
              Last updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.id}
                className="relative bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-sm font-bold px-2 py-1 rounded-full ${
                      metric.changeType === 'positive' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {metric.change}
                    </div>
                  </div>
                  
                  <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {metric.value}
                  </div>
                  
                  <div className="text-sm font-semibold text-muted-foreground">
                    {metric.label}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Branch Performance & Activity Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Branch Performance */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Branch Performance</h3>
            </div>
            
            <div className="space-y-4">
              {branches.map((branch, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      branch.status === 'busy' ? 'bg-red-400 animate-pulse' : 
                      branch.status === 'moderate' ? 'bg-yellow-400' : 'bg-green-400'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-foreground">{branch.name}</div>
                      <div className="text-sm text-muted-foreground">{branch.visitors} visitors today</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{branch.orders}</div>
                    <div className="text-xs text-muted-foreground">orders</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Live Activity</h3>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 hover:bg-muted/30 rounded-lg transition-colors duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="text-sm text-foreground">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    activity.type === 'order' ? 'bg-green-100 text-green-600' :
                    activity.type === 'reservation' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {activity.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-primary-foreground">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Detailed Analytics?</h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Contact our team for comprehensive business insights and custom reporting
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="font-mono text-xl font-bold">+60 12-345 6789</div>
                <div className="text-primary-foreground/80">•</div>
                <div className="text-primary-foreground/90">analytics@khanjee.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCrmDashboard;