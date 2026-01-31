import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from 'figma:asset/5a7d94ad9217bc90ee31d3a7715a9f79b43fa965.png';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#000000] text-[#ffffff] py-12 border-t border-[#00c7c5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="SlashData" className="h-8 mb-4" />
            <p className="text-[#ffffff]/70 text-sm">
              Leading UAE-based technology company powering intelligent digital governance
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[#ffffff]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#ffffff]/70">
              <li><a href="#about" className="hover:text-[#00c7c5] transition-colors" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
              <li><a href="#solutions" className="hover:text-[#00c7c5] transition-colors" onClick={(e) => handleNavClick(e, 'solutions')}>Solutions</a></li>
              <li><a href="#partners" className="hover:text-[#00c7c5] transition-colors" onClick={(e) => handleNavClick(e, 'partners')}>Partners</a></li>
              <li><a href="#locations" className="hover:text-[#00c7c5] transition-colors" onClick={(e) => handleNavClick(e, 'locations')}>Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[#ffffff]">Our Offices</h4>
            <ul className="space-y-2 text-sm text-[#ffffff]/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#00c7c5]" />
                <span>Abu Dhabi: ADGM, Al Maryah Island</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#00c7c5]" />
                <span>Dubai: Emmar Square</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#00c7c5]" />
                <span>Sharjah: Almajaz 3</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[#ffffff]">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/company/slashdatadigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffffff]/70 hover:text-[#00c7c5] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/slashdata.ae?igsh=aWRqcHp0anAwMzEx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffffff]/70 hover:text-[#00c7c5] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/Slashdataae-61565916537764/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffffff]/70 hover:text-[#00c7c5] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="space-y-2 text-sm text-[#ffffff]/70">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#00c7c5]" />
                <span>info@slashdata.ae</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#00c7c5]" />
                <span>+971-800-73282</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00c7c5]/30 pt-8 text-center text-sm text-[#ffffff]/70">
          <p>&copy; 2026 SlashData. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}