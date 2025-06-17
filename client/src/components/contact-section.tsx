import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { contact } = portfolioData;
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // In a real implementation, this would send the form data to a backend endpoint
      console.log("Form data:", data);
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente por email.",
        variant: "destructive"
      });
    }
  };

  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
    instagram: Instagram
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vamos Trabalhar Juntos?</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e projetos desafiadores. Entre em contato!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">{contact.email}</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Telefone</div>
                  <div className="text-gray-600">{contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Localização</div>
                  <div className="text-gray-600">{contact.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Redes Sociais</h4>
              <div className="flex space-x-4">
                {Object.entries(contact.socialLinks)
                  .filter(([platform, url]) => {
                    console.log(`Social link: ${platform} = ${url}`);
                    return url && url.trim() !== "";
                  })
                  .map(([platform, url]) => {
                    const Icon = socialIcons[platform as keyof typeof socialIcons];
                    const colors = {
                      linkedin: "bg-blue-600 hover:bg-blue-700",
                      github: "bg-gray-800 hover:bg-gray-900",
                      twitter: "bg-blue-400 hover:bg-blue-500",
                      instagram: "bg-pink-600 hover:bg-pink-700"
                    };
                    
                    console.log(`Rendering ${platform} with icon:`, Icon);
                    
                    if (!Icon) {
                      console.warn(`No icon found for platform: ${platform}`);
                      return null;
                    }
                    
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colors[platform as keyof typeof colors]} text-white p-3 rounded-lg transition-colors duration-200`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })
                  .filter(Boolean)}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Envie uma Mensagem</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Assunto da mensagem" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Sua mensagem..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
