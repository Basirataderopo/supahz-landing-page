const Footer = () => {
  return (
    <footer className="py-12 bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg font-bold tracking-tight">SUPAHZ</span>
        <p className="text-sm text-accent-foreground/50">
          © {new Date().getFullYear()} Supahz Cordwainer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
