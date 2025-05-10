
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-muted/30">
      <div className="text-center px-4">
        <h1 className="text-6xl font-heading mb-6">404</h1>
        <h2 className="text-3xl font-heading mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center">
            <HomeIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
