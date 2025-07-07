const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/REFUELMIND", "_blank");
  };

  return (
    <footer className="bg-gradient-to-t from-therapy-primary to-therapy-primary/90 text-therapy-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="font-comic font-normal text-3xl">
              Ready to begin your healing journey?
            </h3>
            <p className="font-comic font-light text-lg opacity-90 max-w-2xl mx-auto">
              Take the first step towards mental wellness. Every conversation starts with courage.
            </p>
          </div>

          <button 
            onClick={handleWhatsAppClick}
            className="bg-therapy-accent hover:bg-therapy-accent/90 text-white font-comic font-normal
                     px-8 py-4 rounded-full shadow-lg hover:shadow-xl
                     transform hover:scale-105 transition-all duration-300
                     text-lg inline-flex items-center gap-2"
          >
            <span>Start a conversation</span>
            <span>💬</span>
          </button>

          <div className="border-t border-therapy-secondary/20 pt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <a href="https://instagram.com/refuelmind" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-therapy-accent transition-colors">
                Instagram @refuelmind
              </a>
              <span>•</span>
              <a href="https://x.com/refuelmind" target="_blank" rel="noopener noreferrer"
                 className="hover:text-therapy-accent transition-colors">
                X @refuelmind
              </a>
              <span>•</span>
              <a href="https://www.reddit.com/user/refuelmind/submitted/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-therapy-accent transition-colors">
                Reddit u/refuelmind
              </a>
            </div>
            
            <p className="font-comic font-light text-sm opacity-70">
              © 2024 RefuelMind • Founded by Ritwik Tripathi, Psychologist
            </p>
            
            <p className="font-comic font-light text-xs opacity-60 max-w-2xl mx-auto">
              Professional therapy services and mental wellness resources. 
              Always consult with qualified mental health professionals for serious concerns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;