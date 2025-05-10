
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import { products, categories } from "../data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState(products.filter(p => p.featured).slice(0, 4));
  const [newArrivals, setNewArrivals] = useState(products.filter(p => p.new).slice(0, 4));

  return (
    <>
      <HeroSection />
      
      <section className="page-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading">Featured Bikes</h2>
          <Link to="/products" className="text-primary hover:underline flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </section>
      
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-heading mb-4">Premium Service & Maintenance</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our dedicated service team ensures your superbike performs at its peak. Factory-trained technicians and genuine parts guarantee reliability and performance.
              </p>
              <Button asChild variant="outline">
                <Link to="/services">Learn More <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="md:w-1/2 h-80 bg-secondary rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Service and Maintenance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="page-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading">New Arrivals</h2>
          <Link to="/products" className="text-primary hover:underline flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <ProductGrid products={newArrivals} />
      </section>
      
      <section className="page-container">
        <h2 className="text-2xl sm:text-3xl font-heading mb-8">Shop by Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.slice(0, 8).map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group relative rounded-lg overflow-hidden h-48"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-heading text-lg">{category.name}</h3>
                <p className="text-gray-200 text-sm">{category.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="bg-primary text-white py-16 my-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading mb-4">Join Our Riders Community</h2>
            <p className="text-lg mb-6">
              Stay updated with the latest models, exclusive offers, and ride events. Sign up for our newsletter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md flex-grow text-gray-900"
              />
              <Button className="bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
