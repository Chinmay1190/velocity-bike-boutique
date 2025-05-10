
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";
import ProductGrid from "../components/ProductGrid";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Truck } from "lucide-react";
import { toast } from "sonner";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="page-container text-center py-12">
        <h1 className="text-3xl font-heading mb-4">Product Not Found</h1>
        <p className="mb-6">The product you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }
  
  const { 
    name, 
    brand, 
    category, 
    description, 
    price, 
    discountPrice, 
    imageUrl, 
    specifications,
    rating,
    reviewCount,
    stock,
    tags,
    featured,
    new: isNew
  } = product;
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (value: number) => {
    if (value > 0 && value <= stock) {
      setQuantity(value);
    }
  };
  
  // Get related products (same category but different product)
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== id)
    .slice(0, 4);
  
  return (
    <div className="page-container">
      <div className="mb-6">
        <Link to="/products" className="text-primary hover:underline">
          ← Back to Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Product Images */}
        <div className="bg-muted/20 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {isNew && <Badge className="bg-primary">New Arrival</Badge>}
            {featured && <Badge variant="secondary">Featured</Badge>}
            <Badge variant="outline">{category}</Badge>
          </div>
          
          <h1 className="text-3xl font-heading mb-2">{name}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-500">
                {"★".repeat(Math.floor(rating))}
                {"☆".repeat(5 - Math.floor(rating))}
              </div>
              <span className="ml-2">{rating}</span>
            </div>
            <span className="text-muted-foreground">
              {reviewCount} reviews
            </span>
          </div>
          
          <div className="mb-6">
            {discountPrice ? (
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">{formatPrice(discountPrice)}</span>
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(price)}
                </span>
                <Badge variant="outline" className="text-green-600 ml-2">
                  {Math.round((1 - discountPrice / price) * 100)}% OFF
                </Badge>
              </div>
            ) : (
              <span className="text-3xl font-bold">{formatPrice(price)}</span>
            )}
          </div>
          
          <div className="border-t border-border pt-6 mb-6">
            <p className="text-muted-foreground mb-6">{description}</p>
            
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center">
                <span className="w-32 text-muted-foreground">Brand:</span>
                <span className="font-medium">{brand}</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-muted-foreground">Category:</span>
                <span className="font-medium">{category}</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-muted-foreground">Availability:</span>
                <span className={`font-medium ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock > 0 ? `In Stock (${stock} available)` : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center border border-input rounded-md">
              <button
                className="px-3 py-2 hover:bg-muted transition-colors"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 border-x border-input">{quantity}</span>
              <button
                className="px-3 py-2 hover:bg-muted transition-colors"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= stock}
              >
                +
              </button>
            </div>
            
            <Button onClick={handleAddToCart} className="flex-1" disabled={stock <= 0}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            
            <Button variant="outline" size="icon" onClick={() => toast.success('Added to wishlist')}>
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Truck className="mr-2 h-4 w-4" />
            <span>Free shipping on orders over ₹10,00,000</span>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications" className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="flex border-b border-border pb-3">
                <span className="w-32 text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="py-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-500">
                {"★".repeat(5)}
              </div>
              <span className="font-medium">Amazing performance</span>
            </div>
            <p className="mb-1">The power delivery is smooth yet aggressive when needed. Handling is precise and confidence-inspiring.</p>
            <p className="text-sm text-muted-foreground">By Rajiv Singh, 3 months ago</p>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-500">
                {"★".repeat(4)}
              </div>
              <span className="font-medium">Great value</span>
            </div>
            <p className="mb-1">Excellent bike for the price point. Offers features that competitors charge much more for.</p>
            <p className="text-sm text-muted-foreground">By Amit Patel, 1 month ago</p>
          </div>
          
          <Button>Load More Reviews</Button>
        </TabsContent>
        <TabsContent value="shipping" className="py-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-lg mb-2">Shipping Information</h3>
              <p>We offer free shipping on all orders over ₹10,00,000. Standard shipping takes 3-5 business days. Premium shipping with white-glove delivery service is available for an additional fee.</p>
            </div>
            
            <div>
              <h3 className="font-heading text-lg mb-2">Return Policy</h3>
              <p>We accept returns within 7 days of delivery. The product must be in its original condition and packaging. Please note that shipping costs for returns are the responsibility of the customer unless the return is due to our error.</p>
            </div>
            
            <div>
              <h3 className="font-heading text-lg mb-2">Warranty</h3>
              <p>All our superbikes come with a 2-year manufacturer warranty that covers mechanical defects. Extended warranty options are available at the time of purchase.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <section className="mb-12">
        <h2 className="text-2xl font-heading mb-6">Related Products</h2>
        <ProductGrid products={relatedProducts} />
      </section>
    </div>
  );
};

export default ProductDetailPage;
