
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";

const Patrocinadores = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-flashclip-blue-dark text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patrocinadores</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Conheça as empresas que tornaram o FlashClip possível
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-gray-700">
                Agradecemos a todas as empresas parceiras que acreditam no potencial da educação tecnológica 
                e contribuem para o sucesso do FlashClip.
              </p>
            </div>
            
            <Sponsors />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Patrocinadores;
