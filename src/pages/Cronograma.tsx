
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schedule from "@/components/Schedule";

const Cronograma = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-flashclip-blue-dark text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cronograma</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Confira a programação completa do evento
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Schedule />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cronograma;
