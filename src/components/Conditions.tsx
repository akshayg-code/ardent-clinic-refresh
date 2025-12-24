import { motion } from "framer-motion";

const conditions = [
  { name: "Headaches & Migraines", description: "Diagnosis and treatment of chronic and acute headache disorders" },
  { name: "Back & Neck Pain", description: "Management of spinal pain conditions affecting daily life" },
  { name: "Stroke", description: "Prevention strategies and post-stroke rehabilitation care" },
  { name: "Epilepsy & Seizures", description: "Comprehensive seizure disorder management" },
  { name: "Dementia & Alzheimer's", description: "Memory care and cognitive health support" },
  { name: "Parkinson's Disease", description: "Movement disorder diagnosis and treatment" },
  { name: "Tremor", description: "Evaluation and treatment of involuntary movements" },
  { name: "Neuropathy", description: "Treatment for nerve damage and peripheral neuropathy" },
  { name: "Sleep Disorders", description: "Diagnosis of neurological sleep conditions" },
  { name: "Multiple Sclerosis", description: "Long-term management of MS symptoms" },
  { name: "Vertigo & Dizziness", description: "Balance disorder evaluation and treatment" },
  { name: "Facial Pain", description: "Specialized care for trigeminal neuralgia and facial pain" },
];

const Conditions = () => {
  return (
    <section id="conditions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Conditions We Treat</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Expert Care for Neurological Disorders
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            We diagnose and treat a wide range of conditions affecting the brain, spine, and nervous system.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card border border-border/50 rounded-lg p-5 hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {condition.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {condition.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
