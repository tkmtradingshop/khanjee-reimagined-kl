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
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Visit Us Today</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience authentic Pakistani cuisine in the heart of Kuala Lumpur
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">
              123 Jalan Bukit Bintang<br />
              Kuala Lumpur, Malaysia
            </p>
            <Button variant="outline" onClick={openGoogleMaps}>
              Get Directions
            </Button>
          </div>

          <div className="text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">
              +60 12-345-6789<br />
              Available 24/7
            </p>
            <Button variant="outline" onClick={() => window.open('tel:+60123456789')}>
              Call Now
            </Button>
          </div>

          <div className="text-center">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">
              Quick orders &amp; inquiries<br />
              Fast response guaranteed
            </p>
            <Button onClick={openWhatsApp}>
              Chat Now
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <span>Open Daily: 11:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;