import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      console.log('🚀 Enviando para /api/contact:', formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📡 Status:', response.status);
      const result = await response.json();
      console.log('📬 Resposta:', result);

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.error || 'Erro ao enviar');
      }
    } catch (error) {
      console.error('💥 Erro:', error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-600">
            Entre em contato através do formulário abaixo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
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
                      className="text-blue-600 hover:text-blue-700"
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
                      className="text-green-600 hover:text-green-700"
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
                <a
                  href="https://www.linkedin.com/in/thalitapereiradosreis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span>💼</span>
                </a>
                <a
                  href="https://github.com/thalita-reis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
                >
                  <span>🐱</span>
                </a>
                <a
                  href="https://www.instagram.com/eu.thata_reis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <span>📸</span>
                </a>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Seu nome completo"
                    required
                    disabled={isLoading}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu.email@exemplo.com"
                    required
                    disabled={isLoading}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Conte-me sobre seu projeto..."
                    rows={6}
                    required
                    disabled={isLoading}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isLoading ? "Enviando..." : "✈️ Enviar Mensagem"}
                </Button>

                {status === "success" && (
                  <div className="text-green-600 text-center p-3 bg-green-50 rounded">
                    ✅ Mensagem enviada com sucesso!
                  </div>
                )}

                {status === "error" && (
                  <div className="text-red-600 text-center p-3 bg-red-50 rounded">
                    ❌ Erro ao enviar. Tente: contato@thalitapreis.com.br
                  </div>
                )}

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
        </div>
      </div>
    </section>
  );
}

export default ContactSection;