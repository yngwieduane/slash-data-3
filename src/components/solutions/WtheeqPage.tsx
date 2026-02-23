import { ArrowLeft, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import heroBackgroundImg from 'figma:asset/e8e59357111056982228df59de7b7a0faac1692e.png';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../SEO';
import { useTranslation } from 'react-i18next';

export function WtheeqPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeChallenge, setActiveChallenge] = useState(0);

  const handleBack = () => {
    navigate('/');
  };

  const challengesTranslated = Object.values(t('solutions.wtheeq.page.challenges.items', { returnObjects: true })) as any[];
  const challenges = [
    {
      id: 0,
      number: '01',
      title: challengesTranslated[0].title,
      description: challengesTranslated[0].description
    },
    {
      id: 1,
      number: '02',
      title: challengesTranslated[1].title,
      description: challengesTranslated[1].description
    },
    {
      id: 2,
      number: '03',
      title: challengesTranslated[2].title,
      description: challengesTranslated[2].description
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <SEO
        title={t('solutions.wtheeq.page.seo.title')}
        description={t('solutions.wtheeq.page.seo.description')}
      />
      {/* Hero Section */}
      <div className="relative bg-[#000000] text-[#ffffff] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImg}
            alt="Car Insurance Policy Validation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#00c7c5 1px, transparent 1px), linear-gradient(90deg, #00c7c5 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#00c7c5] hover:text-[#ffffff] transition-colors pt-8 pb-4 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1 rtl:rotate-180" />
            <span>{t('solutions.wtheeq.page.cta.backToHome')}</span>
          </button>

          <div className="py-16 md:py-24">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-[#ffffff]/60 mb-6">
                <span>{t('solutionsPage.header.badge', 'Solutions')}</span>
                <span>/</span>
                <span className="text-[#00c7c5]">{t('solutions.wtheeq.name')}</span>
              </div>

              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-[#00c7c5]/20 border border-[#00c7c5] rounded-full mb-6">
                <span className="text-[#00c7c5]">{t('solutions.wtheeq.page.hero.badge')}</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
                {t('solutions.wtheeq.page.hero.title')}
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-[#00c7c5] mb-6 leading-relaxed">
                {t('solutions.wtheeq.page.hero.subtitle')}
              </p>

              {/* Description */}
              <p className="text-lg text-[#ffffff]/80 mb-8 max-w-3xl leading-relaxed">
                {t('solutions.wtheeq.page.hero.description')}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#00c7c5]/30 rounded-lg p-4">
                    <div className="text-2xl md:text-3xl text-[#00c7c5] mb-1">{t(`solutions.wtheeq.page.hero.stats.${index}.value`)}</div>
                    <div className="text-xs md:text-sm text-[#ffffff]/70">{t(`solutions.wtheeq.page.hero.stats.${index}.label`)}</div>
                  </div>
                ))}
              </div>

              {/* Partners Badges - REMOVE */}
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#00c7c5] to-transparent" />
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#00c7c5]/5 border border-[#00c7c5]/20 rounded-lg p-8">
            <p className="text-lg text-[#000000]/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('solutions.wtheeq.page.overview') }} />
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="py-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-[#00c7c5]" size={32} />
            <h2 className="text-[#000000]">{t('solutions.wtheeq.page.challenges.title')}</h2>
          </div>

          <p className="text-[#000000]/80 mb-8 text-lg">
            {t('solutions.wtheeq.page.challenges.description')}
          </p>

          {/* Mobile Tabs */}
          <div className="md:hidden mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => setActiveChallenge(challenge.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex-shrink-0 ${activeChallenge === challenge.id
                    ? 'bg-[#00c7c5] text-[#ffffff]'
                    : 'bg-[#ffffff] text-[#000000] border border-[#00c7c5]/20'
                    }`}
                >
                  {challenge.number}. {challenge.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden">
            <div className="bg-[#ffffff] p-6 rounded-lg border border-[#00c7c5] transition-all">
              <div className="w-12 h-12 bg-[#00c7c5]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00c7c5] text-xl">{challenges[activeChallenge].number}</span>
              </div>
              <h3 className="text-[#000000] mb-3">{challenges[activeChallenge].title}</h3>
              <p className="text-[#000000]/70 text-sm">
                {challenges[activeChallenge].description}
              </p>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {challenges.map(challenge => (
              <div
                key={challenge.id}
                className="bg-[#ffffff] p-6 rounded-lg border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all"
              >
                <div className="w-12 h-12 bg-[#00c7c5]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#00c7c5] text-xl">{challenge.number}</span>
                </div>
                <h3 className="text-[#000000] mb-3">{challenge.title}</h3>
                <p className="text-[#000000]/70 text-sm">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-[#00c7c5]" size={32} />
            <h2 className="text-[#000000]">{t('solutions.wtheeq.page.solution.title')}</h2>
          </div>

          <div className="bg-gradient-to-br from-[#00c7c5]/5 to-[#00c7c5]/10 border border-[#00c7c5]/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-[#000000]/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('solutions.wtheeq.page.solution.description') }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#00c7c5] rounded-full flex items-center justify-center">
                    <CheckCircle className="text-[#ffffff]" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#000000] mb-2">{t(`solutions.wtheeq.page.solution.items.${index}.title`)}</h3>
                  <p className="text-[#000000]/70">
                    {t(`solutions.wtheeq.page.solution.items.${index}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 bg-[#000000] text-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="text-[#00c7c5]" size={32} />
            <h2 className="text-[#ffffff]">{t('solutions.wtheeq.page.results.title')}</h2>
          </div>

          <div className="space-y-8">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="border-l-4 border-[#00c7c5] pl-6 pr-6">
                <h3 className="text-[#ffffff] mb-3">{t(`solutions.wtheeq.page.results.items.${index}.title`)}</h3>
                <p className="text-[#ffffff]/70">
                  {t(`solutions.wtheeq.page.results.items.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#00c7c5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#ffffff] mb-4">{t('solutions.wtheeq.page.cta.title')}</h2>
          <p className="text-[#ffffff]/90 mb-8 text-lg">
            {t('solutions.wtheeq.page.cta.subtitle')}
          </p>
          <button
            onClick={() => navigate('/solutions')}
            className="bg-[#ffffff] text-[#00c7c5] px-8 py-3 rounded-lg hover:bg-[#000000] hover:text-[#ffffff] transition-all inline-flex items-center gap-2 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1 rtl:rotate-180" />
            {t('solutions.wtheeq.page.cta.backToSolutions')}
          </button>
        </div>
      </div>
    </div>
  );
}