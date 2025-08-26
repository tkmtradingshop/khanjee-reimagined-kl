import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, Phone } from "lucide-react";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const timeSlots = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for reservation logic
    alert(`Reservation request submitted for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 cultural-accent">
            Reserve Your Table
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your table for an unforgettable Pakistani dining experience
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card-premium p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="+60 12-345 6789"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Guests */}
              <div>
                <Label htmlFor="guests" className="text-foreground font-medium">Number of Guests *</Label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="mt-2 w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <Label htmlFor="date" className="text-foreground font-medium">Preferred Date *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-2"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time */}
              <div>
                <Label htmlFor="time" className="text-foreground font-medium">Preferred Time *</Label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="mt-2 w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mb-6">
              <Label htmlFor="specialRequests" className="text-foreground font-medium">Special Requests</Label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="mt-2 w-full min-h-[100px] px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                placeholder="Any dietary restrictions, celebrations, or special accommodations..."
              />
            </div>

            {/* Submit Button */}
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Calendar className="mr-2" size={20} />
              Reserve Table
            </Button>

            {/* Contact Note */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>We'll confirm your reservation within 2 hours via phone or SMS.</p>
              <p className="mt-2">For immediate assistance, call us at <span className="text-brass-gold font-medium">+60 12-345 6789</span></p>
            </div>
          </form>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-deep/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-emerald-deep" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Easy Booking</h3>
            <p className="text-muted-foreground">Reserve your table in just a few clicks</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-deep/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-emerald-deep" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Quick Confirmation</h3>
            <p className="text-muted-foreground">Get confirmed within 2 hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-deep/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-emerald-deep" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Group Friendly</h3>
            <p className="text-muted-foreground">Perfect for families and celebrations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;