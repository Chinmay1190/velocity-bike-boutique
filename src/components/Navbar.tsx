
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "../contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading text-primary mr-2">V</span>
            <span className="text-xl font-heading hidden sm:block">Velocity Bikes</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-foreground hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            to="/categories"
            className="text-foreground hover:text-primary transition-colors"
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/cart" className="relative p-2 hover:bg-muted rounded-full transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary">
                {cartCount}
              </Badge>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-slide-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
