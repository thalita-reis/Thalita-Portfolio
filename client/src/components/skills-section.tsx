import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { useEffect, useState } from "react";

export default function SkillsSection() {
  const { technicalSkills, tools, softSkills } = portfolioData;
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillsToAnimate: Record<string, number> = {};
            technicalSkills.forEach((skill) => {
              skillsToAnimate[skill.name] = skill.percentage;
            });
            setAnimatedSkills(skillsToAnimate);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [technicalSkills]);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Habilidades & Competências</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.percentage}%</span>
                  </div>
                  <Progress 
                    value={animatedSkills[skill.name] || 0} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Ferramentas & Soft Skills</h3>
            
            {/* Tools */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {tools.map((tool) => (
                <Card key={tool.name} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 text-center">
                    <i className={`${tool.icon} text-2xl text-primary mb-2`}></i>
                    <div className="text-sm font-medium text-gray-700">{tool.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="space-y-3">
              {softSkills.map((skill) => (
                <div key={skill.name} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5" />
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
