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
    <section className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us today or get in touch for reservations and inquiries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-300">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">Kuala Lumpur, Malaysia</p>
            <Button onClick={openGoogleMaps} variant="outline" size="sm">
              View on Map
            </Button>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-300">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">+60 12-345 6789</p>
            <Button asChild variant="outline" size="sm">
              <a href="tel:+60123456789">Call Now</a>
            </Button>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-300">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-muted-foreground mb-4">Daily: 11:30 AM - 11:00 PM</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-300">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">Quick Orders & Inquiries</p>
            <Button onClick={openWhatsApp} variant="default" size="sm">
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;