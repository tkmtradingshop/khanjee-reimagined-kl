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
  const metrics = [{
    id: "visitors",
    label: "Today's Visitors",
    value: visitorCount.toLocaleString(),
    icon: Users,
    change: "+12%",
    changeType: "positive",
    color: "from-blue-500 to-cyan-500"
  }, {
    id: "orders",
    label: "Orders Today",
    value: todayOrders.toString(),
    icon: TrendingUp,
    change: "+8%",
    changeType: "positive",
    color: "from-green-500 to-emerald-500"
  }, {
    id: "reservations",
    label: "Active Reservations",
    value: activeReservations.toString(),
    icon: Calendar,
    change: "+3%",
    changeType: "positive",
    color: "from-purple-500 to-pink-500"
  }, {
    id: "rating",
    label: "Average Rating",
    value: "4.8",
    icon: Star,
    change: "+0.2",
    changeType: "positive",
    color: "from-yellow-500 to-orange-500"
  }];
  const recentActivity = [{
    time: "2 min ago",
    action: "New order from Kuala Lumpur",
    type: "order"
  }, {
    time: "5 min ago",
    action: "Table reservation for 6 people",
    type: "reservation"
  }, {
    time: "8 min ago",
    action: "5-star review received",
    type: "review"
  }, {
    time: "12 min ago",
    action: "New customer registered",
    type: "customer"
  }, {
    time: "15 min ago",
    action: "Order delivered to Petaling Jaya",
    type: "delivery"
  }];
  const branches = [{
    name: "KL Central",
    visitors: 89,
    orders: 34,
    status: "busy"
  }, {
    name: "Petaling Jaya",
    visitors: 67,
    orders: 28,
    status: "moderate"
  }, {
    name: "Shah Alam",
    visitors: 91,
    orders: 27,
    status: "busy"
  }];
  return;
};
export default LiveCrmDashboard;