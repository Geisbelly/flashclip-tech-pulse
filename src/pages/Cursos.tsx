
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import cursos from "@/data/cursos.json";

const Cursos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-flashclip-blue-dark text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Cursos</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Explore nossas linguagens de programação e escolha a que mais combina com você
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursos.map((curso) => (
                <CourseCard
                  key={curso.id}
                  id={curso.id}
                  nome={curso.nome}
                  slug={curso.slug}
                  descricao={curso.descricao}
                  cor={curso.cor}
                  imagem={curso.imagem}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cursos;
