
import { Card, CardContent } from "@/components/ui/card";
import patrocinadores from "@/data/patrocinadores.json";
import { Instagram, Globe } from "lucide-react";

const Sponsors = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {patrocinadores.map((sponsor) => (
        <Card key={sponsor.id} className="tech-card overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src={sponsor.logo}
                  alt={`Logo ${sponsor.nome}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{sponsor.nome}</h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href={`https://instagram.com/${sponsor.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-flashclip-blue transition-colors"
                  aria-label={`Instagram de ${sponsor.nome}`}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={sponsor.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-flashclip-blue transition-colors"
                  aria-label={`Site de ${sponsor.nome}`}
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Sponsors;
