import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to place an order at Khanjee Restaurant.");
    window.open(`https://wa.me/60123456789?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Kuala+Lumpur+Pakistani+Restaurant', '_blank');
  };

  return (
    <section className="py-16 bg-emerald-deep text-ivory-warm pattern-overlay">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 cultural-accent">
            Visit Us
          </h2>
          <p className="text-xl text-ivory-soft max-w-2xl mx-auto">
            Experience authentic Pakistani hospitality in the heart of Kuala Lumpur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-brass-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brass-gold/30 transition-colors">
              <MapPin className="text-brass-gold" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-ivory-soft mb-4">
              123 Jalan Bukit Bintang<br />
              50200 Kuala Lumpur<br />
              Malaysia
            </p>
            <Button variant="brass" size="sm" onClick={openGoogleMaps}>
              Get Directions
            </Button>
          </div>

          {/* Phone */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-brass-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brass-gold/30 transition-colors">
              <Phone className="text-brass-gold" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-ivory-soft mb-4">
              +60 12-345 6789<br />
              +60 3-2123 4567
            </p>
            <Button variant="brass" size="sm" asChild>
              <a href="tel:+60123456789">Call Now</a>
            </Button>
          </div>

          {/* Hours */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-brass-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brass-gold/30 transition-colors">
              <Clock className="text-brass-gold" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <div className="text-ivory-soft mb-4 space-y-1">
              <p>Monday - Sunday</p>
              <p className="font-medium text-brass-light">11:30 AM - 11:00 PM</p>
              <p className="text-sm">Last order: 10:30 PM</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-12">
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <MessageCircle className="w-12 h-12 text-brass-gold mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Quick Order via WhatsApp</h3>
            <p className="text-ivory-soft mb-6">
              Get instant confirmation and track your order easily
            </p>
            <Button variant="brass" size="lg" onClick={openWhatsApp} className="w-full">
              <MessageCircle className="mr-2" size={20} />
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;