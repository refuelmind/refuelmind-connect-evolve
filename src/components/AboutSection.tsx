import therapyImage from "@/assets/therapy-session.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-therapy-secondary to-therapy-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              What is stopping you from flourishing?
            </h2>
            <p className="therapy-text text-xl max-w-3xl mx-auto">
              Every mind has the capacity for growth, healing, and transformation. 
              Let's explore what's holding you back and create a path forward together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="content-card p-8">
                <h3 className="font-comic font-normal text-2xl text-therapy-primary mb-4">
                  Professional Therapy Sessions
                </h3>
                <p className="therapy-text mb-6">
                  Individual sessions tailored to your unique needs. Whether you're dealing with 
                  anxiety, relationship challenges, or life transitions, we'll work together to 
                  find clarity and strength.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-therapy-primary/70">
                    <span className="w-2 h-2 bg-therapy-accent rounded-full mr-3"></span>
                    <span className="therapy-text">One-on-one counseling</span>
                  </div>
                  <div className="flex items-center text-therapy-primary/70">
                    <span className="w-2 h-2 bg-therapy-accent rounded-full mr-3"></span>
                    <span className="therapy-text">Anxiety and stress management</span>
                  </div>
                  <div className="flex items-center text-therapy-primary/70">
                    <span className="w-2 h-2 bg-therapy-accent rounded-full mr-3"></span>
                    <span className="therapy-text">Relationship guidance</span>
                  </div>
                  <div className="flex items-center text-therapy-primary/70">
                    <span className="w-2 h-2 bg-therapy-accent rounded-full mr-3"></span>
                    <span className="therapy-text">Performance psychology</span>
                  </div>
                </div>
              </div>

              <div className="content-card p-8">
                <h3 className="font-comic font-normal text-2xl text-therapy-primary mb-4">
                  Mental Wellness Resources
                </h3>
                <p className="therapy-text">
                  Access our growing library of insights, tools, and reflective content designed 
                  to support your mental wellness journey between sessions.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={therapyImage} 
                alt="Therapy session - safe space for healing and growth"
                className="w-full rounded-3xl shadow-warm"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-therapy-accent/10 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;