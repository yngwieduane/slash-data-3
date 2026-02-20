import { ArrowLeft, FileText, CheckCircle, TrendingUp, Users, Clock, AlertTriangle, Target, Zap, Database, Award, Shield } from 'lucide-react';
import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function WtheeqDetailPage() {
  const navigate = useNavigate();

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
    { value: '38', label: 'Insurers Connected', icon: Users },
    { value: 'Millions', label: 'Policy Transactions Synchronized Annually', icon: TrendingUp },
    { value: '90%+', label: 'Real-Time Validation', icon: CheckCircle },
    { value: '70-90%', label: 'Improvement in Data Quality', icon: Award },
    { value: '99.9%', label: 'Availability Target', icon: Zap },
    { value: 'Instant', label: 'Verification Instead of Delays', icon: Clock }
  ];

  const challenges = [
    {
      title: 'Data Quality and Compliance Risk at Scale',
      description: 'Limited validation controls allowed inconsistent, incomplete, or delayed data submissions.',
      impacts: [
        '5–10% of uploaded policies required correction or reprocessing',
        'Increased compliance risk during enforcement, registration, and renewal activities',
        'Higher operational load for insurers and regulators during peak periods'
      ],
      icon: AlertTriangle
    },
    {
      title: 'Scalability and Resilience Constraints',
      description: 'Legacy architectures were not designed for sustained national growth.',
      impacts: [
        'Performance degradation during high-volume periods (renewals, peak registrations)',
        'Increased maintenance effort to onboard new insurers or expand capacity',
        'Limited ability to scale toward real-time, event-driven services'
      ],
      icon: Database
    },
    {
      title: 'Fragmented and Inefficient User Experience',
      description: 'Non-intuitive interfaces and semi-manual validation slowed operations.',
      impacts: [
        'Slower upload cycles and higher error rates',
        'Increased reliance on support teams',
        'Reduced operational efficiency for insurers managing tens of thousands of policies per year'
      ],
      icon: Users
    }
  ];

  const solutionCapabilities = [
    {
      title: 'Modern Digital Platform for Insurers',
      description: 'A streamlined, intuitive interface enabling insurers to manage high-volume policy uploads with speed and confidence.',
      metrics: [
        '40–60% reduction in time required to submit and manage policy data',
        'Lower error rates through guided workflows and built-in validation',
        'Improved productivity across insurer operations handling hundreds of thousands of policies annually'
      ],
      icon: Target
    },
    {
      title: 'Real-Time Electronic Data Exchange',
      description: 'API-based integration enables instant synchronization with federal traffic and licensing systems.',
      metrics: [
        '90–98% of policy records validated and synchronized in real time',
        '50–80% reduction in service completion time for insurance-dependent processes',
        'Elimination of batch delays and repetitive manual updates',
        'Policy status available instantly for registration, renewal, and enforcement services'
      ],
      icon: Zap
    },
    {
      title: 'Scalable, National-Grade Infrastructure',
      description: 'Built to support the full UAE insurance market and future growth.',
      metrics: [
        'Supports 38 insurance companies nationwide',
        'Designed to process millions of insurance policy transactions annually',
        '99.9% availability target, ensuring continuous operation for mission-critical services'
      ],
      icon: Database
    },
    {
      title: 'Comprehensive Onboarding and Support',
      description: 'End-to-end enablement ensures rapid ecosystem adoption.',
      metrics: [
        '50–70% faster onboarding for new insurers',
        'Reduced support dependency through documentation, monitoring, and real-time assistance',
        'Faster stabilization and consistent performance across partners'
      ],
      icon: Users
    }
  ];

  const projectResults = [
    {
      title: 'Real-Time Verification and Operational Acceleration',
      description: 'Wtheeq transformed insurance verification into a real-time digital capability embedded directly into federal mobility services.',
      outcomes: [
        'Insurance verification completed in real time across registration, renewal, and enforcement workflows',
        'Dramatic reduction in processing delays and service completion times',
        'Improved customer experience through instant policy validation'
      ],
      icon: Zap
    },
    {
      title: 'Improved Data Accuracy and Regulatory Compliance',
      description: 'Automated validation and authoritative synchronization strengthened compliance.',
      outcomes: [
        '70–90% improvement in data quality and consistency',
        'Stronger regulatory assurance through real-time validation',
        'Reduced compliance risk across the insurance ecosystem'
      ],
      icon: CheckCircle
    },
    {
      title: 'Operational Transparency and Insight',
      description: 'Wtheeq introduced real-time dashboards for all stakeholders.',
      outcomes: [
        'Real-time visibility into policy submissions, validations, and exceptions',
        'Proactive monitoring and faster issue resolution',
        'Data-driven insights for continuous optimization'
      ],
      icon: Award
    },
    {
      title: 'Tangible Product Value at National Scale',
      description: 'Wtheeq functions as a core digital utility for the UAE mobility ecosystem.',
      outcomes: [
        'Supports millions of policy transactions annually',
        'Enables seamless integration across 38 insurance providers',
        'Provides mission-critical infrastructure for federal mobility services'
      ],
      icon: TrendingUp
    },
    {
      title: 'Alignment with the UAE\'s National Vision',
      description: 'Wtheeq directly advances the Zero Bureaucracy Vision, demonstrating how platform-based digital infrastructure can unlock scalable, high-impact government services.',
      outcomes: [
        'Eliminated manual steps and paper-based processes',
        'Enabled fully digital, user-centric government services',
        'Demonstrated scalable model for digital transformation'
      ],
      icon: Shield
    }
  ];



  return (
    <div className="min-h-screen bg-[#ffffff] pt-20">
      <SEO
        title="Wtheeq Case Study - SlashData"
        description="Learn how SlashData powered Wtheeq, the UAE's real-time car insurance data backbone."
      />
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#00c7c5] hover:text-[#000000] transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Solutions</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00c7c5] rounded-full blur-3xl"></div>
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
              <FileText className="w-5 h-5 text-[#00c7c5]" />
              <span className="text-sm text-[#00c7c5] tracking-wide">CASE STUDY</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              SlashData Powered Wtheeq The UAE's Real-Time Car Insurance Data Backbone for Federal Traffic & Licensing Systems
            </h1>

            <p className="text-lg md:text-xl text-[#ffffff]/80 leading-relaxed mb-6">
              SlashData played a strategic and execution-critical role in the design, development, and deployment of Wtheeq, a national digital platform that enables real-time car insurance data integration across the UAE's federal traffic and licensing ecosystem.
            </p>

            <p className="text-lg md:text-xl text-[#ffffff]/80 leading-relaxed">
              Delivered in partnership with the Integrated Transport Centre (Abu Dhabi Mobility) and Abu Dhabi Police, Wtheeq serves as a foundational data layer for the UAE's mobility services—ensuring data accuracy, instant verification, regulatory compliance, and seamless service continuity. The initiative directly advances the UAE's Zero Bureaucracy Vision, enabling connected, user-centric, and fully digital government services.
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
              Wtheeq is Not Just a System — It is a National Insurance Data Backbone with the following Key Achievements
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
              The Challenge
            </h2>
            <p className="text-lg text-[#5D4f4f] max-w-3xl mx-auto">
              Insurance policy uploads formed the core data bridge between insurance providers, Abu Dhabi Mobility, and Abu Dhabi Police. However, as transaction volumes grew and regulatory expectations increased, the existing model exposed structural limitations.
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
                    <div className="text-sm text-[#000000] mb-2">Impact:</div>
                    {challenge.impacts.map((impact, i) => (
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

      {/* The SlashData Solution */}
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
              The SlashData Solution
            </h2>
            <p className="text-lg text-[#ffffff]/80 max-w-3xl mx-auto">
              Wtheeq, designed and implemented by SlashData in close partnership with Abu Dhabi Mobility and Abu Dhabi Police, is a modern, API-driven insurance data exchange platform purpose-built for national-scale operations. The platform enables secure, real-time electronic data exchange for the licensed insurance companies in the UAE, transforming insurance verification into a real-time, automated, and authoritative process.
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
              Key Capabilities
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
                    {capability.metrics.map((metric, i) => (
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
              Key Achievements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectResults.map((result, index) => {
              const Icon = result.icon;
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
                    {result.outcomes.map((item: string, i: number) => (
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
              Ready to Transform Your Digital Services?
            </h2>
            <p className="text-lg text-[#000000]/80 mb-8">
              Discover how SlashData can help automate and streamline your processes with secure, scalable solutions.
            </p>
            <button
              onClick={handleContact}
              className="px-8 py-4 bg-[#000000] text-[#ffffff] rounded-lg hover:bg-[#ffffff] hover:text-[#000000] transition-all shadow-lg"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}