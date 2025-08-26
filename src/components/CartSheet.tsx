import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const CartSheet = ({ 
  isOpen, 
  onOpenChange, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout 
}: CartSheetProps) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = totalPrice > 50 ? 0 : 8;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="pb-6">
          <SheetTitle className="flex items-center gap-2 text-emerald-deep">
            <ShoppingCart size={24} />
            Your Order ({totalItems} items)
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingCart size={64} className="text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Add some delicious Pakistani dishes to get started!</p>
            <Button variant="hero" onClick={() => onOpenChange(false)}>
              Browse Menu
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto pb-6">
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">RM {item.price.toFixed(2)} each</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-muted hover:bg-emerald-light/20 flex items-center justify-center transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-emerald-light/20 hover:bg-emerald-light/40 flex items-center justify-center transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold text-brass-gold">
                        RM {(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-destructive hover:text-destructive/80 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-border pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>RM {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? "text-emerald-deep" : ""}>
                    {deliveryFee === 0 ? "FREE" : `RM ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                {deliveryFee === 0 && (
                  <p className="text-xs text-emerald-deep">🎉 Free delivery on orders over RM 50!</p>
                )}
                <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                  <span>Total</span>
                  <span className="text-brass-gold">RM {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Options */}
              <div className="space-y-3">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={onCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="elegant" size="sm">
                    🏠 Delivery
                  </Button>
                  <Button variant="elegant" size="sm">
                    🏃 Pickup
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;