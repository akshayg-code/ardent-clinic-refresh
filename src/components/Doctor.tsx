import { motion } from "framer-motion";
import { Award, GraduationCap, Stethoscope, Heart } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Board Certified",
    description: "Neurology & Pain Medicine",
  },
  {
    icon: Award,
    title: "Fellowship Trained",
    description: "Advanced Neurological Care",
  },
  {
    icon: Stethoscope,
    title: "15+ Years",
    description: "Clinical Experience",
  },
  {
    icon: Heart,
    title: "Patient-Focused",
    description: "Compassionate Care",
  },
];

const Doctor = () => {
  return (
    <section id="doctor" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            Meet Your Physician
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Meet the Doctor
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Doctor Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative background */}
              <div className="absolute inset-4 bg-primary/10 rounded-2xl -rotate-3" />
              <div className="absolute inset-4 bg-accent/10 rounded-2xl rotate-3" />
              
              {/* Photo placeholder */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden h-full flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Stethoscope className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    Doctor Photo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Dr. Ranjit Patel
            </h3>
            <p className="text-accent font-medium text-lg mb-6">
              Neurologist & Pain Management Specialist
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground font-body leading-relaxed">
                Dr. Ranjit Patel is a highly experienced neurologist dedicated to providing 
                exceptional care for patients with neurological conditions and chronic pain. 
                With over 15 years of clinical experience, Dr. Patel combines advanced medical 
                expertise with a compassionate, patient-centered approach.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Dr. Patel specializes in diagnosing and treating a wide range of neurological 
                disorders, including headaches, migraines, epilepsy, stroke, dementia, and 
                movement disorders such as Parkinson's disease. His commitment to staying 
                current with the latest advancements in neurology ensures that patients 
                receive the most effective treatments available.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                At Ardent Clinic, Dr. Patel believes in building lasting relationships with 
                his patients, taking the time to listen to their concerns and develop 
                personalized treatment plans that address their unique needs.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="card-elevated rounded-lg p-4 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">
                      {credential.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {credential.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
