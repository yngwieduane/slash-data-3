import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from 'figma:asset/40bcf5337697c295e9d9f127741dbf0d2e2726a2.png';

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateToSolutions?: () => void;
  onNavigateToPressNews?: () => void;
}

export function Header({ onNavigateHome, onNavigateToSolutions, onNavigateToPressNews }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    scrollToSection('home');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#00c7c5]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="hover:opacity-80 transition-opacity cursor-pointer">
              <img src={logo} alt="SlashData" className="h-8 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-[#000000] hover:text-[#00c7c5] transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#000000] hover:text-[#00c7c5] transition-colors cursor-pointer">
              About Us
            </button>
            <Link to="/solutions" className="text-[#000000] hover:text-[#00c7c5] transition-colors cursor-pointer">
              Solutions
            </Link>
            <Link to="/press-news" className="text-[#000000] hover:text-[#00c7c5] transition-colors cursor-pointer">
              Press and News
            </Link>
            <button
              onClick={() => scrollToSection('contact-form')}
              className="px-6 py-2 border border-[#00c7c5] text-[#00c7c5] rounded hover:bg-[#00c7c5]/10 transition-colors cursor-pointer"
            >
              CONTACT US
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#000000] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#00c7c5]/20">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-[#000000] hover:text-[#00c7c5] transition-colors text-left cursor-pointer">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#000000] hover:text-[#00c7c5] transition-colors text-left cursor-pointer">
                About Us
              </button>
              <Link to="/solutions" onClick={() => setIsMenuOpen(false)} className="text-[#000000] hover:text-[#00c7c5] transition-colors text-left cursor-pointer">
                Solutions
              </Link>
              <Link to="/press-news" onClick={() => setIsMenuOpen(false)} className="text-[#000000] hover:text-[#00c7c5] transition-colors text-left cursor-pointer">
                Press and News
              </Link>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="px-6 py-2 border border-[#00c7c5] text-[#00c7c5] rounded hover:bg-[#00c7c5]/10 transition-colors text-left cursor-pointer"
              >
                CONTACT US
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}