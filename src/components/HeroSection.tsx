import { motion } from "framer-motion";
import heroShoe from "@/assets/hero-shoe.png";

const transition = { type: "spring", duration: 0.6, bounce: 0 };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          className="flex flex-col gap-8"
        >
          <span className="section-label">Precision-Engineered Footwear</span>
          <h1 className="text-foreground" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.05 }}>
            Step Into<br />Timeless Style
          </h1>
          <p className="text-lg text-foreground/60 max-w-md" style={{ lineHeight: 1.6 }}>
            From hand-welted Oxfords to the effortless Slide. 3.2mm full-grain leather. 48-hour lasting process.
          </p>
          <div>
            <motion.a
              href="#collection"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-primary text-primary-foreground px-12 py-5 text-sm font-bold uppercase tracking-widest"
            >
              Shop Now
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <img
            src={heroShoe}
            alt="Supahz Cordwainer Black Oxford Shoe"
            className="w-full max-w-lg drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
