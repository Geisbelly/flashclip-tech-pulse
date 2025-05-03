
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import cursosData from "@/data/cursos.json";

interface Curso {
  id: string;
  nome: string;
  descricao: string;
  descricaoLonga: string;
  integrantes: string[];
  imagem: string;
  cor: string;
}

const CursoDetalhes = () => {
  const { slug } = useParams<{ slug: string }>();
  const [curso, setCurso] = useState<Curso | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the course based on the slug parameter
    const cursoEncontrado = cursosData.find(c => c.slug === slug);
    
    if (cursoEncontrado) {
      setCurso(cursoEncontrado);
    }
    
    setLoading(false);
  }, [slug]);
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  if (!curso) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Curso não encontrado</h2>
            <Link to="/cursos" className="text-flashclip-blue hover:underline">
              Voltar para lista de cursos
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div 
          className="py-16 px-4 text-white"
          style={{ backgroundColor: curso.cor }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-white/20 rounded-lg p-4 w-32 h-32 backdrop-blur-sm">
                <img 
                  src={curso.imagem} 
                  alt={curso.nome} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{curso.nome}</h1>
                <p className="text-lg opacity-90">{curso.descricao}</p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Sobre este curso</h2>
                <p className="text-gray-700 mb-8">
                  {curso.descricaoLonga}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">O que você vai aprender</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fundamentos da linguagem {curso.nome}</li>
                    <li>Estrutura de dados e algoritmos</li>
                    <li>Práticas de desenvolvimento</li>
                    <li>Desenvolvimento de projeto prático</li>
                    <li>Dicas para continuar seus estudos</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Instrutores</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {curso.integrantes.map((integrante, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          {integrante.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{integrante}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Informações do curso</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duração</span>
                      <span className="font-medium">3 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nível</span>
                      <span className="font-medium">Iniciante a Intermediário</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vagas</span>
                      <span className="font-medium">25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preço</span>
                      <span className="font-medium">Gratuito</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full" style={{ backgroundColor: curso.cor }}>
                    <Link to="/inscricao">Inscreva-se neste curso</Link>
                  </Button>
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

export default CursoDetalhes;
