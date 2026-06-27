import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Home, CakeSlice, Wifi } from "lucide-react";

const highlights = [
  {
    icon: Coffee,
    title: "Artisan Coffee",
    description: "Single-origin beans, expertly roasted and brewed to perfection.",
  },
  {
    icon: Home,
    title: "Cozy Ambience",
    description: "A warm space designed for comfort, conversation, and creativity.",
  },
  {
    icon: CakeSlice,
    title: "Fresh Bakes",
    description: "Daily pastries and treats made with love in our kitchen.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected while you work or relax with friends.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-background rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6"
              >
                <item.icon className="w-7 h-7 text-coffee" />
              </motion.div>
              <h3 className="font-serif text-xl text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
