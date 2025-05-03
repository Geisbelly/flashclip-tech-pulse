
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Cursos from "./pages/Cursos";
import CursoDetalhes from "./pages/curso/CursoDetalhes";
import Cronograma from "./pages/Cronograma";
import Patrocinadores from "./pages/Patrocinadores";
import Contato from "./pages/Contato";
import Inscricao from "./pages/Inscricao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/:slug" element={<CursoDetalhes />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/patrocinadores" element={<Patrocinadores />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/inscricao" element={<Inscricao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
