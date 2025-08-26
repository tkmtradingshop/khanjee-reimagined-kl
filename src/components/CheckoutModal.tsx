import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  MapPin, 
  Clock, 
  Truck, 
  Store,
  CheckCircle,
  Gift,
  Percent,
  Shield,
  Star
} from "lucide-react";

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
  deliveryTime: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  selectedBranch: Branch | null;
  onOrderComplete: (orderData: any) => void;
}

const CheckoutModal = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  selectedBranch, 
  onOrderComplete 
}: CheckoutModalProps) => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'ewallet' | 'cash'>('card');
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryType === 'delivery' ? (subtotal > 50 ? 0 : 8) : 0;
  const discount = subtotal * (promoDiscount / 100);
  const total = subtotal + deliveryFee - discount;

  const promoCodes = {
    'WELCOME20': 20,
    'FIRST15': 15,
    'KHANJEE10': 10,
    'STUDENT': 15
  };

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase();
    if (promoCodes[code as keyof typeof promoCodes]) {
      setPromoDiscount(promoCodes[code as keyof typeof promoCodes]);
    }
  };

  const handleOrderSubmit = () => {
    const orderData = {
      id: `KJ${Date.now()}`,
      items: cartItems,
      customer: customerInfo,
      delivery: deliveryType,
      payment: paymentMethod,
      branch: selectedBranch,
      subtotal,
      deliveryFee,
      discount,
      total,
      promoCode: promoDiscount > 0 ? promoCode : null,
      status: 'confirmed',
      estimatedTime: deliveryType === 'delivery' ? '35-45 mins' : '15-20 mins',
      timestamp: new Date().toISOString()
    };
    
    onOrderComplete(orderData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-emerald-deep flex items-center gap-2">
            <CheckCircle className="text-emerald-deep" />
            Complete Your Order
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Order Details */}
          <div className="space-y-6">
            {/* Delivery Type */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Truck size={20} />
                  Delivery Method
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={deliveryType === 'delivery' ? 'default' : 'outline'}
                    onClick={() => setDeliveryType('delivery')}
                    className="flex flex-col items-center p-4 h-auto"
                  >
                    <Truck size={24} className="mb-2" />
                    <span>Delivery</span>
                    <span className="text-xs text-muted-foreground">25-35 mins</span>
                  </Button>
                  <Button
                    variant={deliveryType === 'pickup' ? 'default' : 'outline'}
                    onClick={() => setDeliveryType('pickup')}
                    className="flex flex-col items-center p-4 h-auto"
                  >
                    <Store size={24} className="mb-2" />
                    <span>Pickup</span>
                    <span className="text-xs text-muted-foreground">15-20 mins</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        placeholder="+60 12-345 6789"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  {deliveryType === 'delivery' && (
                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Input
                        id="address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        placeholder="Full delivery address with postcode"
                      />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Input
                      id="notes"
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      placeholder="Any special requests or dietary requirements"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CreditCard size={20} />
                  Payment Method
                </h3>
                <Tabs value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as any)}>
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="card" className="flex items-center gap-2">
                      <CreditCard size={16} />
                      Card
                    </TabsTrigger>
                    <TabsTrigger value="ewallet" className="flex items-center gap-2">
                      <Smartphone size={16} />
                      E-Wallet
                    </TabsTrigger>
                    <TabsTrigger value="cash" className="flex items-center gap-2">
                      <Building2 size={16} />
                      Cash
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card" className="mt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield size={16} />
                        <span>Secure payment with SSL encryption</span>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg text-sm">
                        💳 Pay with Visa, Mastercard, or American Express
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ewallet" className="mt-4">
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-3 rounded-lg text-sm">
                        📱 Pay with GrabPay, Boost, TouchNGo, or FPX
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="cash" className="mt-4">
                    <div className="bg-muted/50 p-3 rounded-lg text-sm">
                      💵 Pay cash on {deliveryType === 'delivery' ? 'delivery' : 'pickup'}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Gift size={20} />
                  Promo Code
                </h3>
                <div className="flex gap-2">
                  <Input
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                  />
                  <Button onClick={applyPromoCode} variant="outline">
                    Apply
                  </Button>
                </div>
                {promoDiscount > 0 && (
                  <div className="mt-2 flex items-center gap-2 text-emerald-600">
                    <CheckCircle size={16} />
                    <span className="text-sm">{promoDiscount}% discount applied!</span>
                  </div>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">WELCOME20</Badge>
                  <Badge variant="outline" className="text-xs">FIRST15</Badge>
                  <Badge variant="outline" className="text-xs">STUDENT</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Your Order</h3>
                <div className="space-y-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground ml-2">× {item.quantity}</span>
                      </div>
                      <span className="font-medium">RM {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Branch Info */}
            {selectedBranch && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin size={20} />
                    {deliveryType === 'delivery' ? 'Preparing at' : 'Pickup from'}
                  </h3>
                  <p className="font-medium">{selectedBranch.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedBranch.address}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Clock size={16} />
                    <span>Ready in {selectedBranch.deliveryTime}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Order Total */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>RM {subtotal.toFixed(2)}</span>
                  </div>
                  {deliveryType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className={deliveryFee === 0 ? "text-emerald-600" : ""}>
                        {deliveryFee === 0 ? "FREE" : `RM ${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                  )}
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span className="flex items-center gap-1">
                        <Percent size={16} />
                        Discount ({promoDiscount}%)
                      </span>
                      <span>-RM {discount.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-brass-gold">RM {total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button
                  onClick={handleOrderSubmit}
                  className="w-full mt-6"
                  size="lg"
                  disabled={!customerInfo.name || !customerInfo.phone || (deliveryType === 'delivery' && !customerInfo.address)}
                >
                  <CheckCircle className="mr-2" size={20} />
                  Confirm Order
                </Button>

                {/* Trust Indicators */}
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield size={14} />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span>4.9★ Rated</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={14} />
                    <span>Halal Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;