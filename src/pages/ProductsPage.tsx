
import { useState, useEffect } from "react";
import { products, categories, brands } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Product } from "../types";
import { Filter, SlidersHorizontal, X } from "lucide-react";

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 2000000]); // INR
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      result = result.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        (product.discountPrice || product.price) >= priceRange[0] &&
        (product.discountPrice || product.price) <= priceRange[1]
    );

    // Sort products
    switch (sortOption) {
      case "priceAsc":
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case "priceDesc":
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case "nameAsc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategories, selectedBrands, priceRange, sortOption]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 2000000]);
    setSortOption("featured");
  };

  return (
    <div className="page-container">
      <h1 className="text-3xl font-heading mb-8">Superbikes Collection</h1>

      <div className="lg:hidden mb-4 flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <div className="flex items-center gap-2">
          <Label htmlFor="mobile-sort">Sort By:</Label>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger id="mobile-sort" className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="priceAsc">Price: Low to High</SelectItem>
              <SelectItem value="priceDesc">Price: High to Low</SelectItem>
              <SelectItem value="nameAsc">Name: A to Z</SelectItem>
              <SelectItem value="nameDesc">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div
          className={`lg:w-64 space-y-6 ${
            showFilters
              ? "fixed inset-0 z-40 bg-background p-4 overflow-y-auto lg:static lg:p-0"
              : "hidden lg:block"
          }`}
        >
          {showFilters && (
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h2 className="text-lg font-heading">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowFilters(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}

          <div className="flex justify-between items-center">
            <h2 className="text-lg font-heading">Filters</h2>
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              Reset
            </Button>
          </div>

          <div>
            <h3 className="text-md font-heading mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.name)}
                    onCheckedChange={() => toggleCategory(category.name)}
                  />
                  <Label
                    htmlFor={`category-${category.id}`}
                    className="flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ({category.count})
                    </span>
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-heading mb-3">Brand</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand.id}`}
                    checked={selectedBrands.includes(brand.name)}
                    onCheckedChange={() => toggleBrand(brand.name)}
                  />
                  <Label
                    htmlFor={`brand-${brand.id}`}
                    className="flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>{brand.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ({brand.count})
                    </span>
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-heading mb-3">Price Range</h3>
            <div className="space-y-4">
              <Slider
                defaultValue={priceRange}
                min={0}
                max={2000000}
                step={50000}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
              <div className="flex justify-between">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </div>

          {showFilters && (
            <div className="mt-6 lg:hidden">
              <Button
                className="w-full"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </Button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="hidden lg:flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
            <div className="flex items-center gap-2">
              <Label htmlFor="desktop-sort">Sort By:</Label>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger id="desktop-sort" className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                  <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                  <SelectItem value="nameAsc">Name: A to Z</SelectItem>
                  <SelectItem value="nameDesc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-heading mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to find products.
              </p>
              <Button onClick={resetFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
