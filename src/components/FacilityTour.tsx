import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import signage from "@/assets/facility/signage.jpg";
import entrance from "@/assets/facility/entrance.jpg";
import waitingArea from "@/assets/facility/waiting-area.jpg";
import reception from "@/assets/facility/reception.jpg";
import examRoom from "@/assets/facility/exam-room.jpg";
import diagnostic from "@/assets/facility/diagnostic.jpg";
import hallway from "@/assets/facility/hallway.jpg";
import corridor from "@/assets/facility/corridor.jpg";

const facilityImages = [
  { src: signage, alt: "Ardent Clinic exterior signage", title: "Clinic Signage" },
  { src: entrance, alt: "Modern building entrance", title: "Building Entrance" },
  { src: waitingArea, alt: "Comfortable waiting area", title: "Waiting Area" },
  { src: reception, alt: "Reception desk", title: "Reception" },
  { src: hallway, alt: "Clean clinic hallway", title: "Hallway" },
  { src: corridor, alt: "Clinic corridor", title: "Corridor" },
  { src: examRoom, alt: "Examination room", title: "Examination Room" },
  { src: diagnostic, alt: "Diagnostic equipment room", title: "Diagnostic Room" },
];

const FacilityTour = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? facilityImages.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === facilityImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="facility" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Our Space
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Tour the Facility
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our modern, comfortable clinic designed with your care and comfort in mind.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facilityImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-background font-medium text-sm">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-background/80 hover:text-background transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-background/80 hover:text-background transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={facilityImages[selectedImage].src}
              alt={facilityImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-background/80 hover:text-background transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-4 text-center">
              <p className="text-background font-medium">{facilityImages[selectedImage].title}</p>
              <p className="text-background/60 text-sm mt-1">
                {selectedImage + 1} / {facilityImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FacilityTour;
