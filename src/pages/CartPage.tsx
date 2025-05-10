
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { X, ShoppingBag, ArrowRight } from "lucide-react";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    tax,
    shipping,
    total,
  } = useCart();

  const isCartEmpty = cartItems.length === 0;

  if (isCartEmpty) {
    return (
      <div className="page-container">
        <h1 className="text-3xl font-heading mb-8">Your Cart</h1>
        <div className="text-center py-16 bg-muted/30 rounded-lg">
          <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-heading mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="text-3xl font-heading mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted text-muted-foreground text-sm">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">Product</th>
                    <th className="px-6 py-4 text-center font-medium">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-right font-medium">Price</th>
                    <th className="px-6 py-4 text-right font-medium">Total</th>
                    <th className="px-6 py-4 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cartItems.map((item) => (
                    <tr key={item.product.id} className="animate-fade-in">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-16 w-16 bg-muted/30 rounded flex-shrink-0 mr-4">
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.product.brand}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center border border-input rounded-md">
                            <button
                              className="px-2 py-1 hover:bg-muted transition-colors"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-x border-input">
                              {item.quantity}
                            </span>
                            <button
                              className="px-2 py-1 hover:bg-muted transition-colors"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              disabled={item.quantity >= item.product.stock}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {formatPrice(
                          item.product.discountPrice || item.product.price
                        )}
                      </td>
                      <td className="px-6 py-4 text-right font-medium">
                        {formatPrice(
                          (item.product.discountPrice || item.product.price) *
                            item.quantity
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button asChild variant="outline">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-heading mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (GST 12%)</span>
                <span>{formatPrice(tax)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Shipping {shipping === 0 && "(Free)"}
                </span>
                <span>{formatPrice(shipping)}</span>
              </div>

              <div className="border-t border-border pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <Button asChild className="w-full mt-6">
              <Link to="/checkout">
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 mt-6">
            <h3 className="text-sm font-medium mb-2">We Accept</h3>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-12 bg-muted rounded"></div>
              <div className="h-8 w-12 bg-muted rounded"></div>
              <div className="h-8 w-12 bg-muted rounded"></div>
              <div className="h-8 w-12 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
