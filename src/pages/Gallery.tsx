import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import pastry from "@/assets/pastry.jpg";
import signatureDrink from "@/assets/signature-drink.jpg";
import cafeLifestyle from "@/assets/cafe-lifestyle.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const galleryImages = [
  { src: heroCoffee, alt: "Artisan latte art", category: "Drinks" },
  { src: cafeInterior, alt: "Cozy cafe interior", category: "Space" },
  { src: pastry, alt: "Fresh croissant", category: "Food" },
  { src: signatureDrink, alt: "Signature caramel latte", category: "Drinks" },
  { src: cafeLifestyle, alt: "Cafe lifestyle moment", category: "Lifestyle" },
  { src: coffeeBeans, alt: "Premium coffee beans", category: "Coffee" },
  { src: cafeInterior, alt: "Warm ambience", category: "Space" },
  { src: heroCoffee, alt: "Morning coffee", category: "Drinks" },
  { src: pastry, alt: "Bakery selection", category: "Food" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                Visual Stories
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
                Gallery
              </h1>
              <p className="text-lg text-muted-foreground">
                A glimpse into the KAFE experience. Every moment, every sip, every smile.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {image.category}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <motion.img
                src={selectedImage}
                alt="Gallery image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="max-w-full max-h-[90vh] rounded-lg shadow-medium"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  );
};

export default Gallery;
