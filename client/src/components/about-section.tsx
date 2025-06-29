import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={about.workspaceImage}
              alt="Modern workspace with computer and design tools"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{about.title}</h3>
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Objetivo Profissional</h4>
              <p className="text-gray-700 leading-relaxed">
                Busco oportunidades como Product Owner, Product Manager ou Desenvolvedora Front-end em empresas inovadoras, 
                onde possa aplicar minha combinação única de visão estratégica e habilidades técnicas. Com 20 anos de experiência 
                em gestão de produtos digitais, liderança de equipes e implementação de soluções ágeis, estou pronta para orquestrar 
                produtos que não só atendem às necessidades de negócios, mas também criam soluções inovadoras e de alto impacto. 
                Minha transição para o desenvolvimento Front-end com HTML, CSS, JavaScript, TypeScript, React.js e Node.js me permite 
                integrar estratégia de produto e desenvolvimento técnico de forma mais eficaz e colaborativa.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-4 bg-gray-50">
                <div className="text-2xl font-bold text-primary mb-1">{about.stats.projects}</div>
                <div className="text-sm text-gray-600">Projetos Concluídos</div>
              </Card>
              <Card className="text-center p-4 bg-gray-50">
                <div className="text-2xl font-bold text-primary mb-1">{about.stats.experience}</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
