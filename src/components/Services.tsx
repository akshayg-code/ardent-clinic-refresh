import { motion } from "framer-motion";
import { Brain, Activity, HeartPulse, Stethoscope, Pill, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Neurological Evaluations",
    description: "Comprehensive assessments of brain and nervous system function to diagnose conditions accurately.",
  },
  {
    icon: Activity,
    title: "Pain Management",
    description: "Advanced treatments for acute and chronic pain, including back pain, neck pain, and headaches.",
  },
  {
    icon: HeartPulse,
    title: "Stroke Care",
    description: "Prevention strategies and post-stroke rehabilitation to help patients recover and thrive.",
  },
  {
    icon: Stethoscope,
    title: "Seizure & Epilepsy",
    description: "Expert diagnosis and management of seizure disorders with personalized treatment plans.",
  },
  {
    icon: Pill,
    title: "Movement Disorders",
    description: "Treatment for Parkinson's disease, tremors, and other movement-related conditions.",
  },
  {
    icon: Users,
    title: "Memory Care",
    description: "Compassionate care for Alzheimer's disease and dementia with family support services.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Specialized Services
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Through a systematic and investigative approach, we discover neurological ailments 
            and provide effective treatments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-elevated card-hover rounded-xl p-8 border border-border/50"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
