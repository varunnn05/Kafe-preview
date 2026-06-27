import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import signatureDrink from "@/assets/signature-drink.jpg";
import pastry from "@/assets/pastry.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import heroCoffee from "@/assets/hero-coffee.jpg";

const categories = ["All", "Coffee", "Signature", "Breakfast", "Desserts", "Specials"];

const menuItems = [
  // Coffee
  { name: "Espresso", description: "Bold and concentrated, the purest expression of coffee", price: "$3.50", category: "Coffee", image: coffeeBeans },
  { name: "Americano", description: "Espresso with hot water for a smooth, rich flavor", price: "$4.00", category: "Coffee", image: heroCoffee },
  { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: "$5.00", category: "Coffee", image: heroCoffee },
  { name: "Latte", description: "Espresso with silky steamed milk and light foam", price: "$5.50", category: "Coffee", image: heroCoffee },
  { name: "Pour Over", description: "Hand-crafted, single-origin Ethiopian Yirgacheffe", price: "$5.50", category: "Coffee", image: coffeeBeans },
  // Signature
  { name: "Kaffyn Signature Latte", description: "House specialty with caramel and vanilla notes", price: "$6.50", category: "Signature", image: signatureDrink },
  { name: "Honey Lavender Latte", description: "Floral lavender with local honey sweetness", price: "$6.50", category: "Signature", image: signatureDrink },
  { name: "Maple Oat Latte", description: "Pure maple syrup with creamy oat milk", price: "$6.00", category: "Signature", image: signatureDrink },
  // Breakfast
  { name: "Avocado Toast", description: "Sourdough with fresh avocado and poached egg", price: "$12.00", category: "Breakfast", image: pastry },
  { name: "Eggs Benedict", description: "Classic preparation with hollandaise", price: "$14.00", category: "Breakfast", image: pastry },
  { name: "Granola Bowl", description: "House granola with yogurt and seasonal fruits", price: "$9.00", category: "Breakfast", image: pastry },
  // Desserts
  { name: "Butter Croissant", description: "Flaky, golden layers of pure buttery bliss", price: "$4.50", category: "Desserts", image: pastry },
  { name: "Almond Croissant", description: "Filled with almond cream and topped with sliced almonds", price: "$5.50", category: "Desserts", image: pastry },
  { name: "Tiramisu", description: "Classic Italian dessert with espresso-soaked ladyfingers", price: "$8.00", category: "Desserts", image: pastry },
  // Specials
  { name: "Affogato", description: "Vanilla gelato drowned in a shot of hot espresso", price: "$7.00", category: "Specials", image: signatureDrink },
  { name: "Cold Brew Flight", description: "Three cold brews from different origins", price: "$12.00", category: "Specials", image: coffeeBeans },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                Curated with Care
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
                Our Menu
              </h1>
              <p className="text-lg text-muted-foreground">
                From hand-crafted coffees to freshly baked pastries, discover your new favorite.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-md z-40">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section ref={ref} className="section-padding">
          <div className="container-wide">
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  layout
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-xl text-primary group-hover:text-coffee transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg text-gold font-medium">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No items found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Menu;
