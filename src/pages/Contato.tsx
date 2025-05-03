
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import contactsData from "@/data/contatos.json";

const Contato = () => {
  const { evento } = contactsData;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-flashclip-blue-dark text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Entre em contato conosco para mais informações
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Envie uma mensagem</h2>
                <ContactForm />
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Informações de contato</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-flashclip-blue/10 p-3 rounded-full text-flashclip-blue">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">{evento.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-flashclip-blue/10 p-3 rounded-full text-flashclip-blue">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-gray-600">
                        <a href={`https://wa.me/${evento.whatsapp}`} className="hover:text-flashclip-blue">
                          {evento.whatsapp.replace(/(\d{2})(\d{2})(\d{4,5})(\d{4})/, '+$1 ($2) $3-$4')}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-flashclip-blue/10 p-3 rounded-full text-flashclip-blue">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Localização</h3>
                      <p className="text-gray-600">
                        Campus Ulbra<br />
                        Av. Farroupilha, 8001<br />
                        Canoas - RS, 92425-900
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;
