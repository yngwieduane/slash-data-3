import { Shield, Building2, Car, CreditCard, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SolutionsProps {
  onNavigateToWtheeq?: () => void;
}

export function Solutions({ onNavigateToWtheeq }: SolutionsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const solutions = [
    {
      id: 1,
      name: 'Rabet',
      icon: Shield,
      description: 'Real-time health insurance policy data uploads and validation to the Federal Authority For Identity, Citizenship, Customs & Port Security (ICP)',
      color: '#00c7c5'
    },
    {
      id: 2,
      name: 'Rhoon',
      icon: Building2,
      description: 'Gateway for 200+ banks/financial institutions to upload vehicle mortgage data to Federal Traffic and Licensing System',
      color: '#00c7c5'
    },
    {
      id: 3,
      name: 'Wtheeq',
      icon: Car,
      description: 'Real-time car insurance policy data uploads and validation to Federal Traffic and Licensing System',
      color: '#00c7c5'
    },
    {
      id: 4,
      name: 'Shary',
      icon: CreditCard,
      description: 'Escrow-based vehicle ownership transfer payment service with proof of delivery capability',
      color: '#00c7c5'
    }
  ];

  // Auto-rotation disabled per user request
  // useEffect(() => {
  //   if (!isPaused) {
  //     const timer = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % solutions.length);
  //     }, 4000);
  //     return () => clearInterval(timer);
  //   }
  // }, [isPaused, solutions.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <div id="solutions" className="py-16 md:py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 bg-[#00c7c5]/20 rounded-full mb-4">
            <span className="text-sm text-[#00c7c5]">OUR SOLUTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#ffffff] mb-4">
            Intelligent Platforms for a Seamlessly Connected Nation
          </h2>
          <p className="text-lg md:text-xl text-[#ffffff]/70 max-w-3xl mx-auto">
            Connecting systems, empowering government, and serving millions through innovative digital solutions
          </p>
        </motion.div>

        {/* Solutions Grid for Desktop, Slider for Mobile */}
        <div className="md:grid md:grid-cols-2 md:gap-6 md:gap-8 hidden">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div 
                key={solution.id}
                className="group bg-[#ffffff]/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all hover:bg-[#ffffff]/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#00c7c5] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#000000]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl text-[#ffffff] mb-3 group-hover:text-[#00c7c5] transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-base md:text-lg text-[#ffffff]/70 leading-relaxed">
                      {solution.description}
                    </p>
                    {solution.name === 'Wtheeq' && onNavigateToWtheeq && (
                      <button
                        className="mt-4 px-4 py-2 bg-[#00c7c5] text-[#000000] rounded-full flex items-center gap-2 hover:bg-[#00c7c5]/80 transition-colors"
                        onClick={onNavigateToWtheeq}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div 
            className="relative -mx-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <div 
                      key={solution.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-[#ffffff]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00c7c5]/20">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-[#00c7c5] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-7 h-7 text-[#000000]" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl text-[#ffffff] mb-2">
                              {solution.name}
                            </h3>
                            <p className="text-sm text-[#ffffff]/70 leading-relaxed">
                              {solution.description}
                            </p>
                            {solution.name === 'Wtheeq' && onNavigateToWtheeq && (
                              <button
                                className="mt-3 px-3 py-1.5 bg-[#00c7c5] text-[#000000] rounded-full flex items-center gap-2 hover:bg-[#00c7c5]/80 transition-colors text-sm"
                                onClick={onNavigateToWtheeq}
                              >
                                Learn More
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 bg-[#00c7c5] text-[#000000] rounded-full flex items-center justify-center hover:bg-[#00c7c5]/80 transition-all shadow-lg z-10"
              aria-label="Previous solution"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-2 w-10 h-10 bg-[#00c7c5] text-[#000000] rounded-full flex items-center justify-center hover:bg-[#00c7c5]/80 transition-all shadow-lg z-10"
              aria-label="Next solution"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 h-3 bg-[#00c7c5] rounded-full'
                      : 'w-3 h-3 bg-[#00c7c5]/30 rounded-full hover:bg-[#00c7c5]/50'
                  }`}
                  aria-label={`Go to solution ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}