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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-therapy-secondary via-therapy-warm to-therapy-calm">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-comic font-normal text-therapy-primary">404</h1>
          <h2 className="text-2xl font-comic font-normal text-therapy-primary">
            This path doesn't exist
          </h2>
          <p className="therapy-text text-xl">
            Sometimes we wander into uncharted territory. That's okay – 
            let's guide you back to a place of comfort and support.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = "/"}
            className="whatsapp-button"
            size="lg"
          >
            Return to RefuelMind
          </Button>
          
          <p className="therapy-text text-sm opacity-70">
            If you're feeling lost in life too, we're here to help you find your way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
