import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useParams, useNavigate } from 'react-router-dom';
import { newsArticles } from '../data/articles';
import { useEffect } from 'react';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = newsArticles.find(a => a.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#ffffff] pt-32 px-4 text-center">
        <h2 className="text-2xl text-gray-800 mb-4">Article not found</h2>
        <button
          onClick={() => navigate('/press-news')}
          className="text-[#00c7c5] hover:underline"
        >
          Back to Press & News
        </button>
      </div>
    );
  }

  const handleBack = () => {
    navigate('/press-news');
  };



  return (
    <div className="min-h-screen bg-[#ffffff] pt-20">
      <SEO
        title={`${article.title} - SlashData`}
        description={article.excerpt}
        image={article.image}
      />
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#00c7c5] hover:text-[#000000] transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Press & News</span>
        </button>
      </div>

      {/* Hero Image - Using Actual Image Dimensions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-auto rounded-lg"
          />
          {article.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-[#00c7c5] text-[#000000] rounded-full text-sm">
                Featured
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Meta Information */}
        <div className="flex items-center gap-6 mb-8 text-[#5D4f4f]">
          <div className="flex items-center gap-2">
            <Tag size={18} className="text-[#00c7c5]" />
            <span>{article.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#00c7c5]" />
            <span>{article.date}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt */}
        <div className="mb-8 p-6 bg-[#f5f5f5] rounded-xl border-l-4 border-[#00c7c5]">
          <p className="text-lg text-[#000000] leading-relaxed italic">
            {article.excerpt}
          </p>
        </div>

        {/* Full Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-[#5D4f4f] leading-relaxed text-lg mb-6">
            {article.fullContent}
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[#00c7c5]/20">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#00c7c5] hover:text-[#000000] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Press & News</span>
          </button>
        </div>
      </article>
    </div>
  );
}