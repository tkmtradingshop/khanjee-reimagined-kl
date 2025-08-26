import { useState, useEffect } from "react";
import { Truck, Gift } from "lucide-react";

interface DeliveryProgressBarProps {
  cartTotal: number;
}

const DeliveryProgressBar = ({ cartTotal }: DeliveryProgressBarProps) => {
  const freeDeliveryThreshold = 50;
  const progress = Math.min((cartTotal / freeDeliveryThreshold) * 100, 100);
  const remainingAmount = Math.max(freeDeliveryThreshold - cartTotal, 0);

  if (cartTotal === 0) return null;

  return (
    <div className="fixed top-20 right-6 z-40 bg-card border border-border/50 rounded-xl shadow-elegant p-4 max-w-sm backdrop-blur-md animate-fade-in">
      <div className="flex items-center gap-2 mb-3">
        <Truck className="w-5 h-5 text-brass-gold" />
        <span className="text-sm font-semibold text-foreground">
          {progress >= 100 ? "Free Delivery Unlocked!" : "Free Delivery Progress"}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground">
            RM{cartTotal.toFixed(2)} / RM{freeDeliveryThreshold}
          </span>
          <span className="text-xs font-medium text-brass-gold">
            {Math.round(progress)}%
          </span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-brass-gold to-brass-light h-2 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {progress >= 100 && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-light to-brass-gold animate-pulse" />
            )}
          </div>
        </div>
      </div>
      
      {progress >= 100 ? (
        <div className="flex items-center gap-2 text-emerald-light">
          <Gift className="w-4 h-4" />
          <span className="text-xs font-medium">
            🎉 You've earned free delivery!
          </span>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          Add <span className="font-semibold text-brass-gold">RM{remainingAmount.toFixed(2)}</span> more for free delivery
        </p>
      )}
    </div>
  );
};

export default DeliveryProgressBar;