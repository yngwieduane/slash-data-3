import { Send, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const triggerNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      let recaptchaToken: string | null = null;

      // Execute reCAPTCHA v3 if available
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha('contact_form_submit');
        } catch (recaptchaError) {
          // reCAPTCHA failed but continue with form submission
          console.log('Form submitted without reCAPTCHA protection');
        }
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        })
      });

      if (!response.ok) {
        let errorMessage = 'There was an error submitting the form. Please try again.';
        try {
          const errorData = await response.json();
          if (typeof errorData?.message === 'string' && errorData.message.trim() !== '') {
            errorMessage = errorData.message;
          }
        } catch (parseError) {
          // Ignore parse errors and fall back to default message
        }
        throw new Error(errorMessage);
      }

      window.gtag?.('event', 'generate_lead', {
        method: 'contact_form'
      });

      triggerNotification('success', 'Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      triggerNotification('error', 'There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // For phone field, only allow numbers, spaces, +, -, and ()
    if (name === 'phone') {
      const filteredValue = value.replace(/[^0-9+\-() ]/g, '');
      setFormData({
        ...formData,
        [name]: filteredValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <div id="contact-form" className="relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#001a1a] to-[#000000] py-20 md:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00c7c5] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00c7c5] rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-[#00c7c5] rounded-3xl rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border-2 border-[#00c7c5] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c7c5]/20 via-[#00c7c5]/10 to-transparent rounded-full mb-6 border border-[#00c7c5]/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#00c7c5] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#00c7c5] tracking-wider uppercase">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              Let's Build the UAE's Future{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c7c5] via-[#00e5e3] to-[#00c7c5]">
                Digital Ecosystem
              </span>{' '}
              Together
            </h2>

            <p className="text-lg md:text-xl text-[#ffffff]/60 mb-8 leading-relaxed">
              Partner with SlashData to transform your digital infrastructure. Our expert team is ready to discuss how our solutions can drive innovation and efficiency for your organization.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:+971800-73282"
                className="group flex items-center gap-4 text-[#ffffff]/80 hover:text-[#00c7c5] transition-colors"
              >
                <div className="w-12 h-12 bg-[#00c7c5]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00c7c5]/20 transition-colors border border-[#00c7c5]/30">
                  <Phone size={20} className="text-[#00c7c5]" />
                </div>
                <div>
                  <div className="text-sm text-[#ffffff]/50">Call Us</div>
                  <div className="text-lg">+971-800-73282</div>
                </div>
              </a>

              <a
                href="mailto:info@slashdata.ae"
                className="group flex items-center gap-4 text-[#ffffff]/80 hover:text-[#00c7c5] transition-colors"
              >
                <div className="w-12 h-12 bg-[#00c7c5]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00c7c5]/20 transition-colors border border-[#00c7c5]/30">
                  <Mail size={20} className="text-[#00c7c5]" />
                </div>
                <div>
                  <div className="text-sm text-[#ffffff]/50">Email Us</div>
                  <div className="text-lg">info@slashdata.ae</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c7c5]/10 to-transparent rounded-3xl blur-2xl"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-[#ffffff]/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[#ffffff]/10 shadow-2xl"
            >
              <h3 className="text-2xl text-[#ffffff] mb-6">Submit your inquiry</h3>

              {notification && (
                <div className={`mb-6 p-4 rounded-xl border ${notification.type === 'success'
                  ? 'bg-[#00c7c5]/10 border-[#00c7c5]/30 text-[#00c7c5]'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
                  } backdrop-blur-sm transition-all duration-300`}>
                  {notification.message}
                </div>
              )}

              {/* Name Field */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm text-[#ffffff]/70 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <User size={18} className="text-[#00c7c5]/50" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-xl text-[#ffffff] placeholder-[#ffffff]/30 focus:outline-none focus:border-[#00c7c5] focus:bg-[#ffffff]/10 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm text-[#ffffff]/70 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Mail size={18} className="text-[#00c7c5]/50" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-xl text-[#ffffff] placeholder-[#ffffff]/30 focus:outline-none focus:border-[#00c7c5] focus:bg-[#ffffff]/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="mb-5">
                <label htmlFor="phone" className="block text-sm text-[#ffffff]/70 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Phone size={18} className="text-[#00c7c5]/50" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-xl text-[#ffffff] placeholder-[#ffffff]/30 focus:outline-none focus:border-[#00c7c5] focus:bg-[#ffffff]/10 transition-all"
                    placeholder="+971 xxx xxxx"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-[#ffffff]/70 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <MessageSquare size={18} className="text-[#00c7c5]/50" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-xl text-[#ffffff] placeholder-[#ffffff]/30 focus:outline-none focus:border-[#00c7c5] focus:bg-[#ffffff]/10 transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00c7c5] to-[#00a09e] text-[#000000] rounded-xl hover:shadow-2xl hover:shadow-[#00c7c5]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
