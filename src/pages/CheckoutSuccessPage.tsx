
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingBag } from "lucide-react";

const CheckoutSuccessPage = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000).toString();
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto py-16 text-center">
        <div className="animate-zoom-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
            <CheckCircle className="h-10 w-10" />
          </div>
          
          <h1 className="text-3xl font-heading mb-4">Order Placed Successfully!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          
          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border pb-4">
                <span className="font-medium">Order Number</span>
                <span>{orderNumber}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-4">
                <span className="font-medium">Date</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-4">
                <span className="font-medium">Payment Method</span>
                <span>Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Shipping Method</span>
                <span>Express Delivery</span>
              </div>
            </div>
          </div>
          
          <p className="mb-8">
            A confirmation email has been sent to your email address.
            You can check the status of your order by visiting the order tracking page.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link to="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/order-tracking">Track Order</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
