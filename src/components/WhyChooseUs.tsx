import { motion } from "framer-motion";
import { Shield, Gem, Footprints } from "lucide-react";

const reasons = [
  {
    icon: Footprints,
    title: "Engineered Comfort",
    description: "Anatomically contoured insoles with memory foam cushioning adapt to your stride from day one.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "360° Goodyear welt construction means every pair can be resoled — a shoe for decades, not seasons.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Full-grain leather sourced from heritage tanneries. No shortcuts, no synthetics, no compromise.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">The Difference</span>
          <h2 className="text-foreground text-4xl md:text-5xl font-bold mt-4">Why Supahz</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.5, bounce: 0, delay: i * 0.1 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <reason.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{reason.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
