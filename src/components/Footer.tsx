import { Phone, Printer, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">Ardent Clinic LLC</h3>
            <p className="text-primary-foreground/80 font-body leading-relaxed max-w-md mb-6">
              Dedicated to providing quality acute pain management and neurological care. 
              We are committed to the highest standard of patient care and excellence.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:+2813324848" 
                className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">281-332-4848</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#conditions" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Conditions We Treat
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+2813324848" className="hover:text-accent transition-colors">281-332-4848</a>
              </li>
              <li className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                <span>281-338-1428</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>League City, Texas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 font-body text-sm">
            © {currentYear} Ardent Clinic LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
