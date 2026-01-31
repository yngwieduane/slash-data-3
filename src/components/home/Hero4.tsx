import { ArrowRight, ChevronLeft, ChevronRight, Shield, Building2, CreditCard, Car } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import sharyImage from 'figma:asset/af20950ffa5434b6ff6180d4c02fd1fc789fb969.png';
import wtheeqImage from 'figma:asset/95593bd69be596ae11fd99a17f6e211dd4544c2c.png';
import rhoonImage from 'figma:asset/9c57c3fe1e2802066e2a08373a337e84a4f2af5c.png';
import rabetImage from 'figma:asset/6b5df21da8b2df30c8986db2c525b831d63b5481.png';

interface Hero4Props {
  onNavigateToSolutions?: () => void;
}

export function Hero4({ onNavigateToSolutions }: Hero4Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Particle animation
    const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];
    
    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
    
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 199, 197, 0.3)';
        ctx.fill();
      });
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 199, 197, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slides = [
    {
      id: 1,
      type: 'hero',
      title: "Powering the UAE's Next Generation of Digital Government",
      subtitle: "Enabling Seamless Integration Between the Private Sector and Government Entities"
    }
  ];

  // Auto-rotation disabled per user request
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div id="home" className="relative bg-[#ffffff] pt-20 overflow-hidden">
      {/* Particle/Dot Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <canvas id="particleCanvas" className="absolute inset-0 w-full h-full"></canvas>
      </div>
      
      {/* Hero Section - Centered Minimal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Top Badge */}
          <motion.div 
            className="pb-8 md:pb-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffffff] rounded-full border border-[#00c7c5]/30 shadow-sm">
              <div className="w-2 h-2 bg-[#00c7c5] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#000000]">Trusted by Government & 250+ Private Partners</span>
            </div>
          </motion.div>

          {/* Main Headline - Large Typography */}
          <motion.div 
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#000000] mb-6 leading-[1.1] tracking-tight">
              Powering the UAE's{' '}
              <span className="text-[#00c7c5]">Next-Generation Digital Ecosystem</span>
            </h1>
          </motion.div>
          
          {/* Subtitle Message */}
          <motion.div 
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#5D4f4f] leading-relaxed max-w-4xl mx-auto">
              Connecting Government and Private Sector Within a Unified Digital Ecosystem
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <button 
              onClick={() => {
                const solutionsSection = document.getElementById('solutions');
                if (solutionsSection) {
                  solutionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group px-8 py-4 bg-[#00c7c5] text-[#ffffff] rounded-lg hover:bg-[#00b0ae] transition-all flex items-center justify-center gap-3 text-lg shadow-lg cursor-pointer"
            >
              Learn More
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-4 bg-[#ffffff] text-[#000000] rounded-lg border-2 border-[#000000] hover:bg-[#000000] hover:text-[#ffffff] transition-all text-lg cursor-pointer"
            >
              Become a Partner
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}