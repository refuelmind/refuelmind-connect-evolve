import wellnessImage from "@/assets/wellness-infographic.jpg";

const ContentSection = () => {
  const blogPosts = [
    {
      title: "Understanding Anxiety: A Gentle Guide",
      excerpt: "Anxiety isn't your enemy - it's your mind's way of trying to protect you. Let's understand it better.",
      category: "Mental Health"
    },
    {
      title: "Building Resilience in Relationships",
      excerpt: "Healthy relationships require emotional intelligence, boundaries, and compassionate communication.",
      category: "Relationships"
    },
    {
      title: "The Psychology of Performance",
      excerpt: "Peak performance isn't about perfection - it's about showing up authentically, even when afraid.",
      category: "Growth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-therapy-warm to-therapy-calm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Insights & Resources
            </h2>
            <p className="therapy-text text-xl max-w-3xl mx-auto">
              Explore our collection of articles, visual guides, and reflective tools 
              designed to support your mental wellness journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Blog Posts */}
            <div className="space-y-8">
              <h3 className="font-comic font-normal text-2xl text-therapy-primary mb-6">
                Latest Articles
              </h3>
              
              {blogPosts.map((post, index) => (
                <div key={index} className="content-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-therapy-accent/20 text-therapy-accent rounded-full text-sm font-comic">
                        {post.category}
                      </span>
                    </div>
                    <h4 className="font-comic font-normal text-xl text-therapy-primary">
                      {post.title}
                    </h4>
                    <p className="therapy-text">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-therapy-accent hover:text-therapy-accent/80 cursor-pointer">
                      <span className="therapy-text">Read more</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Resources */}
            <div className="space-y-8">
              <h3 className="font-comic font-normal text-2xl text-therapy-primary mb-6">
                Visual Resources
              </h3>
              
              <div className="content-card p-6">
                <img 
                  src={wellnessImage} 
                  alt="Mental wellness infographic - holistic approach to mental health"
                  className="w-full rounded-2xl mb-4"
                />
                <h4 className="font-comic font-normal text-xl text-therapy-primary mb-3">
                  Holistic Mental Wellness Guide
                </h4>
                <p className="therapy-text mb-4">
                  Understanding the interconnected nature of mental, emotional, and physical well-being.
                </p>
                <div className="flex items-center text-therapy-accent hover:text-therapy-accent/80 cursor-pointer">
                  <span className="therapy-text">Explore resource</span>
                  <span className="ml-2">→</span>
                </div>
              </div>

              <div className="content-card p-6 bg-gradient-to-br from-therapy-accent/5 to-therapy-accent/10">
                <h4 className="font-comic font-normal text-xl text-therapy-primary mb-3">
                  Social Media Updates
                </h4>
                <p className="therapy-text mb-4">
                  Follow our daily insights and community discussions across social platforms.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="therapy-text">Instagram</span>
                    <span className="text-therapy-accent">@refuelmind</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="therapy-text">X (Twitter)</span>
                    <span className="text-therapy-accent">@refuelmind</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="therapy-text">Reddit</span>
                    <span className="text-therapy-accent">u/refuelmind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;