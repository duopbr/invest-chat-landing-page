
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import StripeCheckout from "./StripeCheckout";
import { Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isOnPlanosPage = location.pathname === "/planos";

  return (
    <>
      <div className="bg-invest-green py-2 text-white text-center font-medium text-sm px-4 flex items-center justify-center gap-2 fixed w-full top-0 z-50">
        <Clock className="h-4 w-4" />
        <span>Oferta especial: Vagas limitadas para consultoria de investimentos no WhatsApp - Garanta sua vaga hoje!</span>
      </div>
      <nav className="w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm fixed top-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img 
                    src="/lovable-uploads/54442f75-591b-4301-beb4-3793cae2203e.png" 
                    alt="Duop Logo" 
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/planos" className="text-gray-600 hover:text-invest-blue px-3 py-2 rounded-md text-sm font-medium">
                  Planos
                </Link>
                <a href="#services" className="text-gray-600 hover:text-invest-blue px-3 py-2 rounded-md text-sm font-medium">
                  Serviços
                </a>
                <a href="#how-it-works" className="text-gray-600 hover:text-invest-blue px-3 py-2 rounded-md text-sm font-medium">
                  Como funciona
                </a>
                <a href="#faq" className="text-gray-600 hover:text-invest-blue px-3 py-2 rounded-md text-sm font-medium">
                  Dúvidas frequentes
                </a>
                <a href="#coming-soon" className="text-gray-600 hover:text-invest-blue px-3 py-2 rounded-md text-sm font-medium">
                  Em breve
                </a>
                {!isOnPlanosPage && (
                  <div className="ml-4">
                    <StripeCheckout buttonText="Assinar" />
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-invest-blue hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/planos" 
              className="text-gray-600 hover:text-invest-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </Link>
            <a 
              href="#services" 
              className="text-gray-600 hover:text-invest-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-invest-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Como funciona
            </a>
            <a 
              href="#faq" 
              className="text-gray-600 hover:text-invest-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Dúvidas frequentes
            </a>
            <a 
              href="#coming-soon" 
              className="text-gray-600 hover:text-invest-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Em breve
            </a>
            {!isOnPlanosPage && (
              <div className="block px-3 py-2">
                <StripeCheckout buttonText="Assinar" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
