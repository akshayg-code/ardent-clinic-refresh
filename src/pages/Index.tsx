import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctor from "@/components/Doctor";
import FacilityTour from "@/components/FacilityTour";
import Conditions from "@/components/Conditions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Ardent Clinic LLC",
    "description": "Expert neurological care and acute pain management clinic in League City, Texas. Specializing in headaches, seizures, stroke care, and movement disorders.",
    "url": "https://ardentclinicllc.com",
    "telephone": "+1-281-332-4848",
    "faxNumber": "+1-281-338-1428",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "League City",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.4783,
      "longitude": -95.0902
    },
    "medicalSpecialty": [
      "Neurology",
      "Pain Management"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Neurological Evaluations"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pain Management"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Stroke Care"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Epilepsy Treatment"
      }
    ],
    "openingHours": "Mo-Fr 08:00-17:00"
  };

  return (
    <>
      <Helmet>
        <title>Ardent Clinic LLC | Neurology & Pain Management | League City, TX</title>
        <meta 
          name="description" 
          content="Ardent Clinic LLC provides expert neurological care and acute pain management in League City, Texas. Specializing in headaches, seizures, stroke, dementia, and movement disorders. Call 281-332-4848." 
        />
        <meta 
          name="keywords" 
          content="neurologist League City, pain management Texas, headache treatment, epilepsy doctor, stroke care, dementia specialist, Parkinson's treatment, neurology clinic" 
        />
        <link rel="canonical" href="https://ardentclinicllc.com" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ardent Clinic LLC | Expert Neurological Care" />
        <meta property="og:description" content="Dedicated to providing quality acute pain management and neurological care in League City, Texas." />
        <meta property="og:url" content="https://ardentclinicllc.com" />
        <meta property="og:site_name" content="Ardent Clinic LLC" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ardent Clinic LLC | Neurology & Pain Management" />
        <meta name="twitter:description" content="Expert neurological care and acute pain management in League City, Texas." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Doctor />
          <FacilityTour />
          <Conditions />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
