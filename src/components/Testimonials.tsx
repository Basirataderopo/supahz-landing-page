import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Oxfords feel like they were made for my feet. Six months in, they only look better with age.",
    author: "Basirat O.",
    role: "Architect",
  },
  {
    quote: "Finally, slides that don't look cheap. The leather quality is unmistakable.",
    author: "Amara K.",
    role: "Creative Director",
  },
  {
    quote: "I've owned shoes three times the price that don't compare to the Chelsea boots. Exceptional value.",
    author: "Daniel R.",
    role: "Consultant",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="text-foreground text-4xl md:text-5xl font-bold mt-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.5, bounce: 0, delay: i * 0.1 }}
              className="bg-background p-8 flex flex-col gap-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="text-foreground/80 text-lg leading-relaxed italic">"{t.quote}"</p>
              <footer className="mt-auto">
                <p className="font-bold text-foreground text-sm">{t.author}</p>
                <p className="text-foreground/50 text-sm">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
