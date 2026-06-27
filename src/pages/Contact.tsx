import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                Get in Touch
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={ref} className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-serif text-3xl text-primary mb-6">
                    Visit Us
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    We're located in the heart of downtown, ready to welcome you with a warm cup of coffee.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cream">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Coffee Street<br />
                        Downtown District, City 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cream">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cream">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">hellokafe@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cream">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary mb-1">Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 7:00 AM - 9:00 PM<br />
                        Saturday - Sunday: 8:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-soft h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095911367!2d-74.00425872426903!3d40.71277937132526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1705000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-cream rounded-2xl p-8 lg:p-10">
                  <h2 className="font-serif text-2xl text-primary mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="h-12 bg-background"
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
                          placeholder="your@email.com"
                          className="h-12 bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="h-12 bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us more..."
                        rows={5}
                        className="bg-background"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full group">
                      Send Message
                      <Send className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Contact;
