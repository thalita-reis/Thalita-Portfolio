// client/src/components/ui/contact-section.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema de validação
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 📧 FUNÇÃO USANDO SUA API PRÓPRIA
  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      
      console.log('🚀 Enviando dados para /api/contact:', data);

      // Chamada para SUA API própria
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      console.log('📡 Response status:', response.status);
      
      const result = await response.json();
      console.log('📬 Response data:', result);

      if (response.ok && result.success) {
        toast({
          title: "Mensagem enviada com sucesso! ✅",
          description: `Obrigada pelo contato, ${data.name}! Respondo em breve no email contato@thalitapreis.com.br`,
          duration: 6000,
        });
        
        form.reset();
      } else {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('💥 Erro no envio:', error);
      
      toast({
        title: "Erro ao enviar mensagem ❌",
        description: "Tente novamente em alguns minutos ou envie diretamente para contato@thalitapreis.com.br",
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e projetos interessantes.
            Entre em contato e vamos conversar!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Entre em Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:contato@thalitapreis.com.br"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      contato@thalitapreis.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <a 
                      href="tel:11948080600"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      (11) 94808-0600
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Localização</p>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                
                  href="https://www.linkedin.com/in/thalitapereiradosreis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span className="text-xl">💼</span>
                </a>
                
                  href="https://github.com/thalita-reis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
                >
                  <span className="text-xl">🐱</span>
                </a>
                
                  href="https://www.instagram.com/eu.thata_reis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <span className="text-xl">📸</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      {...form.register("name")}
                      className="mt-1"
                      disabled={isLoading}
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      {...form.register("email")}
                      className="mt-1"
                      disabled={isLoading}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-900">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
                      rows={6}
                      {...form.register("message")}
                      className="mt-1"
                      disabled={isLoading}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <>
                        <span className="mr-2">✈️</span>
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Ou envie diretamente para:{" "}
                    <a 
                      href="mailto:contato@thalitapreis.com.br" 
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      contato@thalitapreis.com.br
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}