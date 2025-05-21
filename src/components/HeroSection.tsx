
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)] z-0"></div>
      <div className="container mx-auto px-4 z-10 text-left">
        <div className="max-w-3xl">
          <h2 className="text-gold text-lg md:text-xl mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient-text">Divya Vipparla</span>
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-6 text-white">
            Full Stack Developer
            <div className="h-1 w-24 bg-gold my-6"></div>
          </div>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            With 2.5 years of experience building robust and scalable web applications. I specialize in creating seamless user experiences with modern technologies like React.js, Node.js, and .NET Core.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-3 rounded-md"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 font-medium px-6 py-3 rounded-md"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-gold rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
