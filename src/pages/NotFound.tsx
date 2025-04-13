
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold text-plum-300 mb-4">404</h1>
        <p className="text-xl text-white mb-6">Oops! We couldn't find the page you're looking for.</p>
        <p className="text-plum-100 mb-8">The page might have been moved, deleted, or never existed in the first place.</p>
        <Button asChild className="bg-plum-300 hover:bg-plum-400 text-white">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
