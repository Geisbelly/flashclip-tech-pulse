
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-flashclip-blue-dark overflow-hidden">
      {/* Background pattern/effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              FlashClip <span className="text-blue-300">2023</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up" style={{animationDelay: "0.2s"}}>
              Sua imersão rápida e prática no mundo da programação
            </p>
            <p className="mb-6 text-gray-300 animate-slide-up" style={{animationDelay: "0.3s"}}>
              De 15 a 18 de setembro • Auditório Principal
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: "0.4s"}}>
              <Button size="lg" asChild className="bg-white text-flashclip-blue hover:bg-gray-100">
                <Link to="/inscricao">Inscreva-se agora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10">
                <Link to="/cursos">Ver cursos</Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white/10 p-4 rounded-lg">
            <div className="aspect-video rounded-md overflow-hidden border border-white/20">
              {/* Placeholder for video */}
              <div className="w-full h-full bg-black/30 flex items-center justify-center">
                <p className="text-white/70">Vídeo de apresentação do FlashClip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
