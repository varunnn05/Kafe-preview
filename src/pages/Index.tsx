import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { FeaturedMenuSection } from "@/components/home/FeaturedMenuSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <HighlightsSection />
        <FeaturedMenuSection />
        <InstagramSection />
      </motion.div>
    </Layout>
  );
};

export default Index;
