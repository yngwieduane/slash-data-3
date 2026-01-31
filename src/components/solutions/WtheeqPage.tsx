import { ArrowLeft, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import carInsuranceImg from 'figma:asset/b97c801bd976d26ba0a81be742532ff4d535de32.png';
import heroBackgroundImg from 'figma:asset/e8e59357111056982228df59de7b7a0faac1692e.png';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../SEO';

export function WtheeqPage() {
  const navigate = useNavigate();
  const [activeChallenge, setActiveChallenge] = useState(0);

  const handleBack = () => {
    navigate('/');
  };

  const challenges = [
    {
      id: 0,
      number: '01',
      title: 'Limited User Experience (UX/UI)',
      description: 'The legacy portal lacked an intuitive interface, resulting in a slow and confusing experience for users managing daily uploads and validations.'
    },
    {
      id: 1,
      number: '02',
      title: 'Integration Difficulties',
      description: 'Limited documentation and minimal real-time support during onboarding.'
    },
    {
      id: 2,
      number: '03',
      title: 'Resource Constraints Among Partners',
      description: 'Several smaller insurance firms operated with limited in-house IT teams, making it difficult to complete API integrations, troubleshoot data sync issues, and maintain compliance independently.'
    }
  ];


  return (
    <div className="min-h-screen bg-[#ffffff]">
      <SEO
        title="Wtheeq Platform - SlashData"
        description="Real-Time Car Insurance Data Integration with Federal Traffic & Licensing Systems."
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
            className="flex items-center gap-2 text-[#00c7c5] hover:text-[#ffffff] transition-colors pt-8 pb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <div className="py-16 md:py-24">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-[#ffffff]/60 mb-6">
                <span>Solutions</span>
                <span>/</span>
                <span className="text-[#00c7c5]">Wtheeq</span>
              </div>

              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-[#00c7c5]/20 border border-[#00c7c5] rounded-full mb-6">
                <span className="text-[#00c7c5]">Solution Case Study</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
                Wtheeq Platform
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-[#00c7c5] mb-6 leading-relaxed">
                Real-Time Car Insurance Data Integration with Federal Traffic & Licensing Systems
              </p>

              {/* Description */}
              <p className="text-lg text-[#ffffff]/80 mb-8 max-w-3xl leading-relaxed">
                A vital digital transformation initiative ensuring data accuracy, real-time verification, and regulatory compliance within the UAE's mobility ecosystem.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#00c7c5]/30 rounded-lg p-4">
                  <div className="text-2xl md:text-3xl text-[#00c7c5] mb-1">38</div>
                  <div className="text-xs md:text-sm text-[#ffffff]/70">Target Insurance Companies</div>
                </div>
                <div className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#00c7c5]/30 rounded-lg p-4">
                  <div className="text-2xl md:text-3xl text-[#00c7c5] mb-1">100%</div>
                  <div className="text-xs md:text-sm text-[#ffffff]/70">Real-Time Sync</div>
                </div>
                <div className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#00c7c5]/30 rounded-lg p-4">
                  <div className="text-2xl md:text-3xl text-[#00c7c5] mb-1">Zero</div>
                  <div className="text-xs md:text-sm text-[#ffffff]/70">Manual Entry</div>
                </div>
                <div className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#00c7c5]/30 rounded-lg p-4">
                  <div className="text-2xl md:text-3xl text-[#00c7c5] mb-1">24/7</div>
                  <div className="text-xs md:text-sm text-[#ffffff]/70">Availability</div>
                </div>
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
            <p className="text-lg text-[#000000]/80 leading-relaxed">
              Through a digital transformation initiative led by the <strong>Integrated Transport Centre (Abu Dhabi Mobility)</strong>, <strong>Abu Dhabi Police</strong>, and <strong>SlashData</strong>, the solution serves the UAE's <strong>Zero Bureaucracy Vision</strong>. Enabling seamless, user-centric, and connected services across the mobility landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="py-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-[#00c7c5]" size={32} />
            <h2 className="text-[#000000]">Challenge</h2>
          </div>

          <p className="text-[#000000]/80 mb-8 text-lg">
            The existing practice for car insurance policy data uploads provided the foundational link between insurance providers and Integrated Transport Centre (Abu Dhabi Mobility) Abu Dhabi Police. The following key challenges were identified in the current practice:
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
            <h2 className="text-[#000000]">The SlashData Solution</h2>
          </div>

          <div className="bg-gradient-to-br from-[#00c7c5]/5 to-[#00c7c5]/10 border border-[#00c7c5]/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-[#000000]/90 leading-relaxed">
              <strong>Wtheeq</strong>, developed and implemented by SlashData in strategic partnership with the <strong>Integrated Transport Centre (Abu Dhabi Mobility)</strong> and <strong>Abu Dhabi Police</strong>, is a modern digital platform designed to streamline the user experience. The solution enables electronic data exchange for insurance companies in UAE; with a capability to provide the solution to <strong>38 insurance companies</strong> in UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#00c7c5] rounded-full flex items-center justify-center">
                  <CheckCircle className="text-[#ffffff]" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-[#000000] mb-2">Modern Digital Platform</h3>
                <p className="text-[#000000]/70">
                  User-friendly interface designed for insurance companies to manage policy uploads with ease and efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#00c7c5] rounded-full flex items-center justify-center">
                  <CheckCircle className="text-[#ffffff]" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-[#000000] mb-2">Electronic Data Exchange</h3>
                <p className="text-[#000000]/70">
                  Seamless API-based integration enabling real-time synchronization with federal systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#00c7c5] rounded-full flex items-center justify-center">
                  <CheckCircle className="text-[#ffffff]" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-[#000000] mb-2">Scalable Infrastructure</h3>
                <p className="text-[#000000]/70">
                  Built to support all 38 insurance companies operating in the UAE with reliable performance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#00c7c5] rounded-full flex items-center justify-center">
                  <CheckCircle className="text-[#ffffff]" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-[#000000] mb-2">Comprehensive Support</h3>
                <p className="text-[#000000]/70">
                  Real-time technical support and detailed documentation for smooth onboarding and operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 bg-[#000000] text-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="text-[#00c7c5]" size={32} />
            <h2 className="text-[#ffffff]">Project Results</h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-[#00c7c5] pl-6">
              <h3 className="text-[#ffffff] mb-3">Enhanced Efficiency and Real-Time Integration</h3>
              <p className="text-[#ffffff]/70">
                Ensured real-time synchronization of policy data with the central systems, significantly reducing service completion time and eliminating the need for repetitive manual updates.
              </p>
            </div>

            <div className="border-l-4 border-[#00c7c5] pl-6">
              <h3 className="text-[#ffffff] mb-3">Improved Data Accuracy and Regulatory Compliance</h3>
              <p className="text-[#ffffff]/70">
                Wtheeq's API-based integration reduced human error by ensuring that all insurance policy data is automatically validated and verified before submission.
              </p>
            </div>

            <div className="border-l-4 border-[#00c7c5] pl-6">
              <h3 className="text-[#ffffff] mb-3">Operational Insights and Transparency</h3>
              <p className="text-[#ffffff]/70">
                Wtheeq introduced real-time dashboards that provide stakeholders — including Integrated Transport Centre (Abu Dhabi Mobility), Abu Dhabi Police, and participating insurers — with visibility into policy uploads, validation statuses, and synchronization metrics.
              </p>
            </div>

            <div className="border-l-4 border-[#00c7c5] pl-6">
              <h3 className="text-[#ffffff] mb-3">Alignment with the UAE's National Vision</h3>
              <p className="text-[#ffffff]/70">
                By simplifying the data exchange process and fostering interoperability between government entities and private insurers, WTHEEQ directly contributes to the Zero Bureaucracy Vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#00c7c5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#ffffff] mb-4">Ready to Transform Your Digital Infrastructure?</h2>
          <p className="text-[#ffffff]/90 mb-8 text-lg">
            Discover how SlashData can help modernize your systems and deliver innovative solutions.
          </p>
          <button
            onClick={handleBack}
            className="bg-[#ffffff] text-[#00c7c5] px-8 py-3 rounded-lg hover:bg-[#000000] hover:text-[#ffffff] transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Solutions
          </button>
        </div>
      </div>
    </div>
  );
}