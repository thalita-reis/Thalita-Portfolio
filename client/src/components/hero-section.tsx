import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function HeroSection() {
  const { personalInfo } = portfolioData;

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Thalita_Pereira_dos_Reis_CV.pdf';
    link.download = 'Thalita_Pereira_dos_Reis_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Olá, eu sou
              <span className="text-primary block">{personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[personalInfo.name.split(' ').length - 1]}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactClick}
                className="px-8 py-3 text-center font-medium"
              >
                Entre em Contato
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadCV}
                className="px-8 py-3 text-center font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src={personalInfo.profileImage}
              alt={`Professional portrait of ${personalInfo.name}`}
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                console.error('Image failed to load:', personalInfo.profileImage);
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#f3f4f6';
                target.style.border = '2px dashed #d1d5db';
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', personalInfo.profileImage);
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
