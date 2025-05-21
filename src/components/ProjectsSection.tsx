
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and detailed analytics.",
      technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard to manage and analyze social media accounts across different platforms.",
      technologies: ["React", "Redux", "Node.js", "Chart.js", "OAuth"],
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Real Estate Listing Portal",
      description: "A property listing portal with advanced search, favorites, and virtual tour capabilities.",
      technologies: ["React", "Next.js", "PostgreSQL", "Google Maps API"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-background border border-gold/20 overflow-hidden hover:border-gold/40 transition-all">
              <div className="h-48 bg-gradient-to-br from-black to-secondary/80 relative shimmer">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gold text-4xl font-thin">#{project.id}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 gold-gradient-text">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" className="text-gold border-gold hover:bg-gold/10" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Button>
                  {project.liveUrl && (
                    <Button className="bg-gold hover:bg-gold/90 text-black" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
