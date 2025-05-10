
import { Link } from "react-router-dom";
import { Product } from "../types";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const {
    id,
    name,
    price,
    discountPrice,
    imageUrl,
    rating,
    reviewCount,
    featured,
    new: isNew,
    brand,
    category,
  } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative bg-card rounded-lg overflow-hidden border border-border card-hover">
        <div className="aspect-[4/3] relative bg-secondary/30 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          {(isNew || featured) && (
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              {isNew && (
                <Badge className="bg-primary">New Arrival</Badge>
              )}
              {featured && (
                <Badge variant="secondary">Featured</Badge>
              )}
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-muted-foreground">{brand}</p>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>

          <h3 className="font-heading text-lg mb-2 line-clamp-1">{name}</h3>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm">{rating}</span>
            </div>
            <span className="mx-2 text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">
              {reviewCount} reviews
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              {discountPrice ? (
                <div className="flex items-center gap-2">
                  <p className="font-bold">{formatPrice(discountPrice)}</p>
                  <p className="text-sm text-muted-foreground line-through">
                    {formatPrice(price)}
                  </p>
                </div>
              ) : (
                <p className="font-bold">{formatPrice(price)}</p>
              )}
            </div>
            <Button
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
