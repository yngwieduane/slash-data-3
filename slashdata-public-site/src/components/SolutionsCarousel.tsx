import { useState } from 'react';
import { ChevronLeft, ChevronRight, Network, Building2, Car, CreditCard, ArrowRight, FileText, Shield } from 'lucide-react';

interface SolutionsCarouselProps {
  onNavigateToRabetDetail?: () => void;
  onNavigateToRhoonDetail?: () => void;
  onNavigateToSharyDetail?: () => void;
  onNavigateToWtheeqDetail?: () => void;
}

export function SolutionsCarousel({ onNavigateToRabetDetail, onNavigateToRhoonDetail, onNavigateToSharyDetail, onNavigateToWtheeqDetail }: SolutionsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const solutions = [
    {
      id: 'rabet',
      name: 'Rabet',
      description: 'Rabet enables secure, real-time interoperability for health insurance policy data—ingesting, validating, and reconciling information between insurance providers and ICP (Identity, Citizenship, Customs & Port Security) to ensure accurate, compliant exchanges.',
      icon: Shield,
      gradient: 'from-[#00c7c5] to-[#00a09e]'
    },
    {
      id: 'rhoon',
      name: 'Rhoon',
      description: 'Rhoon is an end-to-end secure gateway that streamlines vehicle mortgage data submission—coordinating controlled ingestion, validation, and regulatory alignment from 200+ banks and financial institutions into the Federal Traffic & Licensing System.',
      icon: Car,
      gradient: 'from-[#00c7c5] to-[#00a09e]',
      hasDetailPage: true
    },
    {
      id: 'wtheeq',
      name: 'Wtheeq',
      description: 'Wtheeq powers real-time integration between motor insurance policy systems and the Federal Traffic & Licensing System, enabling automated policy submission, validation, and faster processing through reliable data exchange.',
      icon: FileText,
      gradient: 'from-[#00c7c5] to-[#00a09e]',
      hasDetailPage: true
    },
    {
      id: 'shary',
      name: 'Shary',
      description: 'Shary delivers end-to-end vehicle ownership transfers powered by a secure escrow account—protecting funds from start to finish and releasing payment only after verified handover, backed by full transparency and auditable records.',
      icon: CreditCard,
      gradient: 'from-[#00c7c5] to-[#00a09e]'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const getVisibleSolutions = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % solutions.length;
      visible.push(solutions[index]);
    }
    return visible;
  };

  const handleNavigate = (solutionId: string) => {
    if (solutionId === 'wtheeq' && onNavigateToWtheeqDetail) {
      onNavigateToWtheeqDetail();
    } else if (solutionId === 'rabet' && onNavigateToRabetDetail) {
      onNavigateToRabetDetail();
    } else if (solutionId === 'rhoon' && onNavigateToRhoonDetail) {
      onNavigateToRhoonDetail();
    } else if (solutionId === 'shary' && onNavigateToSharyDetail) {
      onNavigateToSharyDetail();
    }
  };

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-[#000000] via-[#0a1a1a] to-[#000000] relative overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00c7c5]/10 via-transparent to-[#00c7c5]/10 animate-gradient-slide"></div>

      {/* Radial Gradient Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00c7c5]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00c7c5]/5 rounded-full filter blur-3xl"></div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#00c7c5 1px, transparent 1px), linear-gradient(90deg, #00c7c5 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00c7c5] text-sm mb-4 uppercase tracking-widest">OUR SOLUTIONS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6">What We Offer</h2>
          <p className="text-xl text-[#ffffff]/70 max-w-3xl mx-auto">
            Delivering cutting-edge digital solutions that transform how government and businesses operate
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-[#00c7c5] hover:bg-[#00b0ae] rounded-full flex items-center justify-center text-[#ffffff] transition-all shadow-lg shadow-[#00c7c5]/50 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-[#00c7c5] hover:bg-[#00b0ae] rounded-full flex items-center justify-center text-[#ffffff] transition-all shadow-lg shadow-[#00c7c5]/50 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            {getVisibleSolutions().map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={`${solution.title}-${index}`}
                  onClick={() => handleNavigate(solution.id)}
                  className="group bg-[#ffffff] rounded-2xl p-8 border border-[#00c7c5]/30 hover:border-[#00c7c5] transition-all duration-300 hover:shadow-lg hover:shadow-[#00c7c5]/30 hover:scale-105"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform`}>
                      <Icon className="w-10 h-10 text-[#ffffff]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-[#000000] text-center mb-4">{solution.name}</h3>
                  <p className="text-sm text-[#000000]/70 text-center mb-4">{solution.description}</p>

                  {/* Button */}
                  <div className="flex justify-center">
                    <button
                      className="px-6 py-3 border border-[#00c7c5] text-[#00c7c5] rounded-lg hover:bg-[#00c7c5] hover:text-[#ffffff] transition-all cursor-pointer"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleNavigate(solution.id);
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${index === currentIndex
                    ? 'bg-[#00c7c5] w-8'
                    : 'bg-[#00c7c5]/30 hover:bg-[#00c7c5]/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes gradient-slide {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        .animate-gradient-slide {
          animation: gradient-slide 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
