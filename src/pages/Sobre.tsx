
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-flashclip-blue-dark text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre o FlashClip</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Conheça mais sobre nosso evento e nossa missão
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">A identidade do FlashClip</h2>
                <p className="text-gray-700 mb-6">
                  FlashClip é um evento de tecnologia voltado para jovens que desejam expandir seus conhecimentos 
                  em programação através de uma experiência imersiva e prática. Nosso formato único proporciona 
                  uma introdução rápida e eficiente a diversas linguagens de programação emergentes.
                </p>
                <p className="text-gray-700 mb-6">
                  O nome "FlashClip" representa nossa proposta: uma experiência rápida e intensa (Flash), 
                  que oferece um recorte (Clip) das principais linguagens de programação em alta no mercado.
                </p>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="aspect-square h-64 mx-auto bg-white rounded-lg shadow-md flex items-center justify-center">
                  {/* Placeholder for logo */}
                  <div className="text-4xl font-bold text-flashclip-blue">FlashClip</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Objetivo do evento</h2>
              <p className="text-gray-700 mb-6">
                O FlashClip tem como objetivo principal proporcionar aos participantes uma visão ampla sobre 
                diferentes linguagens de programação que estão ganhando destaque no mercado de tecnologia. 
                Queremos democratizar o acesso ao conhecimento tecnológico e incentivar jovens a explorar 
                novas possibilidades na área de desenvolvimento.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Aprendizado Rápido</h3>
                  <p className="text-gray-600">Método imersivo que permite absorver conceitos essenciais em curto período</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Networking</h3>
                  <p className="text-gray-600">Conecte-se com outros entusiastas de tecnologia e profissionais da área</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Experiência Prática</h3>
                  <p className="text-gray-600">Workshops hands-on para aplicação imediata dos conhecimentos adquiridos</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Organização</h2>
              <p className="text-center text-gray-700 mb-10">
                O FlashClip 2023 é organizado pela Ulbra em parceria com empresas do setor de tecnologia,
                visando aproximar estudantes do mercado de trabalho e das tendências tecnológicas atuais.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">FlashClip 2023 - 3ª Edição</h3>
                <p className="mb-2"><span className="font-medium">Data:</span> 15 a 18 de setembro de 2023</p>
                <p className="mb-2"><span className="font-medium">Local:</span> Auditório Principal - Ulbra</p>
                <p><span className="font-medium">Realização:</span> Universidade Luterana do Brasil</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;
