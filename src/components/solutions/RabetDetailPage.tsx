import { ArrowLeft, Shield, CheckCircle, TrendingUp, Users, Clock, AlertTriangle, Target, Zap, FileCheck, Award } from 'lucide-react';
import { SEO } from '../SEO';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function RabetDetailPage() {
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
    { value: '43+', label: 'Insurers Integrated', icon: Users },
    { value: 'Millions', label: 'Transactions Automated Annually', icon: TrendingUp },
    { value: '90%+', label: 'Straight-Through Processing', icon: CheckCircle },
    { value: '80-95%', label: 'Fraud Risk Reduction', icon: Shield },
    { value: '70-90%', label: 'Reduction in Manual Workload', icon: Clock },
    { value: '99.9%', label: 'Availability Target', icon: Zap },
    { value: 'Seconds', label: 'Instead of Days for Verification', icon: Target }
  ];

  const challenges = [
    {
      title: 'Absence of Real-Time Insurance Verification',
      description: 'Insurance validity could not be verified live against insurer systems at the time of submission.',
      impacts: [
        '15–25% of submitted insurance policies were inactive (expired, cancelled, or suspended) at submission time',
        'Delayed detection led to reprocessing cycles of 3–7 business days',
        'Increased downstream rejections and resubmissions'
      ],
      icon: AlertTriangle
    },
    {
      title: 'Elevated Fraud Risk from Document-Based Proof',
      description: 'Paper and uploaded insurance cards lacked authenticity and traceability controls.',
      impacts: [
        '8–15% of submissions required secondary verification due to inconsistencies',
        'Exposure to altered, duplicated, or reused insurance documents',
        'Increased audit effort and compliance risk'
      ],
      icon: Shield
    },
    {
      title: 'High Manual Workload and Data Errors',
      description: 'Verification depended heavily on human review and data entry.',
      impacts: [
        '70–85% of verification activities were manual',
        'Data entry errors contributed to 5–12% rework rates',
        'Increased in-person visits and customer service interactions'
      ],
      icon: Users
    }
  ];

  const solutionCapabilities = [
    {
      title: 'Unified Insurance Integration Platform',
      description: 'A centralized integration layer enabling insurers to submit, update, and validate policy data electronically.',
      metrics: [
        'Supports 43+ insurance companies nationwide',
        'Designed to handle millions of insurance verification transactions annually',
        'Centralized monitoring, validation, and exception management'
      ],
      icon: Users
    },
    {
      title: 'Real-Time Data Connectivity',
      description: 'Standardized APIs enable near real-time policy status synchronization between insurers and ICP.',
      metrics: [
        '90–97% of verification requests completed automatically in real time',
        'Policy validation time reduced from days to seconds',
        'Immediate detection of expired or cancelled policies'
      ],
      icon: Zap
    },
    {
      title: 'Nationwide Scalability & High Availability',
      description: 'Built for federal-scale throughput and continuous availability.',
      metrics: [
        '99.9% service availability target',
        'Capacity to process thousands of concurrent transactions',
        'Elastic scaling to absorb peak demand periods without degradation'
      ],
      icon: TrendingUp
    },
    {
      title: 'Operational Enablement for Insurers',
      description: 'Comprehensive onboarding and support framework including documentation, testing environments, and live operational support.',
      metrics: [
        'Insurer onboarding time reduced by 50–75%',
        '40–60% reduction in integration-related support requests after stabilization',
        'Faster adoption through standardized technical interfaces'
      ],
      icon: Target
    }
  ];

  const projectResults = [
    {
      title: 'Large-Scale Transaction Automation',
      description: 'The platform enables fully digital insurance verification across ICP services.',
      outcomes: [
        'Millions of insurance verification transactions processed annually',
        '90%+ straight-through processing rate with no human intervention',
        'Real-time verification embedded directly into ICP digital journeys'
      ],
      icon: CheckCircle
    },
    {
      title: 'Fraud Prevention & Risk Reduction',
      description: 'Direct insurer-to-ICP verification eliminates document-based fraud vectors.',
      impacts: [
        '80–95% reduction in document-related fraud exposure',
        'Near elimination of forged, altered, or reused insurance submissions',
        'Stronger auditability and traceability of verification decisions'
      ],
      icon: Shield
    },
    {
      title: 'Reduction in Human Intervention',
      description: 'Manual auditing and data entry are largely eliminated.',
      impacts: [
        '70–90% reduction in manual verification workload',
        '50–80% reduction in average processing time per application',
        'Staff capacity redirected to exception handling and higher-value activities'
      ],
      icon: Users
    },
    {
      title: 'Improved Customer Experience',
      description: 'Automation significantly reduces friction for residents and businesses.',
      impacts: [
        '40–60% faster end-to-end application completion',
        '30–50% fewer customer follow-ups and resubmissions',
        'Reduced need for in-person service visits'
      ],
      icon: Award
    },
    {
      title: 'Elimination of Paper-Based Transactions',
      description: 'The solution enables a fully digital insurance verification environment.',
      impacts: [
        '100% elimination of paper insurance documents in ICP workflows',
        'Reduced storage, handling, and archival costs',
        'Improved sustainability and compliance readiness'
      ],
      icon: FileCheck
    },
    {
      title: 'Protection of Stakeholder Rights',
      description: 'Secure, authoritative verification protects all parties involved.',
      outcomes: [
        'Insurers\' data verified directly at source',
        'ICP decisions backed by real-time, trusted policy data',
        'Citizens protected from delays, errors, and unjustified rejections'
      ],
      icon: Shield
    }
  ];



  return (
    <div className="min-h-screen bg-[#ffffff] pt-20">
      <SEO
        title="Rabet: Digital Bridge for Insurance & Traffic - SlashData"
        description="Rabet connects 43+ insurance providers with federal traffic systems for real-time policy verification."
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
              <span className="text-sm text-[#00c7c5] tracking-wide">CASE STUDY</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              SlashData's Role in Automating ICP's Health Insurance Verification Process
            </h1>

            <p className="text-lg md:text-xl text-[#ffffff]/80 leading-relaxed mb-6">
              As part of a national digital transformation initiative with the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), SlashData delivered a federal-scale platform that automates health insurance verification across the UAE. The initiative directly supports the UAE's Zero Bureaucracy Vision by eliminating manual checks, paper-based submissions, and fragmented insurer validation processes.
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
              Rabet by the Numbers
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
              Before automation, health insurance verification relied on uploaded documents and manual inspection, creating operational inefficiencies, fraud exposure, and customer friction at scale.
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
              The SlashData Solution
            </h2>
            <p className="text-lg text-[#ffffff]/80 max-w-3xl mx-auto">
              SlashData implemented a fully automated, end-to-end electronic insurance verification platform, integrating ICP systems directly with health insurance providers through secure, standardized&nbsp;APIs.
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
              System Capabilities
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
              Project Results & Measurable Impact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectResults.map((result, index) => {
              const Icon = result.icon;
              const itemsList = result.outcomes || result.impacts;
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