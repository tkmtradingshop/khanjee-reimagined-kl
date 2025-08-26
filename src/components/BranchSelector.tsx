import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  deliveryTime: string;
}

interface BranchSelectorProps {
  selectedBranch: Branch | null;
  onBranchSelect: (branch: Branch) => void;
}

const branches: Branch[] = [
  {
    id: 1,
    name: "Khanjee Ampang",
    address: "Jalan Ampang, 50450 Kuala Lumpur",
    phone: "+60 3-4021 2345",
    hours: "11:00 AM - 11:00 PM",
    coordinates: { lat: 3.1569, lng: 101.7581 },
    deliveryTime: "25-35 mins"
  },
  {
    id: 2,
    name: "Khanjee KLCC",
    address: "Suria KLCC, 50088 Kuala Lumpur",
    phone: "+60 3-2166 5678",
    hours: "10:00 AM - 10:00 PM",
    coordinates: { lat: 3.1576, lng: 101.7119 },
    deliveryTime: "30-40 mins"
  },
  {
    id: 3,
    name: "Khanjee Bangsar",
    address: "Bangsar Village, 59200 Kuala Lumpur",
    phone: "+60 3-2282 9876",
    hours: "11:00 AM - 12:00 AM",
    coordinates: { lat: 3.1285, lng: 101.6739 },
    deliveryTime: "20-30 mins"
  }
];

const BranchSelector = ({ selectedBranch, onBranchSelect }: BranchSelectorProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Choose Your Nearest Branch
          </h2>
          <p className="text-muted-foreground">
            Select a location to place your order
          </p>
        </div>

        {/* Selected Branch Display */}
        {selectedBranch && (
          <div className="mb-6 max-w-md mx-auto">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{selectedBranch.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedBranch.deliveryTime}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    Change
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Branch Selection */}
        {(!selectedBranch || isExpanded) && (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {branches.map((branch) => (
              <Card 
                key={branch.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  selectedBranch?.id === branch.id 
                    ? 'border-primary shadow-md bg-gradient-to-br from-primary/5 to-accent/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => {
                  onBranchSelect(branch);
                  setIsExpanded(false);
                }}
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {branch.name}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{branch.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{branch.hours}</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">
                          Delivery: {branch.deliveryTime}
                        </span>
                        {selectedBranch?.id === branch.id && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BranchSelector;