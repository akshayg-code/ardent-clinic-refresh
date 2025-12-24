import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Board-certified neurologists with extensive experience",
  "State-of-the-art diagnostic equipment",
  "Personalized treatment plans for each patient",
  "Comfortable and efficient clinic setting",
  "Comprehensive follow-up care",
  "Same-week appointments available",
];

const About = () => {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">About Our Practice</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Committed to Excellence in Neurological Care
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Ardent Clinic LLC is committed to the highest standard of patient care and excellence 
              in neurological disorders. We derive our greatest sense of accomplishment from doing 
              what is right for each individual patient.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Neurology is the practice of medicine which diagnoses and treats conditions of the 
              central and peripheral nervous systems. Through a systematic and investigative approach, 
              we strive to discover neurological ailments, provide effective treatments, and return 
              patients back to their normal and active lifestyles.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-body text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <a href="#contact">Learn More About Us</a>
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="card-elevated rounded-xl p-6 text-center">
              <span className="font-heading text-4xl md:text-5xl font-bold text-primary block mb-2">15+</span>
              <span className="text-muted-foreground font-body text-sm">Years of Experience</span>
            </div>
            <div className="card-elevated rounded-xl p-6 text-center mt-8">
              <span className="font-heading text-4xl md:text-5xl font-bold text-primary block mb-2">5,000+</span>
              <span className="text-muted-foreground font-body text-sm">Patients Treated</span>
            </div>
            <div className="card-elevated rounded-xl p-6 text-center">
              <span className="font-heading text-4xl md:text-5xl font-bold text-primary block mb-2">6</span>
              <span className="text-muted-foreground font-body text-sm">Specialty Areas</span>
            </div>
            <div className="card-elevated rounded-xl p-6 text-center mt-8">
              <span className="font-heading text-4xl md:text-5xl font-bold text-primary block mb-2">98%</span>
              <span className="text-muted-foreground font-body text-sm">Patient Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
