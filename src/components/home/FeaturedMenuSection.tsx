import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import signatureDrink from "@/assets/signature-drink.jpg";
import pastry from "@/assets/pastry.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const featuredItems = [
  {
    name: "Kafe Signature Latte",
    description: "Our house specialty with hints of caramel and vanilla",
    price: "$6.50",
    image: signatureDrink,
    category: "Signature",
  },
  {
    name: "Butter Croissant",
    description: "Flaky, golden layers of pure buttery bliss",
    price: "$4.50",
    image: pastry,
    category: "Pastry",
  },
  {
    name: "Single Origin Pour Over",
    description: "Ethiopian Yirgacheffe with bright citrus notes",
    price: "$5.50",
    image: coffeeBeans,
    category: "Coffee",
  },
];

export const FeaturedMenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
            Curated Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-6">
            Featured Favorites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with care and served with a smile.
          </p>
        </motion.div>

        {/* Featured Items */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 right-6 text-primary-foreground"
                >
                  <span className="text-sm font-medium">{item.description}</span>
                </motion.div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                  {item.category}
                </span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl text-primary group-hover:text-coffee transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.description}
                  </p>
                </div>
                <span className="font-serif text-xl text-gold font-medium">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <Button variant="outline" size="lg" className="group">
              View Full Menu
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
