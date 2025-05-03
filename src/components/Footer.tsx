
import React from "react";
import { Instagram, Mail, Globe, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import contactsData from "@/data/contatos.json";

const Footer = () => {
  const { ulbra, evento } = contactsData;

  return (
    <footer className="bg-flashclip-blue-dark text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-75 mb-2">© {new Date().getFullYear()} FlashClip. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <SocialSection title="Ulbra" links={[
              { icon: <Instagram size={18} />, url: `https://instagram.com/${ulbra.instagram}`, label: "Instagram" },
              { icon: <Globe size={18} />, url: ulbra.site, label: "Site" },
              { icon: <Mail size={18} />, url: `mailto:${ulbra.email}`, label: "Email" },
              { icon: <MessageSquare size={18} />, url: `https://wa.me/${ulbra.whatsapp}`, label: "WhatsApp" }
            ]} />
            
            <SocialSection title="Evento" links={[
              { icon: <Instagram size={18} />, url: `https://instagram.com/${evento.instagram}`, label: "Instagram" },
              { icon: <Mail size={18} />, url: `mailto:${evento.email}`, label: "Email" },
              { icon: <MessageSquare size={18} />, url: `https://wa.me/${evento.whatsapp}`, label: "WhatsApp" }
            ]} />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface SocialSectionProps {
  title: string;
  links: SocialLink[];
}

const SocialSection = ({ title, links }: SocialSectionProps) => (
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-sm font-semibold mb-2">{title}</h3>
    <div className="flex gap-3">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
