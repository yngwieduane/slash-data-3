import { ArrowRight, Calendar, Tag, Phone } from 'lucide-react';
import { SEO } from './components/SEO';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import sharyLaunchImage from './assets/c8e6b70914f752aa1a15c7e28d4542a079de5523.jpeg';
import bahriLaunchImage from './assets/54ae292a61905664f7aacdcd263faea8b2b77071.png';
import icpHonorImage from './assets/547e1b616f0a080936e58b83e82981e848a456a9.png';
import { useNavigate } from 'react-router-dom';

export default function PressNews() {
  const navigate = useNavigate();
  const articles = [
    {
      id: 1,
      title: "SlashData Launches Shary at Gitex 2025",
      excerpt: "SlashData, in partnership with TAMM, Abu Dhabi Police and Integrated Transport Center, is excited to announce the launch of Shary during Gitex 2025, a new step toward smarter, more connected digital services.",
      fullContent: "SlashData, a leading UAE-based technology company, has officially launched Shary at Gitex 2025, marking a significant milestone in digital transformation. This innovative platform, developed in partnership with TAMM, Abu Dhabi Police, and Integrated Transport Center, represents a new era of smarter, more connected digital services for the UAE. Shary aims to streamline government and private sector services, providing seamless integration and enhanced user experiences for citizens and residents across the Emirates.",
      category: "Partnership",
      date: "October, 2025",
      image: sharyLaunchImage,
      featured: true
    },
    {
      id: 2,
      title: "SlashData is proud to partner with the Ports, Customs & Freezone corporation (PCFC)",
      excerpt: "During Gitex Global 2025, and MOU was signed between Customs & Freezone corporation (PCFC) and SlashData Digital LLC to launch Bahri, the first platform that enables instant, secure and fully digital submission of vessel insurance policies",
      fullContent: "At Gitex Global 2025, a landmark MOU was signed between the Ports, Customs & Freezone Corporation (PCFC) and SlashData Digital LLC. This partnership introduces Bahri, a groundbreaking platform that revolutionizes maritime operations by enabling instant, secure, and fully digital submission of vessel insurance policies. Bahri represents a significant advancement in port operations efficiency, eliminating paperwork and reducing processing times while maintaining the highest security standards. This collaboration demonstrates SlashData's commitment to digitizing critical infrastructure services across the UAE.",
      category: "Partnership",
      date: "October, 2025",
      image: bahriLaunchImage,
      featured: false
    },
    {
      id: 3,
      title: "Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) Honors SlashData at GITEX 2024",
      excerpt: "The honour highlights the exceptional collaboration between ICP and SlashData in automating various procedures and transactions for one of the authority's services through the Rabet. The electronic platform brings together over 43 insurance companies within a unified database, enabling the automation of health insurance verification for authority clients.",
      fullContent: "SlashData received prestigious recognition from the Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) at GITEX 2024. This honor acknowledges the exceptional collaboration between ICP and SlashData in automating critical procedures and transactions through the Rabet platform. The innovative electronic platform has successfully integrated over 43 insurance companies into a unified database, dramatically improving efficiency in health insurance verification for authority clients. This achievement demonstrates SlashData's capability to deliver large-scale digital transformation solutions that serve both government entities and the public sector.",
      category: "Recognition",
      date: "October, 2024",
      image: icpHonorImage,
      featured: false
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="min-h-screen bg-[#ffffff] pt-20">
      <SEO
        title="Press & News - SlashData"
        description="Stay updated with the latest insights, innovations, and success stories from SlashData."
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00c7c5]/20 rounded-full mb-6 border border-[#00c7c5]/40">
              <span className="text-sm text-[#00c7c5] tracking-wide">LATEST UPDATES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6">
              Press & <span className="text-[#00c7c5]">News</span>
            </h1>
            <p className="text-lg md:text-xl text-[#ffffff]/70 max-w-3xl mx-auto">
              Stay updated with the latest insights, innovations, and success stories from SlashData
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group"
                onClick={() => navigate(`/press-news/${article.id}`)}
              >
                <div className="bg-[#ffffff] rounded-xl overflow-hidden border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all shadow-md hover:shadow-xl h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {article.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-[#00c7c5] text-[#000000] rounded-full text-xs">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3 text-xs text-[#5D4f4f]">
                      <div className="flex items-center gap-1.5">
                        <Tag size={14} className="text-[#00c7c5]" />
                        <span>{article.category}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#00c7c5]" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl text-[#000000] mb-3 group-hover:text-[#00c7c5] transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-sm text-[#5D4f4f] mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>

                    <button
                      className="flex items-center gap-2 text-[#00c7c5] hover:text-[#000000] transition-colors group/btn mt-auto cursor-pointer"
                      onClick={() => navigate(`/press-news/${article.id}`)}
                    >
                      <span className="text-sm">Learn More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#00c7c5 1px, transparent 1px), linear-gradient(90deg, #00c7c5 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#ffffff] mb-6">
            Want to Learn More About <span className="text-[#00c7c5]">Our Solutions?</span>
          </h2>
          <p className="text-lg md:text-xl text-[#ffffff]/70 mb-10 max-w-2xl mx-auto">
            Get in touch with our team to discover how SlashData can transform your digital services and drive innovation across your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:800-73282"
              className="group px-8 py-4 bg-[#00c7c5] text-[#000000] rounded-lg hover:bg-[#ffffff] transition-all flex items-center gap-3 shadow-lg shadow-[#00c7c5]/30 cursor-pointer"
            >
              <Phone size={20} />
              <span>Call 800-73282</span>
            </a>

            <button
              onClick={() => {
                scrollToTop();
                setTimeout(() => navigate('/'), 300);
              }}
              className="group px-8 py-4 bg-[#ffffff]/10 text-[#ffffff] rounded-lg hover:bg-[#ffffff]/20 transition-all flex items-center gap-3 border border-[#ffffff]/20 cursor-pointer"
            >
              <span>Back to Home</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}