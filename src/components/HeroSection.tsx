
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Ultimate Speed",
    subtitle: "Experience the thrill of premium superbikes",
    description: "Cutting-edge technology and unparalleled performance for the true enthusiasts",
    buttonText: "Explore Collection",
    buttonLink: "/products",
  },
  {
    id: 2,
    title: "Precision Engineering",
    subtitle: "Crafted for performance",
    description: "Every component meticulously designed for the perfect ride",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 3,
    title: "Rider's Paradise",
    subtitle: "Complete your journey",
    description: "From superbikes to premium accessories - everything a rider needs",
    buttonText: "View Products",
    buttonLink: "/products",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: `url('/placeholder.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 absolute'
              }`}
              style={{ display: currentSlide === index ? 'block' : 'none' }}
            >
              <span className="inline-block text-primary font-heading mb-2 animate-fade-in">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-4 animate-slide-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl animate-fade-in" style={{animationDelay: '0.2s'}}>
                {slide.description}
              </p>
              <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Button asChild size="lg" className="mr-4 bg-primary hover:bg-primary/90">
                  <Link to={slide.buttonLink}>
                    {slide.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slide indicators */}
        <div className="flex mt-10 space-x-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-primary w-8" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
