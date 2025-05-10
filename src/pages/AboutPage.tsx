
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">About Velocity Bikes</h1>
            <p className="text-xl text-gray-300">
              Premium superbikes for enthusiasts who demand the best in performance, design, and engineering.
            </p>
          </div>
        </div>
      </section>
      
      <section className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-heading mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 1995 by motorcycle enthusiasts, Velocity Bikes has grown from a small dealership in Mumbai to India's premier destination for superbikes and performance motorcycles.
            </p>
            <p className="text-lg text-muted-foreground">
              Our journey has been fueled by a passion for speed, precision engineering, and providing motorcycle enthusiasts with access to the world's finest machines. What started as a dream has transformed into India's most respected name in premium motorcycles.
            </p>
          </div>
          <div className="bg-muted h-64 md:h-96 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Velocity Bikes Store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 bg-muted h-64 md:h-96 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Superbike Collection"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-heading mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're dedicated to providing motorcycle enthusiasts with access to the world's finest superbikes while delivering exceptional service, expert guidance, and fostering a community of passionate riders.
            </p>
            <p className="text-lg text-muted-foreground">
              Every motorcycle we sell is meticulously inspected, serviced, and prepared to deliver the ultimate riding experience from day one. We believe in building relationships with our customers that extend far beyond the initial purchase.
            </p>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading mb-6">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-3">Excellence</h3>
              <p className="text-muted-foreground">We strive for excellence in every aspect of our business, from the products we offer to the service we provide.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-3">Performance</h3>
              <p className="text-muted-foreground">We're obsessed with performance and helping our customers experience the pinnacle of motorcycle engineering.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-3">Community</h3>
              <p className="text-muted-foreground">We foster a vibrant community of riders who share our passion for exceptional motorcycles and riding experiences.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Behind every exceptional motorcycle is an exceptional team. Our staff consists of passionate riders, factory-trained technicians, and motorcycle industry veterans.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-64 bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg">Rajiv Mehta</h3>
                  <p className="text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-64 bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg">Ananya Sharma</h3>
                  <p className="text-muted-foreground">Service Director</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="h-64 bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg">Vikram Singh</h3>
                  <p className="text-muted-foreground">Lead Technician</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="page-container text-center">
        <h2 className="text-3xl font-heading mb-6">Visit Our Showroom</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Experience the thrill of our premium superbikes in person. Visit our state-of-the-art showroom to see our collection and speak with our knowledgeable staff.
        </p>
        
        <Button asChild size="lg">
          <Link to="/contact">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;
