import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Star,
  Truck,
  ChefHat,
  Package,
  Home
} from "lucide-react";

interface OrderData {
  id: string;
  items: Array<{id: number; name: string; price: number; quantity: number}>;
  customer: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
  };
  delivery: 'delivery' | 'pickup';
  total: number;
  estimatedTime: string;
  branch: {
    name: string;
    address: string;
    phone: string;
  } | null;
  timestamp: string;
}

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: OrderData | null;
}

const OrderConfirmation = ({ isOpen, onClose, orderData }: OrderConfirmationProps) => {
  const [currentStatus, setCurrentStatus] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const statusSteps = orderData?.delivery === 'delivery' 
    ? [
        { icon: CheckCircle2, label: "Order Confirmed", time: "Now" },
        { icon: ChefHat, label: "Preparing", time: "5 mins" },
        { icon: Package, label: "Ready for Delivery", time: "25 mins" },
        { icon: Truck, label: "Out for Delivery", time: "30 mins" },
        { icon: Home, label: "Delivered", time: "40 mins" }
      ]
    : [
        { icon: CheckCircle2, label: "Order Confirmed", time: "Now" },
        { icon: ChefHat, label: "Preparing", time: "5 mins" },
        { icon: Package, label: "Ready for Pickup", time: "15 mins" }
      ];

  useEffect(() => {
    if (!isOpen || !orderData) return;
    
    // Simulate order progress
    const interval = setInterval(() => {
      setCurrentStatus(prev => {
        const next = Math.min(prev + 1, statusSteps.length - 1);
        setProgress((next / (statusSteps.length - 1)) * 100);
        return next;
      });
    }, 8000); // Change status every 8 seconds for demo

    return () => clearInterval(interval);
  }, [isOpen, orderData, statusSteps.length]);

  if (!orderData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-emerald-deep flex items-center gap-2">
            <CheckCircle2 className="text-emerald-600" />
            Order Confirmed!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order ID & Success Message */}
          <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="text-lg font-semibold text-emerald-800 mb-2">
              Thank you for your order, {orderData.customer.name}!
            </h3>
            <p className="text-emerald-600 mb-3">
              Your delicious Pakistani meal is being prepared with love
            </p>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 font-bold text-lg px-4 py-2">
                Order #{orderData.id}
              </Badge>
            </div>
          </div>

          {/* Order Status Tracking */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Order Status</h3>
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  {statusSteps[currentStatus].label}
                </Badge>
              </div>
              
              <Progress value={progress} className="mb-6" />
              
              <div className="space-y-4">
                {statusSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                      index <= currentStatus
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-muted/20 text-muted-foreground'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      index <= currentStatus ? 'bg-emerald-600 text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <step.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium">{step.label}</span>
                      {index <= currentStatus && (
                        <div className="flex items-center gap-1 text-sm">
                          <Clock size={12} />
                          <span>{step.time}</span>
                        </div>
                      )}
                    </div>
                    {index <= currentStatus && (
                      <CheckCircle2 size={20} className="text-emerald-600" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-brass-gold/10 rounded-lg flex items-center gap-3">
                <Clock className="text-brass-gold" size={20} />
                <div>
                  <p className="font-medium">Estimated {orderData.delivery === 'delivery' ? 'Delivery' : 'Pickup'} Time</p>
                  <p className="text-sm text-muted-foreground">{orderData.estimatedTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Your Order</h3>
                <div className="space-y-3">
                  {orderData.items.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground ml-2">× {item.quantity}</span>
                      </div>
                      <span>RM {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-brass-gold">RM {orderData.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">
                  {orderData.delivery === 'delivery' ? 'Delivery Details' : 'Pickup Details'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{orderData.branch?.name}</p>
                      <p className="text-sm text-muted-foreground">{orderData.branch?.address}</p>
                    </div>
                  </div>
                  
                  {orderData.delivery === 'delivery' && orderData.customer.address && (
                    <div className="flex items-start gap-2">
                      <Home size={16} className="mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Delivery Address</p>
                        <p className="text-sm text-muted-foreground">{orderData.customer.address}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-muted-foreground" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-sm text-muted-foreground">{orderData.customer.phone}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => window.open(`tel:${orderData.branch?.phone}`, '_self')}
              variant="outline"
              className="flex-1"
            >
              <Phone className="mr-2" size={16} />
              Call Restaurant
            </Button>
            
            <Button
              onClick={() => {
                // In a real app, this would generate a proper receipt
                alert('Receipt will be sent to your email address');
              }}
              variant="outline"
              className="flex-1"
            >
              📧 Email Receipt
            </Button>
            
            <Button onClick={onClose} className="flex-1">
              Continue Browsing
            </Button>
          </div>

          {/* Social Proof & Trust */}
          <div className="text-center p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="text-brass-gold fill-brass-gold" size={16} />
              <span className="font-medium">4.9/5</span>
              <span className="text-muted-foreground">from 2,847 reviews</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Join thousands of satisfied customers who love our authentic Pakistani cuisine
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderConfirmation;