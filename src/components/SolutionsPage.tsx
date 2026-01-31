import { Shield, Building2, Car, CreditCard, ArrowRight, ArrowLeft, Phone, Mail, Network, FileText } from 'lucide-react';
import { SEO } from './SEO';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SolutionsPage({ onBack, onNavigateToWtheeq, onNavigateToRabetDetail, onNavigateToRhoonDetail, onNavigateToSharyDetail, onNavigateToWtheeqDetail }: any) {
  // Keeping props optional or unused for backward compat if needed, but primarily using navigate
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const solutions = [
    {
      id: 1,
      name: 'Rabet',
      tagline: 'Health Insurance Integration',
      icon: Shield,
      description: 'Real-time health insurance policy data uploads and validation to the Federal Authority For Identity, Citizenship, Customs & Port Security (ICP)',
      color: '#00c7c5',
      hasDetailPage: true,
      path: '/solutions/rabet/details'
    },
    {
      id: 2,
      name: 'Rhoon',
      tagline: 'Banking & Mortgage Gateway',
      icon: Car,
      description: 'Gateway for 200+ banks/financial institutions to upload vehicle mortgage data to Federal Traffic and Licensing System',
      color: '#00c7c5',
      hasDetailPage: true,
      path: '/solutions/rhoon/details'
    },
    {
      id: 3,
      name: 'Wtheeq',
      tagline: 'Car Insurance Validation',
      icon: FileText,
      description: 'Real-time car insurance policy data uploads and validation to Federal Traffic and Licensing System',
      color: '#00c7c5',
      hasDetailPage: true,
      path: '/solutions/wtheeq/details' // Main Wtheeq page
    },
    {
      id: 4,
      name: 'Shary',
      tagline: 'Secure Vehicle Transfers',
      icon: CreditCard,
      description: 'Escrow-based vehicle ownership transfer payment service with proof of delivery capability',
      color: '#00c7c5',
      hasDetailPage: true,
      path: '/solutions/shary/details'
    }
  ];



  return (
    <div className="min-h-screen bg-[#ffffff]">
      <SEO
        title="Our Solutions - SlashData"
        description="Explore our comprehensive suite of digital solutions, including Wtheeq, Rabet, Rhoon, and Shary."
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#001a1a] to-[#000000] pt-24 pb-16 md:pt-32 md:pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00c7c5] rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00c7c5] rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffffff]/5 text-[#ffffff] rounded-xl hover:bg-[#ffffff]/10 transition-all border border-[#ffffff]/10 hover:border-[#00c7c5]/50 mb-8 cursor-pointer"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c7c5]/20 via-[#00c7c5]/10 to-transparent rounded-full mb-6 border border-[#00c7c5]/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#00c7c5] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#00c7c5] tracking-wider uppercase">Our Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#ffffff] mb-6 leading-tight">
              Digital Solutions for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c7c5] via-[#00e5e3] to-[#00c7c5]">
                Connected Future
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#ffffff]/60 leading-relaxed">
              Empowering government entities and private sector partners with cutting-edge platforms that drive digital transformation across the UAE
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid - White Background */}
      <div className="py-16 md:py-24 bg-[#ffffff] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#00c7c5 1px, transparent 1px), linear-gradient(90deg, #00c7c5 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            opacity: 0.03
          }}></div>

          {/* Teal Gradient Circles */}
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-[#00c7c5]/20 to-transparent rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#00c7c5]/15 to-transparent rounded-full blur-[120px]"></div>

          {/* Geometric Accents */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#00c7c5]/10 rounded-2xl rotate-12"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-[#00c7c5]/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              const isHovered = hoveredCard === solution.id;

              return (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                  onClick={() => navigate(solution.path)}
                >
                  {/* Card Container - Enhanced Design */}
                  <div className={`relative bg-[#ffffff] rounded-3xl transition-all duration-500 overflow-hidden h-full ${isHovered
                    ? 'shadow-2xl shadow-[#00c7c5]/30 -translate-y-3 scale-[1.02]'
                    : 'shadow-md'
                    }`}>

                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${isHovered
                      ? 'bg-gradient-to-br from-[#00c7c5] via-[#00a09e] to-[#00c7c5] p-[2px]'
                      : 'bg-[#f0f0f0] p-[1px]'
                      }`}>
                      <div className="bg-[#ffffff] rounded-3xl h-full w-full"></div>
                    </div>

                    {/* Animated Background Gradient */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00c7c5]/10 to-transparent rounded-full blur-3xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
                      }`}></div>

                    <div className="relative p-8 md:p-10">
                      {/* Icon with Background Circle */}
                      <div className="relative mb-8">
                        <div className={`absolute inset-0 w-20 h-20 rounded-full transition-all duration-500 ${isHovered
                          ? 'bg-gradient-to-br from-[#00c7c5]/20 to-[#00a09e]/20 scale-110 blur-xl'
                          : 'bg-transparent'
                          }`}></div>
                        <div className={`relative inline-flex w-20 h-20 rounded-2xl items-center justify-center transition-all duration-500 ${isHovered
                          ? 'bg-gradient-to-br from-[#00c7c5] to-[#00a09e] rotate-6 scale-110'
                          : 'bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]'
                          }`}>
                          <Icon className={`w-10 h-10 transition-all duration-500 ${isHovered ? 'text-[#ffffff] scale-110' : 'text-[#00c7c5]'
                            }`} />
                        </div>
                      </div>

                      {/* Title with Gradient Underline */}
                      <div className="mb-6">
                        <h2 className={`text-3xl md:text-4xl mb-3 transition-all duration-300 ${isHovered ? 'text-[#00c7c5]' : 'text-[#000000]'
                          }`}>
                          {solution.name}
                        </h2>

                        {/* Dynamic Underline */}
                        <div className={`h-1 rounded-full bg-gradient-to-r from-[#00c7c5] to-[#00a09e] transition-all duration-500 ${isHovered ? 'w-20' : 'w-12'
                          }`}></div>
                      </div>

                      {/* Tagline with Badge Style */}
                      <div className={`inline-block px-4 py-2 rounded-full mb-6 transition-all duration-300 ${isHovered
                        ? 'bg-gradient-to-r from-[#00c7c5]/20 to-[#00a09e]/20 border border-[#00c7c5]/30'
                        : 'bg-[#f8f8f8] border border-transparent'
                        }`}>
                        <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-[#00c7c5]' : 'text-[#5D4f4f]'
                          }`}>
                          {solution.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-[#5D4f4f]/90 leading-relaxed mb-8 min-h-[80px]">
                        {solution.description}
                      </p>

                      {/* CTA with Icon */}
                      <button
                        onClick={() => navigate(solution.path)}
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 group/btn cursor-pointer ${isHovered
                          ? 'bg-gradient-to-r from-[#00c7c5] to-[#00a09e] text-[#ffffff] shadow-lg shadow-[#00c7c5]/30'
                          : 'bg-[#f8f8f8] text-[#5D4f4f]'
                          }`}
                      >
                        <span>Learn More</span>
                        <ArrowRight size={18} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''
                          }`} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section - Black Background */}
      <div className="py-20 md:py-32 relative overflow-hidden bg-[#000000]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00c7c5]/10 via-transparent to-[#00c7c5]/5"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c7c5] rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              Ready to Transform Your <br />
              <span className="text-[#00c7c5]">Digital Infrastructure?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#ffffff]/60 mb-10 max-w-2xl mx-auto">
              Partner with SlashData to implement cutting-edge solutions that drive innovation and efficiency
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+971800-73282"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00c7c5] to-[#00a09e] text-[#000000] rounded-xl hover:shadow-2xl hover:shadow-[#00c7c5]/30 transition-all"
              >
                <Phone size={20} />
                <span>+971-800-73282</span>
              </a>

              <a
                href="mailto:info@slashdata.ae"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#ffffff]/10 text-[#ffffff] rounded-xl hover:bg-[#ffffff]/20 transition-all border border-[#00c7c5]/30 backdrop-blur-sm"
              >
                <Mail size={20} />
                <span>info@slashdata.ae</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}