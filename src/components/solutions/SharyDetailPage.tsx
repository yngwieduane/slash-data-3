import { ArrowLeft, CreditCard, CheckCircle, TrendingUp, Users, Clock, AlertTriangle, Target, Zap, FileCheck, Award, Shield } from 'lucide-react';
import { SEO } from '../SEO';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import digitalDirhamIcon from 'figma:asset/786686ac6ba0139ec64d1a9796d3c2d58619c02b.png';

// Custom Digital Dirham Icon Component
const DigitalDirhamIcon = ({ className }: { className?: string }) => (
  <img src={digitalDirhamIcon} alt="Digital Dirham" className={className} width={24} height={24} />
);

export function SharyDetailPage() {
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
    { value: '100K+', label: 'Transactions Enabled Annually', icon: TrendingUp },
    { value: '100%', label: 'Escrow-Protected Payments', icon: Shield },
    { value: '90%+', label: 'Automation Across Transfer Steps', icon: CheckCircle },
    { value: 'Minutes', label: 'Settlement Time vs Days', icon: Clock },
    { value: '80-90%', label: 'Reduction in Disputes', icon: Award },
    { value: 'Zero', label: 'Cash, Visits, Ambiguity', icon: Target }
  ];

  const challenges = [
    {
      title: 'Limited Transparency in High-Value Transactions',
      description: 'Buyers and sellers had no single source of truth for payment status, vehicle handover, or ownership transfer progression.',
      impacts: [
        'Thousands of annual transactions exposed to uncertainty and dispute risk',
        'Heavy reliance on informal coordination, screenshots, and manual confirmation',
        'Reduced confidence in peer-to-peer vehicle trading'
      ],
      icon: AlertTriangle
    },
    {
      title: 'Weak Financial Safeguards',
      description: 'Payments were often completed before ownership transfer or vehicle condition confirmation.',
      impacts: [
        'Buyers exposed to full financial loss risk',
        'Sellers exposed to delayed or disputed payments',
        'Authorities faced downstream complaints and dispute escalation',
        'In a market where individual vehicle values routinely reach tens or hundreds of thousands of dirhams, the absence of escrow represented a critical systemic gap'
      ],
      icon: DigitalDirhamIcon
    },
    {
      title: 'Insufficient Verification and Auditability',
      description: 'There was no standardized digital proof of vehicle condition, delivery, or acceptance at the point of sale.',
      impacts: [
        'Limited regulatory assurance',
        'Reduced transaction traceability',
        'Challenging post-transaction dispute resolution'
      ],
      icon: FileCheck
    }
  ];

  const solutionCapabilities = [
    {
      title: 'Escrow-Based Digital Guarantee at Scale',
      description: 'Every Shary transaction is governed by a dedicated escrow workflow, ensuring funds are securely held until all predefined conditions are met.',
      metrics: [
        '100% payment protection across all Shary transactions',
        'Tens of thousands of transactions per year executed with zero cash handling',
        'Near elimination of payment-related disputes'
      ],
      icon: Shield
    },
    {
      title: 'Secure Banking Integration and Automated Settlement',
      description: 'Through deep integration with ADCB, buyer funds are deposited into escrow and automatically released only after successful vehicle acceptance and confirmed ownership transfer.',
      metrics: [
        '90–95% straight-through financial settlement with no manual intervention',
        'Settlement cycles reduced from days to minutes after transfer confirmation',
        'Dramatic reduction in fraud exposure and payment disputes'
      ],
      icon: DigitalDirhamIcon
    },
    {
      title: 'Verified Handover and Authoritative Ownership Transfer',
      description: 'Buyers digitally confirm receipt and vehicle condition within a defined acceptance window before ownership is transferred and funds are released.',
      metrics: [
        'End-to-end traceability for every transaction',
        'Clear, time-stamped digital audit trail',
        'Strong protection for both buyer and seller at every step'
      ],
      icon: FileCheck
    },
    {
      title: 'Fully Government-Integrated Digital Workflow via TAMM',
      description: 'Shary operates natively through TAMM, with direct integration into Abu Dhabi Mobility and Abu Dhabi Police systems.',
      metrics: [
        'Ownership updates completed authoritatively and instantly',
        'Customers complete the entire journey digitally, without service center visits',
        'Government entities manage tens of thousands of transactions annually with full visibility and control'
      ],
      icon: Target
    }
  ];

  const projectResults = [
    {
      title: 'A Step-Change in Trust and Market Confidence',
      description: 'By embedding escrow, verification, and government authority into one seamless flow, Shary transformed peer-to-peer vehicle sales into a high-trust, low-risk digital experience.',
      outcomes: [
        '80–90% reduction in transaction-related disputes',
        'Strong increase in consumer confidence in digital vehicle trading',
        'Clear, enforceable transaction rules for all parties'
      ],
      icon: Award
    },
    {
      title: 'Digital, Secure, and Automated Transactions',
      description: 'Shary eliminated cash handling, fragmented steps, and informal coordination.',
      outcomes: [
        '90%+ of transactions completed fully digitally',
        '70–85% reduction in manual follow-ups and exception handling',
        'Significant reduction in fraud, chargebacks, and post-sale conflicts'
      ],
      icon: CheckCircle
    },
    {
      title: 'Radically Improved Customer Experience',
      description: 'Customers can complete the full sale and transfer journey digitally—from listing to payment release—without visiting service centers.',
      outcomes: [
        '50–70% reduction in end-to-end transaction time',
        'Zero physical visits for standard cases',
        'Higher satisfaction across buyers and sellers'
      ],
      icon: Users
    },
    {
      title: 'Direct Contribution to Government Vision',
      description: 'Shary directly advances the Effortless Customer Experience and Zero Bureaucracy initiatives by eliminating manual steps, removing paperwork, and enabling seamless collaboration between TAMM, Abu Dhabi Mobility, Abu Dhabi Police, and financial institutions.',
      outcomes: [
        'Eliminated manual steps and paperwork',
        'Enabled seamless cross-entity collaboration',
        'Aligned with UAE\'s digital transformation goals'
      ],
      icon: Target
    }
  ];



  return (
    <div className="min-h-screen bg-[#ffffff] pt-20">
      <SEO
        title="Shary: Digital Escrow Platform - SlashData"
        description="Shary requires dedicated escrow workflow for high-trust vehicle ownership transfers in Abu Dhabi."
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
              <CreditCard className="w-5 h-5 text-[#00c7c5]" />
              <span className="text-sm text-[#00c7c5] tracking-wide">CASE STUDY</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              SlashData Engineered Shary Abu Dhabi's Flagship Digital Escrow Platform for High-Trust Vehicle Ownership Transfers
            </h1>

            <p className="text-lg md:text-xl text-[#ffffff]/80 leading-relaxed">
              SlashData played a foundational and central role in the design, engineering, and delivery of Shary, a first-of-its-kind government-integrated, escrow-based digital service that fundamentally transforms how individuals buy and sell vehicles in Abu Dhabi. Developed in collaboration with TAMM, Abu Dhabi Mobility (Integrated Transport Centre), and Abu Dhabi Police, Shary replaces a fragmented, high-risk, manual process with a secure, automated, end-to-end digital journey—embedding trust, financial protection, and regulatory assurance into every transaction.
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
              Trust Engineered Into the Platform Itself
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
              Traditional peer-to-peer vehicle sales operated in an environment of structural risk—with disconnected steps, limited guarantees, and no unified digital control over payment, handover, and ownership transfer.
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
              SlashData designed Shary as a mission-critical digital escrow platform, purpose-built to handle high-volume, high-value consumer transactions with government-grade security, resilience, and trust.
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
              Project Results & Transformational Impact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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