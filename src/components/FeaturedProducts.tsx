import { motion } from "framer-motion";
import oxfordImg from "@/assets/oxford-shoe.png";
import chelseaImg from "@/assets/chelsea-boot.png";

import beltImg from "@/assets/belt.png";

const products = [
  { name: "The Oxford", price: "$245", image: oxfordImg },
  { name: "The Chelsea", price: "$265", image: chelseaImg },
  { name: "The Slide", price: "$125", image: "/lovable-uploads/f2a0d094-b6da-4c69-b0b8-45c706cb4036.jpg" },
  { name: "The Belt", price: "$95", image: beltImg },
];

const FeaturedProducts = () => {
  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <span className="section-label">The Collection</span>
        <h2 className="text-foreground text-4xl md:text-5xl font-bold mt-4 mb-16">Featured Products</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.5, bounce: 0, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider">View Details</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold text-foreground text-sm">{product.name}</p>
                <p className="text-foreground/60 text-sm">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
