import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <span className="section-label">Get in Touch</span>
          <h2 className="text-foreground text-4xl md:text-5xl font-bold mt-4">Make an Inquiry</h2>
          <p className="text-foreground/60 mt-4">
            Questions about sizing, materials, or custom orders? We're here to help.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl font-display font-bold text-foreground">Thank you for reaching out.</p>
            <p className="text-foreground/60 mt-2">We'll respond within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-secondary px-4 py-4 text-sm text-foreground placeholder:text-foreground/40 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-secondary px-4 py-4 text-sm text-foreground placeholder:text-foreground/40 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <textarea
              placeholder="Your message"
              rows={5}
              required
              className="w-full bg-secondary px-4 py-4 text-sm text-foreground placeholder:text-foreground/40 border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-12 py-5 text-sm font-bold uppercase tracking-widest self-start"
            >
              Send Inquiry
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
