
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  cor: string;
  imagem: string;
}

const CourseCard = ({ id, nome, slug, descricao, cor, imagem }: CourseCardProps) => {
  return (
    <Card className="tech-card overflow-hidden flex flex-col h-full">
      <div 
        className="h-3" 
        style={{ backgroundColor: cor }}
      ></div>
      <CardHeader>
        <div className="w-16 h-16 mb-2 rounded-lg overflow-hidden">
          <img 
            src={imagem} 
            alt={nome} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle>{nome}</CardTitle>
        <CardDescription>{descricao}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content can be added here */}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" style={{ backgroundColor: cor }}>
          <Link to={`/curso/${slug}`}>Saiba Mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
