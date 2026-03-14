import { motion } from "framer-motion";
import craftsmanshipImg from "@/assets/craftsmanship.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="overflow-hidden"
        >
          <img
            src={craftsmanshipImg}
            alt="Close-up of Supahz Cordwainer stitching detail"
            className="w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="section-label">The Cordwainer's Logic</span>
          <h2 className="text-foreground text-4xl md:text-5xl font-bold">Crafted to Endure</h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Durability isn't a feature; it's a requirement. We use 360° Goodyear welting
            for a lifetime of resoling. Each pair passes through 48 hours of hand-lasting,
            ensuring a silhouette that holds its form for decades.
          </p>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Our artisans select only 3.2mm full-grain leather — thick enough for structure,
            supple enough for comfort from the first wear.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
