
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

const Inscricao = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-flashclip-blue-dark text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Inscrição</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Preencha o formulário abaixo para participar do FlashClip
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Formulário de inscrição</h2>
              <RegistrationForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Inscricao;
