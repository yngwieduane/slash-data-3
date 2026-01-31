import { Target, Eye, Award, Users, Shield, Zap, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div id="about" className="py-12 md:py-16 bg-[#ffffff] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00c7c5]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00c7c5]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#00c7c5]/10 rounded-full px-6 py-2 mb-6">
            <span className="text-[#00c7c5] tracking-wider">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#000000] mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-[#5D4f4f] max-w-4xl mx-auto">
            A technology leader delivering innovative digital solutions across the UAE
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto">
          {/* Company Introduction */}
          <motion.div 
            className="bg-gradient-to-br from-[#000000] to-[#5D4f4f] rounded-3xl p-8 md:p-12 lg:p-16 mb-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00c7c5]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00c7c5]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              
              <p className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-relaxed">
                SlashData is a leading <span className="text-[#00c7c5]">UAE-based technology company</span> with offices in Abu Dhabi, Dubai and Sharjah, providing cutting-edge digital solutions for government and private sector partners across multiple territories.
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                As a national digital solutions provider, we are aligned with the Zero Government Bureaucracy Program and the 'Next 50' National Strategy.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <div className="text-3xl md:text-4xl text-[#00c7c5] mb-2">100M+</div>
                  <div className="text-sm text-white/70">Transactions</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-[#00c7c5] mb-2">250+</div>
                  <div className="text-sm text-white/70">Private Partners</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-[#00c7c5] mb-2">7+</div>
                  <div className="text-sm text-white/70">Government Partners</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-[#00c7c5] mb-2">110+</div>
                  <div className="text-sm text-white/70">Team Members</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}