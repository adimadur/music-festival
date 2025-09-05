import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Circle as Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="festival-heading-xl mb-4 text-primary">404</h1>
      <h2 className="festival-heading-lg mb-6">Page Not Found</h2>
      <p className="text-muted-foreground text-lg max-w-md mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-5 w-5" /> Back to Home
        </Link>
      </Button>
    </div>);

};

export default NotFoundPage;