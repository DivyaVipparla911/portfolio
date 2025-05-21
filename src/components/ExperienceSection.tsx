
import { Card } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Full Stack Development Intern",
      company: "Glo AI Inc., New York",
      period: "Dec 2024 - Mar 2025",
      responsibilities: [
        "Worked in an Agile team of 4 developers and built a full-stack application using Node.js (Backend), React Native (Frontend), Firebase Authentication, and MongoDB, delivering a seamless cross-platform user experience.",
        "Engineered an AI-powered recommendation engine (using Gemini AI) to analyze social media trends and suggest personalized outfits.",
        "Designed RESTful APIs to fetch and process user data and partner store feeds for dynamic content.",
        "Streamlined authentication and data sync using Firebase, reducing login errors by 30%."
      ]
    },
    {
      title: "Custom Software Engineering Analyst",
      company: "Accenture, Bengaluru",
      period: "Jan - Aug 2023",
      responsibilities: [
        "Administered a diverse portfolio of 12 R&D applications deployed across Windows Server 2019, Azure App Services, and AWS EC2, implementing proactive server monitoring solutions.",
        "Performed comprehensive database administration using Toad for Oracle, SQL Server Management Studio, and Oracle Enterprise Manager.",
        "Developed responsive and interactive user interfaces with JavaScript, implementing the MVVM pattern with Knockout.js for dynamic data binding.",
        "Engineered backend solutions using .NET Framework and .NET Core, implementing dependency injection patterns and RESTful API endpoints.",
        "Maintained Linux-based clinical data application, implementing shell scripts for automated maintenance tasks."
      ]
    },
    {
      title: "Application Development Associate",
      company: "Accenture, Chennai",
      period: "Aug 2021 - Dec 2022",
      responsibilities: [
        "Developed a full-stack web application using .NET Core for backend services and Angular for the frontend, deployed on AWS EC2 instances.",
        "Implemented RESTful APIs with C# and Entity Framework Core, incorporating dependency injection, middleware pipelines, and JWT authentication.",
        "Created a customer support portal featuring lazy-loaded modules, reactive forms with custom validators, and a real-time chat functionality, improving client satisfaction scores by 32%.",
        "Optimized frontend performance through strategically implemented cookies, browser cache management, lazy loading, reducing page load times by 45%.",
        "Orchestrated continuous deployment pipelines using Concourse CI, implementing automated build, test, and deployment workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-background border border-gold/20 p-6 hover:border-gold/40 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold gold-gradient-text">{exp.title}</h3>
                  <p className="text-gold/80">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
