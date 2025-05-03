
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-flashclip-blue shadow-md" : "bg-flashclip-blue/80 backdrop-blur-md"}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl text-white font-bold">FlashClip</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-flashclip-blue-dark">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsMenuOpen?: (value: boolean) => void;
}

const NavLinks = ({ mobile, setIsMenuOpen }: NavLinksProps) => {
  const handleClick = () => {
    if (mobile && setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const linkClasses = mobile 
    ? "block text-white hover:text-gray-200 py-2" 
    : "text-white hover:text-gray-200";

  return (
    <>
      <Link to="/" className={linkClasses} onClick={handleClick}>Home</Link>
      <Link to="/sobre" className={linkClasses} onClick={handleClick}>Sobre</Link>
      <Link to="/cursos" className={linkClasses} onClick={handleClick}>Cursos</Link>
      <Link to="/cronograma" className={linkClasses} onClick={handleClick}>Cronograma</Link>
      <Link to="/patrocinadores" className={linkClasses} onClick={handleClick}>Patrocinadores</Link>
      <Link to="/contato" className={linkClasses} onClick={handleClick}>Contato</Link>
      <Button 
        className="bg-white text-flashclip-blue hover:bg-gray-100 font-medium" 
        asChild
      >
        <Link to="/inscricao" onClick={handleClick}>Inscreva-se</Link>
      </Button>
    </>
  );
};

export default Header;
