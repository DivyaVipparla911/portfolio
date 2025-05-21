
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <main className="bg-background text-foreground">
      <Navbar sections={sections} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
};

export default Index;
