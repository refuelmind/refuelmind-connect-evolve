import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/REFUELMIND", "_blank");
  };

  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-comic font-normal text-therapy-primary leading-tight">
                You are more than
                <span className="block text-therapy-accent font-normal">
                  you think
                </span>
              </h1>
              <p className="therapy-text text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0">
                Refuel the mind with awareness, insight, and connection
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="therapy-text max-w-xl mx-auto lg:mx-0">
                Welcome to RefuelMind, where healing begins with understanding. 
                I'm Ritwik Tripathi, a psychologist dedicated to helping you navigate 
                life's challenges with compassion and professional guidance.
              </p>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button text-xl px-12 py-6"
                size="lg"
              >
                I want to talk about me
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-floating">
              <img 
                src={heroImage} 
                alt="Mental wellness and meditation - finding inner peace"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-therapy-primary/5 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-therapy-accent/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-therapy-warm/30 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;