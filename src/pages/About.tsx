import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Heart, Leaf, Users, Award } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Beans",
    description: "We source only the finest single-origin beans from sustainable farms around the world.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building connections one cup at a time. Our space is your space.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "Committed to ethical practices and environmental responsibility.",
  },
  {
    icon: Heart,
    title: "Crafted With Love",
    description: "Every drink is prepared with passion and attention to detail.",
  },
];

const About = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

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
                Our Story
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
                About KAFFYN
              </h1>
              <p className="text-lg text-muted-foreground">
                More than just coffee. A place where stories brew and memories are made.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyRef} className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <img
                    src={cafeInterior}
                    alt="KAFFYN Interior"
                    className="rounded-2xl shadow-medium"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-medium hidden md:block">
                    <img
                      src={coffeeBeans}
                      alt="Coffee beans"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:pl-8"
              >
                <span className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
                  Est. 2024
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-primary mt-4 mb-6">
                  Where Conversations Brew Alongside Coffee
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    KAFFYN isn't just a cafe — it's a space where conversations brew alongside coffee. 
                    Born from a passion for exceptional coffee and meaningful connections, we set out to 
                    create more than just another coffee shop.
                  </p>
                  <p>
                    Our journey began with a simple belief: that the perfect cup of coffee has the power 
                    to transform ordinary moments into extraordinary memories. Every bean we source, every 
                    drink we craft, and every guest we welcome is a reflection of this philosophy.
                  </p>
                  <p>
                    From our carefully curated interior to our meticulously trained baristas, every detail 
                    at KAFFYN is designed to make you feel at home while experiencing something truly special.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="section-padding bg-cream">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
                What We Stand For
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mt-4">
                Our Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-soft mb-6">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default About;
