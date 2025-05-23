
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Election Automation Analysis",
      description: "A Python project for election data analysis, using Pandas and NumPy to calculate total votes, county-wise turnout, identify the county with the highest turnout, and analyze candidate performance, with data visualization using Matplotlib.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Donation App",
      description: "A donation app using React Native with Firebase for authentication and database management, allowing users to add items for donation, choose pickup or drop-off options, and view nearby donation events via Google Maps API.",
      technologies: ["React Native", "JavaScript", "Cloud Firestore", "Google Maps API", "Firebase Auth"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Customer Support Portal",
      description: "A full-stack web application using .NET Core and Angular, featuring lazy-loaded modules, reactive forms with custom validators, and real-time chat functionality, improving client satisfaction scores by 32%.",
      technologies: ["Angular", ".NET Core", "Entity Framework Core", "AWS EC2", "JWT Authentication"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "AI-powered Fashion Recommendation",
      description: "An AI-powered recommendation engine using Gemini AI to analyze social media trends and suggest personalized outfits, integrated with a mobile application.",
      technologies: ["Node.js", "React Native", "MongoDB", "Firebase", "Gemini AI"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-secondary border border-gold/20 overflow-hidden hover:border-gold/40 transition-all">
              <div className="relative">
                <AspectRatio ratio={16/9} className="bg-gradient-to-br from-black to-secondary/80 shimmer">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    loading="lazy" 
                  />
                </AspectRatio>
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
