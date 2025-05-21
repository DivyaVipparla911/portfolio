
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
}

const SkillsSection = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 75 },
    { name: "RESTful APIs", level: 90 },
  ];

  const otherSkills: Skill[] = [
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Jest", level: 75 },
    { name: "CI/CD", level: 70 },
  ];

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-gold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-gold-dark to-gold h-full rounded-full shimmer"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-secondary border border-gold/20 p-6 transition-all hover:border-gold/40">
            <h3 className="text-xl font-semibold mb-6 gold-gradient-text">Frontend Development</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </Card>
          
          <Card className="bg-secondary border border-gold/20 p-6 transition-all hover:border-gold/40">
            <h3 className="text-xl font-semibold mb-6 gold-gradient-text">Backend Development</h3>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </Card>
          
          <Card className="bg-secondary border border-gold/20 p-6 transition-all hover:border-gold/40">
            <h3 className="text-xl font-semibold mb-6 gold-gradient-text">Other Skills</h3>
            <div className="space-y-4">
              {otherSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
