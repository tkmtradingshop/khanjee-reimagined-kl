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
  return;
};
export default ContactSection;