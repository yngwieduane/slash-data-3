import { ArrowLeft, Car, CheckCircle, TrendingUp, Users, Clock, AlertTriangle, Target, Zap, FileCheck, Award, Database } from 'lucide-react';
import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function RhoonDetailPage() {
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
    { value: '200+', label: 'Service Partners Nationwide', icon: Users },
    { value: 'Millions', label: 'Transactions Automated Annually', icon: TrendingUp },
    { value: '85-90%', label: 'Straight-Through Processing', icon: CheckCircle },
    { value: '99.9%', label: 'Availability Target', icon: Zap },
    { value: '50-70%', label: 'Reduction in Onboarding Time', icon: Clock },
    { value: 'Minutes', label: 'Processing Time vs Legacy Delays', icon: Target }
  ];

  const challenges = [
    {
      title: 'Automated, but Not Fully Streamlined End-to-End',
      description: 'Automation existed, but workflows often relied on legacy dependencies (batch updates, inconsistent partner submission mechanisms, and manual exception handling).',
      impacts: [
        'Standard cases could progress, but exceptions frequently introduced delays of hours to days',
        'High operational overhead to reconcile mismatched or incomplete records',
        'Limited self-service tracking for partners in legacy flows'
      ],
      icon: AlertTriangle
    },
    {
      title: 'Limited Monitoring, Control, and Operational Analytics',
      description: 'The process lacked a centralized operational view across participating entities.',
      impacts: [
        'Limited real-time visibility into submission status and processing SLAs',
        'Reactive exception management and delayed issue resolution',
        'Minimal analytics to track partner activity, volumes, and turnaround performance'
      ],
      icon: Database
    },
    {
      title: 'Non-Uniform Partner Onboarding and Support Needs',
      description: 'Partners differed significantly in digital maturity and capabilities.',
      impacts: [
        'Uneven onboarding experience and variable integration quality',
        'Higher support load due to different operating models',
        'Difficulty standardizing data quality and performance across the ecosystem'
      ],
      icon: Users
    }
  ];

  const solutionCapabilities = [
    {
      title: 'Unified Digital Mortgage Platform',
      description: 'A centralized platform enabling Service Partners to submit, manage, and track vehicle mortgage data through standardized and secure workflows—built to support 170+ Service Partners across the UAE.',
      metrics: [
        '85–95% straight-through processing for clean submissions',
        'Consistent workflows across partner types, with fewer exceptions escalated manually'
      ],
      icon: Database
    },
    {
      title: 'Electronic Data Exchange',
      description: 'Secure system-to-system connectivity enabling automated data submission to Abu Dhabi Mobility and Abu Dhabi Police.',
      metrics: [
        'Processing cycles reduced from legacy delays to minutes for standard transactions',
        'Faster resolution through structured validation and automated checks'
      ],
      icon: Zap
    },
    {
      title: 'Scalable National Infrastructure',
      description: 'High-availability architecture designed for continuous operations at national scale.',
      metrics: [
        '99.9% availability target',
        'Capacity to support thousands of concurrent submissions, aligned to large real-world vehicle activity volumes such as the 317,988 combined 2024 registrations across Abu Dhabi + Northern Emirates'
      ],
      icon: TrendingUp
    },
    {
      title: 'Inclusive Partner Enablement',
      description: 'A dedicated web portal for entities without integration capabilities, plus dashboards and reporting tools providing real-time visibility into submissions and processing status.',
      metrics: [
        'Partner onboarding time reduced by 50–70% using standardized tooling and guided enablement',
        'Improved partner experience through self-service submission and real-time tracking'
      ],
      icon: Target
    }
  ];

  const projectResults = [
    {
      title: 'Improved Data Accuracy and Reliability',
      description: 'Automation and structured data exchange improved data integrity and reduced mismatches.',
      outcomes: [
        '60–80% reduction in data quality issues caused by inconsistent formats and exception-driven corrections',
        'Improved synchronization reliability with Abu Dhabi Mobility and Abu Dhabi Police databases'
      ],
      icon: CheckCircle
    },
    {
      title: 'Operational Insights and Reporting',
      description: 'Built-in dashboards provide Abu Dhabi Mobility and Abu Dhabi Police with real-time oversight.',
      outcomes: [
        'Real-time visibility into submission volumes, processing status, exceptions, and partner activity',
        'Proactive SLA monitoring and continuous optimization through analytics'
      ],
      icon: FileCheck
    },
    {
      title: 'Alignment with National Vision',
      description: 'The project contributes directly to the Effortless Customer Experience Program and supports the UAE\'s Zero Bureaucracy Vision by simplifying government-to-business interactions and improving customer satisfaction.',
      outcomes: [
        'Streamlined government-to-business interactions',
        'Enhanced customer satisfaction through faster, more reliable service',
        'Direct contribution to UAE\'s digital transformation goals'
      ],
      icon: Award
    }
  ];



  return (
    <div className="min-h-screen bg-[#ffffff] pt-20">
      <SEO
        title="Rhoon: Vehicle Mortgage Data Platform - SlashData"
        description="Rhoon streamlines vehicle mortgage data access and exchange for Abu Dhabi Mobility and Police."
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
              <Car className="w-5 h-5 text-[#00c7c5]" />
              <span className="text-sm text-[#00c7c5] tracking-wide">CASE STUDY</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              SlashData's Role in Streamlining Vehicle Mortgage Data Access with Rhoon
            </h1>

            <p className="text-lg md:text-xl text-[#ffffff]/80 leading-relaxed">
              Through a digital transformation project with the Integrated Transport Centre (Abu Dhabi Mobility) and Abu Dhabi Police, SlashData developed Rhoon—a modern platform that streamlines vehicle mortgage data access and exchange across the UAE. The initiative supports the Effortless Customer Experience Program and advances the UAE's Zero Bureaucracy Vision by improving speed, transparency, and service consistency for a large ecosystem of partners.
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
              Summary Impact Snapshot with the following Key Achievements
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
              The legacy process was already automated, but it was constrained by legacy-system limitations—including fragmented partner connectivity, inconsistent data formats, limited real-time visibility, and heavy exception handling. At national scale, these limitations become more visible: in 2024, vehicle registrations reached 213,284 in Abu Dhabi and 104,704 across the Northern Emirates (Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah)—a combined scale of 317,988 registrations that reflects the broader volume of vehicle-related activities the ecosystem must support.
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
              Rhoon is a secure digital platform developed by SlashData in partnership with Abu Dhabi Mobility and Abu Dhabi Police, enabling electronic submission, validation, and exchange of vehicle mortgage data across a national partner network—including banks, financial institutions, car showrooms, government and semi-government entities, and trading companies.
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
              Key Features
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
              Project Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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