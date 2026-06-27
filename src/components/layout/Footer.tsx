import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import kaffynLogo from "@/assets/cafe_logo_dark.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reservations", path: "/reservations" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={kaffynLogo} alt="Kaffyn" className="h-16 w-auto mb-4 invert" />
            </Link>
            <p className="text-primary-foreground/80 mb-6 font-light">
              Brewed with passion. Served with love.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/kaffyn.cafe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-gold" />
                <span className="text-sm text-primary-foreground/70">
                  123 Coffee Street<br />Downtown District
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span className="text-sm text-primary-foreground/70">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span className="text-sm text-primary-foreground/70">
                  hello@kafe@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 text-gold" />
                <div className="text-sm text-primary-foreground/70">
                  <p>Mon - Fri: 7AM - 9PM</p>
                  <p>Sat - Sun: 8AM - 10PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="gold" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Kafe. All rights reserved. Crafted with ♥
          </p>
        </div>
      </div>
    </footer>
  );
};
