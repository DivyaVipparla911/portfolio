
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden border-2 border-gold shimmer">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-black">
                  {/* Replace with your actual profile photo */}
                  <div className="w-full h-full flex items-center justify-center text-gold">
                    <span className="text-6xl font-light">DV</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-md z-0"></div>
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gold-gradient-text">Full Stack Developer</span> with a passion for creating elegant solutions
            </h3>
            <p className="text-gray-300">
              I am a dedicated full stack developer with 2.5 years of professional experience designing and building web applications. 
              Currently pursuing my Master of Science in Computer Science at Pace University with a GPA of 3.93, and expected to graduate in May 2025.
            </p>
            <p className="text-gray-300">
              My expertise spans both front-end and back-end technologies, including React.js, React Native, Node.js, and .NET Core. 
              I thrive in collaborative environments and enjoy the process of transforming ideas into functional, user-friendly products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-gold">•</span>
                <span className="text-gray-300">Name: Divya Vipparla</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">•</span>
                <span className="text-gray-300">Location: Jersey City, NJ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">•</span>
                <span className="text-gray-300">Email: divya.vipparla@pace.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">•</span>
                <span className="text-gray-300">Experience: 2.5 Years</span>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-3 rounded-md"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
