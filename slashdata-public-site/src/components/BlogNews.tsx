import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sharyLaunchImage from '../assets/c8e6b70914f752aa1a15c7e28d4542a079de5523.jpeg';
import bahriLaunchImage from '../assets/54ae292a61905664f7aacdcd263faea8b2b77071.png';
import icpHonorImage from '../assets/547e1b616f0a080936e58b83e82981e848a456a9.png';

interface BlogNewsProps {
  onNavigateToPressNews?: () => void;
  onNavigateToArticle?: (article: any) => void;
}

export function BlogNews({ onNavigateToPressNews, onNavigateToArticle }: BlogNewsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const articles = [
    {
      id: 1,
      title: "SlashData Launches Shary at Gitex 2025",
      excerpt: "SlashData, in partnership with TAMM, Abu Dhabi Police and Integrated Transport Center, is excited to announce the launch of Shary during Gitex 2025, a new step toward smarter, more connected digital services.",
      category: "Partnership",
      date: "October, 2025",
      image: sharyLaunchImage,
      featured: true
    },
    {
      id: 2,
      title: "SlashData is proud to partner with the Ports, Customs & Freezone corporation (PCFC)",
      excerpt: "During Gitex Global 2025, and MOU was signed between Customs & Freezone corporation (PCFC) and SlashData Digital LLC to launch Bahri, the first platform that enables instant, secure and fully digital submission of vessel insurance policies",
      category: "Partnership",
      date: "October, 2025",
      image: bahriLaunchImage,
      featured: false
    },
    {
      id: 3,
      title: "Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) Honors SlashData at GITEX 2024",
      excerpt: "The honour highlights the exceptional collaboration between ICP and SlashData in automating various procedures and transactions for one of the authority's services through the Rabet. The electronic platform brings together over 43 insurance companies within a unified database, enabling the automation of health insurance verification for authority clients.",
      category: "Recognition",
      date: "October, 2024",
      image: icpHonorImage,
      featured: false
    }
  ];

  // Auto-rotation disabled per user request
  // useEffect(() => {
  //   if (!isPaused) {
  //     const timer = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % articles.length);
  //     }, 5000);
  //     return () => clearInterval(timer);
  //   }
  // }, [isPaused, articles.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <div id="blog-news" className="py-16 md:py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-4">
            Press & News
          </h2>
          <p className="text-lg md:text-xl text-[#5D4f4f] max-w-3xl mx-auto">
            Stay updated with the latest insights, innovations, and success stories from SlashData
          </p>
        </div>

        {/* Articles Slider */}
        <div
          className="relative mb-8 md:mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {articles.map((article) => (
                <div key={article.id} className="w-full flex-shrink-0 px-2" onClick={() => onNavigateToArticle?.(article)}>
                  <div className="group cursor-pointer max-w-4xl mx-auto">
                    <div className="bg-[#ffffff] rounded-2xl overflow-hidden border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all shadow-lg hover:shadow-2xl">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative overflow-hidden h-64 md:h-auto md:min-h-[400px]">
                          <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {article.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-[#00c7c5] text-[#000000] rounded-full text-xs">
                                Featured
                              </span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 via-transparent to-transparent md:hidden"></div>
                        </div>

                        {/* Content Side */}
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-4 text-sm text-[#5D4f4f]">
                            <div className="flex items-center gap-2">
                              <Tag size={16} className="text-[#00c7c5]" />
                              <span>{article.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-[#00c7c5]" />
                              <span>{article.date}</span>
                            </div>
                          </div>

                          <h3 className="text-2xl md:text-3xl text-[#000000] mb-4 group-hover:text-[#00c7c5] transition-colors leading-tight">
                            {article.title}
                          </h3>

                          <p className="text-[#5D4f4f] mb-6 leading-relaxed">
                            {article.excerpt}
                          </p>

                          <button className="group/btn flex items-center gap-2 text-[#00c7c5] hover:gap-3 transition-all" onClick={() => onNavigateToArticle?.(article)}>
                            Read More
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 w-10 h-10 md:w-12 md:h-12 bg-[#ffffff] border-2 border-[#00c7c5] text-[#00c7c5] rounded-full flex items-center justify-center hover:bg-[#00c7c5] hover:text-[#ffffff] transition-all shadow-lg z-10"
            aria-label="Previous article"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 w-10 h-10 md:w-12 md:h-12 bg-[#ffffff] border-2 border-[#00c7c5] text-[#00c7c5] rounded-full flex items-center justify-center hover:bg-[#00c7c5] hover:text-[#ffffff] transition-all shadow-lg z-10"
            aria-label="Next article"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${index === currentSlide
                  ? 'w-8 h-3 bg-[#00c7c5] rounded-full'
                  : 'w-3 h-3 bg-[#00c7c5]/30 rounded-full hover:bg-[#00c7c5]/50'
                  }`}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            className="group px-6 md:px-8 py-3 md:py-4 bg-[#000000] text-[#ffffff] rounded-lg hover:bg-[#00c7c5] hover:text-[#000000] transition-all flex items-center gap-3 mx-auto"
            onClick={onNavigateToPressNews}
          >
            View All Articles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}