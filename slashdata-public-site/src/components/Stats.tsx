import { TrendingUp, Users, Building2, Briefcase } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: TrendingUp, value: '100M+', label: 'Transactions Handled' },
    { icon: Building2, value: '250+', label: 'Private Sector Partners' },
    { icon: Briefcase, value: '7+', label: 'Government Partners' },
    { icon: Users, value: '110+', label: 'Team Strength' },
  ];

  return (
    <div className="py-24 bg-[#00c7c5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffffff] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ffffff] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#ffffff] mb-4">Our Impact</h2>
          <p className="text-xl text-[#ffffff]/90">Trusted by organizations across the UAE</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-[#ffffff]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#ffffff]/30 hover:bg-[#ffffff]/20 transition-all hover:shadow-lg">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#ffffff]" />
              <div className="mb-2 text-[#ffffff] text-4xl md:text-5xl">{stat.value}</div>
              <div className="text-base text-[#ffffff]/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}