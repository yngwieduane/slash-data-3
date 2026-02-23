import { ArrowLeft, Shield, CheckCircle, TrendingUp, Users, Clock, AlertTriangle, Target, Zap, FileCheck, Award } from 'lucide-react';
import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function RabetDetailPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    navigate('/solutions');
  };

  const handleContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };


  const impactStats = [
    { value: t('solutions.rabet.details.stats.items.0.value'), label: t('solutions.rabet.details.stats.items.0.label'), icon: Users },
    { value: t('solutions.rabet.details.stats.items.1.value'), label: t('solutions.rabet.details.stats.items.1.label'), icon: TrendingUp },
    { value: t('solutions.rabet.details.stats.items.2.value'), label: t('solutions.rabet.details.stats.items.2.label'), icon: CheckCircle },
    { value: t('solutions.rabet.details.stats.items.3.value'), label: t('solutions.rabet.details.stats.items.3.label'), icon: Shield },
    { value: t('solutions.rabet.details.stats.items.4.value'), label: t('solutions.rabet.details.stats.items.4.label'), icon: Clock },
    { value: t('solutions.rabet.details.stats.items.5.value'), label: t('solutions.rabet.details.stats.items.5.label'), icon: Zap },
    { value: t('solutions.rabet.details.stats.items.6.value'), label: t('solutions.rabet.details.stats.items.6.label'), icon: Target }
  ];

  const challengesTranslated = Object.values(t('solutions.rabet.details.challenges.items', { returnObjects: true })) as any[];
  const challenges = [
    {
      title: challengesTranslated[0].title,
      description: challengesTranslated[0].description,
      impacts: challengesTranslated[0].impacts,
      icon: AlertTriangle
    },
    {
      title: challengesTranslated[1].title,
      description: challengesTranslated[1].description,
      impacts: challengesTranslated[1].impacts,
      icon: Shield
    },
    {
      title: challengesTranslated[2].title,
      description: challengesTranslated[2].description,
      impacts: challengesTranslated[2].impacts,
      icon: Users
    }
  ];

  const solutionCapabilitiesTranslated = Object.values(t('solutions.rabet.details.solution.items', { returnObjects: true })) as any[];
  const solutionCapabilities = [
    {
      title: solutionCapabilitiesTranslated[0].title,
      description: solutionCapabilitiesTranslated[0].description,
      metrics: solutionCapabilitiesTranslated[0].metrics,
      icon: Users
    },
    {
      title: solutionCapabilitiesTranslated[1].title,
      description: solutionCapabilitiesTranslated[1].description,
      metrics: solutionCapabilitiesTranslated[1].metrics,
      icon: Zap
    },
    {
      title: solutionCapabilitiesTranslated[2].title,
      description: solutionCapabilitiesTranslated[2].description,
      metrics: solutionCapabilitiesTranslated[2].metrics,
      icon: TrendingUp
    },
    {
      title: solutionCapabilitiesTranslated[3].title,
      description: solutionCapabilitiesTranslated[3].description,
      metrics: solutionCapabilitiesTranslated[3].metrics,
      icon: Target
    }
  ];

  const projectResultsTranslated = Object.values(t('solutions.rabet.details.results.items', { returnObjects: true })) as any[];
  const projectResults = [
    {
      title: projectResultsTranslated[0].title,
      description: projectResultsTranslated[0].description,
      itemsList: projectResultsTranslated[0].itemsList,
      icon: CheckCircle
    },
    {
      title: projectResultsTranslated[1].title,
      description: projectResultsTranslated[1].description,
      itemsList: projectResultsTranslated[1].itemsList,
      icon: Shield
    },
    {
      title: projectResultsTranslated[2].title,
      description: projectResultsTranslated[2].description,
      itemsList: projectResultsTranslated[2].itemsList,
      icon: Users
    },
    {
      title: projectResultsTranslated[3].title,
      description: projectResultsTranslated[3].description,
      itemsList: projectResultsTranslated[3].itemsList,
      icon: Award
    },
    {
      title: projectResultsTranslated[4].title,
      description: projectResultsTranslated[4].description,
      itemsList: projectResultsTranslated[4].itemsList,
      icon: FileCheck
    },
    {
      title: projectResultsTranslated[5].title,
      description: projectResultsTranslated[5].description,
      itemsList: projectResultsTranslated[5].itemsList,
      icon: Shield
    }
  ];



  return (
    <div className="min-h-screen bg-[#ffffff] pt-20">
      <SEO
        title={t('solutions.rabet.details.seo.title')}
        description={t('solutions.rabet.details.seo.description')}
      />
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#00c7c5] hover:text-[#000000] transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1 rtl:rotate-180" />
          <span>{t('solutionsPage.rabet.moreInfo').replace(/^.*$/, 'Back to Solutions')}</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#00c7c5 1px, transparent 1px), linear-gradient(90deg, #00c7c5 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00c7c5]/20 rounded-full mb-8 border border-[#00c7c5]/40">
              <Shield className="w-5 h-5 text-[#00c7c5]" />
              <span className="text-sm text-[#00c7c5] tracking-wide">{t('solutions.rabet.details.hero.badge')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              {t('solutions.rabet.details.hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-[#ffffff]/80 leading-relaxed mb-6">
              {t('solutions.rabet.details.hero.description')}
            </p>

          </motion.div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="py-16 md:py-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-4">
              {t('solutions.rabet.details.stats.title')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#ffffff] rounded-xl p-6 border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all shadow-md hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00c7c5] to-[#00a09e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#ffffff]" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl text-[#000000] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#5D4f4f]">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 md:py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-4">
              {t('solutions.rabet.details.challenges.title')}
            </h2>
            <p className="text-lg text-[#5D4f4f] max-w-3xl mx-auto">
              {t('solutions.rabet.details.challenges.description')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#f9f9f9] rounded-xl p-8 border border-[#00c7c5]/10 hover:border-[#00c7c5]/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00c7c5] to-[#00a09e] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#ffffff]" />
                  </div>
                  <h3 className="text-xl text-[#000000] mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-[#5D4f4f] mb-6">
                    {challenge.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-sm text-[#000000] mb-2">{t('solutions.rabet.details.challenges.impactLabel')}</div>
                    {challenge.impacts.map((impact: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#00c7c5] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-[#5D4f4f]">{impact}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#000000] via-[#0a1a1a] to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#ffffff] mb-4">
              {t('solutions.rabet.details.solution.title')}
            </h2>
            <p className="text-lg text-[#ffffff]/80 max-w-3xl mx-auto">
              {t('solutions.rabet.details.solution.description')}
            </p>
          </motion.div>

          <div className="mb-12">
            <motion.h3
              className="text-2xl md:text-3xl text-[#00c7c5] text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('solutions.rabet.details.solution.subtitle')}
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutionCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#ffffff]/5 backdrop-blur-sm rounded-xl p-8 border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00c7c5] to-[#00a09e] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#ffffff]" />
                    </div>
                    <div>
                      <h4 className="text-xl text-[#ffffff] mb-2">
                        {capability.title}
                      </h4>
                      <p className="text-[#ffffff]/70">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-4 border-l-2 border-[#00c7c5]">
                    {capability.metrics.map((metric: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00c7c5] mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#ffffff]/80">{metric}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Results */}
      <section className="py-16 md:py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-4">
              {t('solutions.rabet.details.results.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectResults.map((result, index) => {
              const Icon = result.icon;
              const itemsList = result.itemsList;
              return (
                <motion.div
                  key={index}
                  className="bg-[#f9f9f9] rounded-xl p-8 border border-[#00c7c5]/20 hover:border-[#00c7c5] transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00c7c5] to-[#00a09e] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#ffffff]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-[#000000] mb-2">
                        {result.title}
                      </h3>
                      <p className="text-[#5D4f4f]">
                        {result.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {itemsList.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#00c7c5]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#00c7c5]" />
                        </div>
                        <p className="text-sm text-[#5D4f4f]">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#00c7c5] to-[#00a09e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#000000] mb-6">
              {t('solutions.rabet.details.cta.title')}
            </h2>
            <p className="text-lg text-[#000000]/80 mb-8">
              {t('solutions.rabet.details.cta.subtitle')}
            </p>
            <button
              onClick={handleContact}
              className="px-8 py-4 bg-[#000000] text-[#ffffff] rounded-lg hover:bg-[#ffffff] hover:text-[#000000] transition-all shadow-lg"
            >
              {t('solutions.rabet.details.cta.button')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}