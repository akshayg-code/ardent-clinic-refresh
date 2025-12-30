import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resources = [
  { title: "ALS (Amyotrophic Lateral Sclerosis)", source: "Mayo Foundation for Medical Education and Research", url: "https://www.mayoclinic.org/diseases-conditions/amyotrophic-lateral-sclerosis/symptoms-causes/syc-20354022" },
  { title: "Alzheimer's Disease", source: "Alzheimer's Association", url: "https://www.alz.org/alzheimers-dementia/what-is-alzheimers" },
  { title: "Back Pain", source: "Mayo Clinic: Diseases and Conditions", url: "https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906" },
  { title: "Bell's Palsy", source: "National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/disorders/bells/bells.htm" },
  { title: "Brain Aneurysm", source: "Brain Aneurysm Foundation", url: "https://bafound.org/" },
  { title: "Brain Injury", source: "Brain Injury Association of America", url: "https://bafound.org/brain-aneurysm-basics/" },
  { title: "Carpal Tunnel Syndrome", source: "National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/disorders/Carpal_tunnel/Carpal_tunnel.htm" },
  { title: "Cerebral Palsy", source: "CerebralPalsy.org", url: "https://www.cerebralpalsy.org/about-cerebral-palsy" },
  { title: "Chronic Fatigue Syndrome", source: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/me-cfs/" },
  { title: "Concussion", source: "eMedicine Health", url: "https://www.emedicinehealth.com/concussion/article_em.htm" },
  { title: "Dementia", source: "Alzheimer's Association", url: "https://www.alz.org/alzheimers-dementia/what-is-dementia" },
  { title: "Disk Disease of Neck and Lower Back", source: "Remedy's Health Communities", url: "https://www.healthcommunities.com/index.html" },
  { title: "Dizziness", source: "Healthline Networks", url: "https://www.healthline.com/health/dizziness" },
  { title: "Epilepsy", source: "Epilepsy Foundation", url: "https://www.epilepsy.com/learn" },
  { title: "Headache Cluster", source: "MedicineNet", url: "https://www.medicinenet.com/cluster_headaches/article.htm" },
  { title: "Migraine", source: "Mayo Clinic: Diseases & Conditions", url: "https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201" },
  { title: "Multiple Sclerosis", source: "Multiple Sclerosis Foundation", url: "https://msfocus.org/" },
  { title: "Muscular Dystrophy", source: "Mayo Clinic: Diseases & Conditions", url: "https://www.mayoclinic.org/diseases-conditions/muscular-dystrophy/symptoms-causes/syc-20375388" },
  { title: "Neuralgia", source: "Healthline", url: "https://www.healthline.com/health/neuralgia" },
  { title: "Normal Pressure Hydrocephalus", source: "WebMD; Brain and Nervous System Health Center", url: "https://www.webmd.com/brain/normal-pressure-hydrocephalus" },
  { title: "Parkinson's Disease", source: "National Parkinson Foundation", url: "https://www.parkinson.org/understanding-parkinsons/what-is-parkinsons" },
  { title: "Peripheral Neuropathy", source: "The Foundation for Peripheral Neuropathy", url: "https://www.foundationforpn.org/livingwithperipheralneuropathy/" },
  { title: "Seizures", source: "Healthline; Causes & Effects", url: "https://www.healthline.com/health/seizures" },
  { title: "Spinal Cord Injury", source: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/spinal-cord-injury/symptoms-causes/syc-20377890" },
  { title: "Stroke", source: "National Stroke Association", url: "https://www.stroke.org/en/about-stroke" },
  { title: "Ulnar Neuropathy", source: "Medscape: Ulnar Neuropathy Treatment & Management", url: "https://emedicine.medscape.com/article/1141515-treatment" },
  { title: "Vertigo", source: "MedicineNet", url: "https://www.medicinenet.com/vertigo/symptoms.htm" },
];

const PatientResources = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Patient Resources - Neurological Conditions",
    "description": "Educational resources about neurological conditions including ALS, Alzheimer's, Parkinson's, stroke, epilepsy, and more.",
    "mainEntity": {
      "@type": "MedicalClinic",
      "name": "Ardent Clinic LLC"
    }
  };

  return (
    <>
      <Helmet>
        <title>Patient Resources | Neurological Education | Ardent Clinic LLC</title>
        <meta
          name="description"
          content="Educational resources about neurological conditions. Learn about ALS, Alzheimer's, Parkinson's, stroke, epilepsy, migraines, and more from trusted medical sources."
        />
        <meta
          name="keywords"
          content="neurological conditions, patient education, ALS, Alzheimer's, Parkinson's, stroke, epilepsy, migraine, neurology resources"
        />
        <link rel="canonical" href="https://ardentclinicllc.com/patient-resources" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header lightBackground />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">Educational Resources</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Patient Resources
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explore trusted educational resources about various neurological conditions.
                  Click on any condition to learn more from reputable medical organizations.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Resources Grid */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid gap-4 md:gap-6">
                {resources.map((resource, index) => (
                  <motion.a
                    key={resource.title}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="group flex items-center justify-between gap-4 p-5 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          {resource.source}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Disclaimer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 p-6 bg-muted/50 rounded-xl border border-border"
              >
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Disclaimer:</strong> The links provided are for educational purposes only.
                  These resources are maintained by external organizations. For personalized medical advice,
                  please schedule an appointment with our clinic.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PatientResources;
