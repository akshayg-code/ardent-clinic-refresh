import { motion } from "framer-motion";
import { Phone, Printer, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Our Clinic
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            We would love to welcome you and your loved ones to our clinic. 
            Schedule an appointment today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card-elevated rounded-xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Clinic Information
              </h3>
              
              <div className="space-y-5">
                <a 
                  href="tel:+2813324848" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                      281-332-4848
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+2813381428" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Printer className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fax</p>
                    <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                      281-338-1428
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-foreground font-semibold">
                      League City, Texas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office Hours</p>
                    <p className="text-foreground font-semibold">
                      Mon - Fri: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="default" size="lg" className="flex-1" asChild>
                <a href="tel:+2813324848">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="mailto:info@ardentclinicllc.com">
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map or Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated rounded-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110838.19856555825!2d-95.12548959726561!3d29.47803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409e5e8a7d2f89%3A0x4c7893c66e0b0d0f!2sLeague%20City%2C%20TX!5e0!3m2!1sen!2sus!4v1703454000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ardent Clinic Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
