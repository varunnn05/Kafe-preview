import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import pastry from "@/assets/pastry.jpg";
import signatureDrink from "@/assets/signature-drink.jpg";
import cafeLifestyle from "@/assets/cafe-lifestyle.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const instagramImages = [
  heroCoffee,
  cafeInterior,
  pastry,
  signatureDrink,
  cafeLifestyle,
  coffeeBeans,
];

export const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
            @kafe.cafe
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-6">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community and share your KAFE moments with us.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/creating.presence"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt="Instagram"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="p-4 rounded-full bg-background/20 backdrop-blur-sm"
                >
                  <Instagram className="w-6 h-6 text-primary-foreground" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
