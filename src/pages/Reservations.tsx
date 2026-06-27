import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Reservations = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Reservation Confirmed!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center bg-cream pt-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="text-center p-12 max-w-md"
          >
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-serif text-3xl text-primary mb-4">
              Reservation Confirmed!
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you, {formData.name}! We've received your reservation for {formData.guests} guests on {formData.date} at {formData.time}. A confirmation email has been sent to {formData.email}.
            </p>
            <Button variant="hero" onClick={() => setIsSubmitted(false)}>
              Make Another Reservation
            </Button>
          </motion.div>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero */}
        <section className="pt-32 pb-16 bg-cream">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
                Reserve Your Spot
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
                Book a Table
              </h1>
              <p className="text-lg text-muted-foreground">
                Secure your perfect spot for an unforgettable KAFFYN experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Full Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 123-4567"
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary flex items-center gap-2">
                        <Calendar size={16} /> Date
                      </label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary flex items-center gap-2">
                        <Clock size={16} /> Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-lg border border-input bg-background px-3 text-sm"
                      >
                        <option value="">Select time</option>
                        {["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary flex items-center gap-2">
                        <Users size={16} /> Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-lg border border-input bg-background px-3 text-sm"
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Special Requests</label>
                    <Textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Any dietary requirements or special occasions?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Confirm Reservation
                  </Button>
                </form>
              </motion.div>

              {/* Image & Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={cafeInterior}
                    alt="KAFFYN Interior"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                <div className="bg-cream rounded-2xl p-8">
                  <h3 className="font-serif text-2xl text-primary mb-4">
                    Reservation Policy
                  </h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li>• Reservations are held for 15 minutes past booking time</li>
                    <li>• For parties larger than 8, please call us directly</li>
                    <li>• Cancellations should be made at least 2 hours in advance</li>
                    <li>• Walk-ins are welcome based on availability</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Reservations;
