import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const MinimalSignup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) {
      toast({
        title: "Almost there!",
        description: "Please enter both email and phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate CRM integration
    setTimeout(() => {
      toast({
        title: "Welcome aboard! ✨",
        description: "You'll receive exclusive offers soon!",
      });
      setEmail("");
      setPhone("");
      setIsLoading(false);
    }, 1200);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Simple Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-gray-500 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Join 2,847 food lovers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Stay in the loop
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              Get exclusive deals, new menu updates, and special offers delivered straight to you.
            </p>
          </div>

          {/* Minimal Form */}
          <form onSubmit={handleSignup} className="space-y-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 text-base bg-white border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-0 transition-colors"
                required
              />
              
              <Input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-12 px-4 text-base bg-white border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="h-12 px-8 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 group"
            >
              {isLoading ? (
                <span>Joining...</span>
              ) : (
                <>
                  <span>Join now</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Simple Promise */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Exclusive deals first</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>New menu previews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Special birthday treats</span>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-gray-400 mt-8 max-w-md mx-auto">
            We respect your privacy. Unsubscribe at any time. No spam, just good food updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MinimalSignup;