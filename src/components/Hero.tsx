import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

// Count-up hook
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target, duration]);
  return count;
}

// Floating orb component
const FloatingOrb = ({
  size,
  top,
  left,
  delay,
  duration,
}: {
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      top,
      left,
      background:
        "radial-gradient(circle, hsl(175 60% 50% / 0.18) 0%, transparent 70%)",
      filter: "blur(40px)",
    }}
    animate={{ y: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Word-by-word title animation variants
const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Trust indicator item
const TrustItem = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const count = useCountUp(value, 2200);
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
        <span className="text-primary-foreground font-heading text-xl font-bold">
          {count}
          {suffix}
        </span>
      </div>
      <span className="text-primary-foreground/80 font-body text-sm">
        {label.split("<br />").map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))}
      </span>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image drifts up at half scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const line1Words = ["Expert", "Neurological", "Care"];
  const line2Words = ["&", "Pain", "Management"];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          y: bgY,
        }}
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(175 50% 30% / 0.95), hsl(200 40% 25% / 0.90))",
            "linear-gradient(160deg, hsl(175 55% 28% / 0.97), hsl(195 45% 22% / 0.92))",
            "linear-gradient(135deg, hsl(175 50% 30% / 0.95), hsl(200 40% 25% / 0.90))",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Decorative Orbs */}
      <FloatingOrb size={420} top="10%" left="60%" delay={0} duration={7} />
      <FloatingOrb size={280} top="55%" left="75%" delay={1.5} duration={9} />
      <FloatingOrb size={200} top="20%" left="5%" delay={0.8} duration={8} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-foreground/80 font-body text-lg mb-4 tracking-wide"
          >
            Welcome to Ardent Clinic LLC
          </motion.p>

          {/* Word-by-word heading reveal */}
          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            variants={titleContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Line 1 */}
            <span className="flex flex-wrap gap-x-3">
              {line1Words.map((word) => (
                <motion.span key={word} variants={wordVariant}>
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 */}
            <span className="flex flex-wrap gap-x-3 mt-2 text-accent">
              {line2Words.map((word) => (
                <motion.span key={word} variants={wordVariant}>
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-primary-foreground/90 font-body text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            Dedicated to providing the highest standard of patient care and
            excellence in treating neurological disorders. Your health is our
            priority.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+2813324848">
                <Phone className="w-5 h-5" />
                Call Us: 281-332-4848
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Schedule Appointment
              </a>
            </Button>
          </motion.div>

          {/* Count-Up Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            <TrustItem value={15} suffix="+" label="Years of<br />Experience" />
            <TrustItem value={5000} suffix="+" label="Patients<br />Treated" />
            <TrustItem value={98} suffix="%" label="Patient<br />Satisfaction" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
