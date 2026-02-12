import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import icpLogo from 'figma:asset/71af8fcd537edae0f25a16837046d0dd0ab3b682.png';
import itcLogo from 'figma:asset/709e49cedd48fabeab7c80b562d3a1afb26f813d.png';
import pcfcLogo from 'figma:asset/40b4063f3062f670947d5afa0fbb5a2767be5b51.png';
import abuDhabiPoliceLogo from 'figma:asset/28c841e2f00b2979499e3d2c278073cd2d4a5557.png';
import abuDhabiMobilityLogo from 'figma:asset/e788f7518eb655f4a005730b7276d443484734cf.png';
import fabLogo from 'figma:asset/0fe969c02806430e0b6dee280854fbcfcc1f6e54.png';
import adnicLogo from 'figma:asset/9ef3d977f0f2bc110e2947f4b8cec7e62386d600.png';
import enbadLogo from 'figma:asset/e16737077b6af9a6c4b23bbf27d3a6a264e3859d.png';
import adcbLogo from 'figma:asset/a0ca8bebf60c27ea795f97f850b14768066f36f8.png';
import gigLogo from 'figma:asset/d18bb2c6d67dceccc97810738300de8e3454d065.png';
import orientLogo from 'figma:asset/b1274894e54ef93cb47a7d65fb8e799d48b2fcb4.png';
import tammLogo from 'figma:asset/f581fa71757ac7bf761ced39a959b076f1f2d710.png';
import dubaiInsuranceLogo from 'figma:asset/7f54bba4dbbddb4d18ab5297dc49e8409b70bc2f.png';

export function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const allPartners = [
    {
      id: 1,
      name: 'Federal Authority For Identity, Citizenship, Customs & Port Security (ICP)',
      logo: 'ICP',
      logoImage: icpLogo
    },
    {
      id: 2,
      name: 'Abu Dhabi Police',
      logo: 'ADP',
      logoImage: abuDhabiPoliceLogo
    },
    {
      id: 15,
      name: 'TAMM',
      logo: 'TAMM',
      logoImage: tammLogo
    },
    {
      id: 3,
      name: 'Integrated Transport Center',
      logo: 'ITC',
      logoImage: itcLogo
    },
    {
      id: 4,
      name: 'Abu Dhabi Mobility',
      logo: 'ADM',
      logoImage: abuDhabiMobilityLogo
    },
    {
      id: 5,
      name: 'The Ports, Customs and Free Zone Corporation (PCFC)',
      logo: 'PCFC',
      logoImage: pcfcLogo
    },
    {
      id: 8,
      name: 'ADCB',
      logo: 'ADCB',
      logoImage: adcbLogo
    },
    {
      id: 9,
      name: 'Emirates NBD',
      logo: 'Emirates NBD',
      logoImage: enbadLogo
    },
    {
      id: 10,
      name: 'FAB',
      logo: 'FAB',
      logoImage: fabLogo
    },
    {
      id: 12,
      name: 'ADNIC',
      logo: 'ADNIC',
      logoImage: adnicLogo
    },
    {
      id: 13,
      name: 'GIG',
      logo: 'GIG',
      logoImage: gigLogo
    },
    {
      id: 14,
      name: 'Orient Insurance',
      logo: 'Orient Insurance',
      logoImage: orientLogo
    },
    {
      id: 16,
      name: 'Dubai Insurance',
      logo: 'Dubai Insurance',
      logoImage: dubaiInsuranceLogo
    }
  ];

  // Group partners into slides of 4
  const partnerSlides = [];
  for (let i = 0; i < allPartners.length; i += 4) {
    partnerSlides.push(allPartners.slice(i, i + 4));
  }

  // Auto-rotation disabled per user request
  // useEffect(() => {
  //   if (!isPaused) {
  //     const timer = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % partnerSlides.length);
  //     }, 4000);
  //     return () => clearInterval(timer);
  //   }
  // }, [isPaused, partnerSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partnerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partnerSlides.length) % partnerSlides.length);
  };

  return (
    <div id="partners" className="py-8 md:py-12 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 bg-[#00c7c5]/10 rounded-full mb-4">
            <span className="text-sm text-[#00c7c5]">OUR PARTNERS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-4">
            Trusted Partnerships
          </h2>
          <p className="text-lg md:text-xl text-[#5D4f4f] max-w-3xl mx-auto">
            Collaborating with leading government entities and private sector organizations
          </p>
        </motion.div>

        {/* Partners Slider */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partnerSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2">
                    {slide.map((partner) => (
                      <div 
                        key={partner.id}
                        className="bg-[#ffffff] rounded-xl p-6 border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all shadow-md hover:shadow-xl flex flex-col items-center justify-center min-h-[200px]"
                      >
                        <div className="flex-1 flex items-center justify-center mb-3 w-full">
                          {partner.logoImage ? (
                            <img 
                              src={partner.logoImage} 
                              alt={partner.name} 
                              width={200}
                              height={80}
                              loading="lazy"
                              className="max-w-full max-h-[100px] w-auto object-contain"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-[#00c7c5]/10 rounded-full flex items-center justify-center">
                              <span className="text-2xl text-[#00c7c5]">
                                {partner.logo.substring(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs md:text-sm text-[#000000] text-center line-clamp-2">{partner.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {partnerSlides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 w-10 h-10 md:w-12 md:h-12 bg-[#ffffff] border-2 border-[#00c7c5] text-[#00c7c5] rounded-full flex items-center justify-center hover:bg-[#00c7c5] hover:text-[#ffffff] transition-all shadow-lg z-10"
                aria-label="Previous partners"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 w-10 h-10 md:w-12 md:h-12 bg-[#ffffff] border-2 border-[#00c7c5] text-[#00c7c5] rounded-full flex items-center justify-center hover:bg-[#00c7c5] hover:text-[#ffffff] transition-all shadow-lg z-10"
                aria-label="Next partners"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Slider Dots */}
          {partnerSlides.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {partnerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 h-3 bg-[#00c7c5] rounded-full'
                      : 'w-3 h-3 bg-[#00c7c5]/30 rounded-full hover:bg-[#00c7c5]/50'
                  }`}
                  aria-label={`Go to partner slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
