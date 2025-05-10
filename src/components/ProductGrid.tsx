
import { Product } from "../types";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  title?: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <div>
      {title && <h2 className="text-2xl font-heading mb-6">{title}</h2>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
