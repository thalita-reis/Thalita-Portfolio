function ContactSection() {
  return (
    <section id="contato" className="py-12 sm:py-24 relative overflow-hidden">
      {/* Background melhorado com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Padrão sutil de pontos - apenas desktop */}
        <div className="hidden sm:block absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(102,126,234,0.2) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Elementos flutuantes sutis - apenas desktop */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da seção melhorado para mobile */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg animate-pulse">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent px-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Estou sempre aberta a novas oportunidades e colaborações interessantes. 
            <span className="text-blue-600 font-semibold"> Entre em contato!</span>
          </p>
        </div>

        {/* Layout responsivo - Stack no mobile */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-12">
            
            {/* Informações de contato */}
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-white/20 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  Informações de Contato
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div className="group">
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 cursor-pointer border border-blue-200/50 hover:border-blue-300 group-hover:scale-[1.02]">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm uppercase tracking-wide mb-1">Email</p>
                        <a 
                          href="mailto:contato@thalitapreis.com.br"
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-lg transition-colors break-all"
                        >
                          contato@thalitapreis.com.br
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="group">
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 transition-all duration-300 cursor-pointer border border-green-200/50 hover:border-green-300 group-hover:scale-[1.02]">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm uppercase tracking-wide mb-1">Telefone</p>
                        <a 
                          href="tel:11948080600"
                          className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-lg transition-colors"
                        >
                          (11) 94808-0600
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="group">
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-50 to-pink-100 hover:from-purple-100 hover:to-pink-200 transition-all duration-300 cursor-pointer border border-purple-200/50 hover:border-purple-300 group-hover:scale-[1.02]">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm uppercase tracking-wide mb-1">Localização</p>
                        <p className="text-purple-600 font-medium text-sm sm:text-lg">São Paulo, SP - Brasil</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-white/20 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-md sm:rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Redes Sociais
                </h4>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a
                    href="https://www.linkedin.com/in/thalitapereiradosreis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:-translate-y-1"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/thalita-reis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:-translate-y-1"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/eu.thata_reis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:-translate-y-1"
                    title="Instagram"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action - Adaptado para mobile */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden relative group hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
                {/* Background animado melhorado */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-purple-400/20 animate-pulse"></div>
                <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="p-6 sm:p-10 relative z-10">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      Pronta para
                      <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                        Novos Desafios!
                      </span>
                    </h3>
                    
                    <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2">
                      Vamos conversar sobre oportunidades, projetos e como posso contribuir para sua equipe!
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <a
                        href="mailto:contato@thalitapreis.com.br"
                        className="block w-full bg-white text-blue-700 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:-translate-y-1"
                      >
                        <span className="mr-2">✉️</span>
                        Enviar Email
                      </a>
                      
                      <a
                        href="https://www.linkedin.com/in/thalitapereiradosreis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-white/10 backdrop-blur-sm border-2 border-white/30 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group-hover:-translate-y-1"
                      >
                        <span className="mr-2">🔗</span>
                        Conectar no LinkedIn
                      </a>
                    </div>
                    
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                      <p className="text-blue-200 text-xs sm:text-sm flex items-center justify-center">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        Disponível para novos projetos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;