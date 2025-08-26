import { Heart, MapPin, Phone, Mail, Clock, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-deep text-ivory-warm py-12 pattern-overlay">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 cultural-accent">Khanjee</h3>
            <p className="text-ivory-soft mb-4 leading-relaxed">
              Authentic Pakistani cuisine in the heart of Kuala Lumpur. 
              Experience the warmth of Pakistani hospitality.
            </p>
            <div className="flex items-center gap-2 text-brass-light">
              <Star className="fill-current" size={16} />
              <span className="text-sm font-medium">4.8/5 Rating</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-brass-light flex-shrink-0 mt-1" size={16} />
                <div className="text-ivory-soft">
                  <p>123 Jalan Bukit Bintang</p>
                  <p>50200 Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brass-light flex-shrink-0" size={16} />
                <span className="text-ivory-soft">+60 12-345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-brass-light flex-shrink-0" size={16} />
                <span className="text-ivory-soft">info@khanjee.my</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="text-brass-light flex-shrink-0" size={16} />
                <div className="text-ivory-soft">
                  <p className="font-medium">Monday - Sunday</p>
                  <p>11:30 AM - 11:00 PM</p>
                </div>
              </div>
              <p className="text-sm text-ivory-soft/80 ml-7">
                Last order: 10:30 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#menu" className="block text-ivory-soft hover:text-brass-light transition-colors">
                Menu
              </a>
              <a href="#about" className="block text-ivory-soft hover:text-brass-light transition-colors">
                About Us
              </a>
              <a href="#reserve" className="block text-ivory-soft hover:text-brass-light transition-colors">
                Reservations
              </a>
              <a href="#contact" className="block text-ivory-soft hover:text-brass-light transition-colors">
                Contact
              </a>
              <a 
                href="https://wa.me/60123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-ivory-soft hover:text-brass-light transition-colors"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ivory-warm/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-ivory-soft text-sm mb-4 md:mb-0">
            © {currentYear} Khanjee Restaurant. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-ivory-soft text-sm">
            <span>Made with</span>
            <Heart className="text-spice-red fill-current" size={16} />
            <span>in Kuala Lumpur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;