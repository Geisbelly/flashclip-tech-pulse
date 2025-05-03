
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import cursos from "@/data/cursos.json";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça nossos cursos</h2>
              <p className="text-gray-600 mb-6">
                Explore nossas linguagens de programação e escolha a que mais combina com suas ambições tecnológicas.
              </p>
            </div>
            
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
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
            
            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="flashclip-gradient">
                <Link to="/cursos">Ver todos os cursos</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o FlashClip</h2>
              <p className="text-gray-600 mb-6">
                O FlashClip é um evento imersivo que proporciona uma experiência rápida e prática em diversas linguagens de programação. 
                Uma oportunidade única para expandir seus conhecimentos e se conectar com outros entusiastas de tecnologia.
              </p>
              <Button asChild variant="outline" size="lg" className="border-flashclip-blue text-flashclip-blue hover:bg-flashclip-blue/10">
                <Link to="/sobre">Saiba mais sobre o evento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
