import { Send, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA v3 if available
      if (executeRecaptcha) {
        try {
          const token = await executeRecaptcha('contact_form_submit');
          // Token generated successfully - send to backend for verification
          console.log('reCAPTCHA token generated successfully');
          // In production, send this token to your backend for verification
        } catch (recaptchaError) {
          // reCAPTCHA failed but continue with form submission
          console.log('Form submitted without reCAPTCHA protection');
        }
      }

      // Simulate form submission
      setTimeout(() => {
        setNotification({
          type: 'success',
          message: t('contact.form.successMsg')
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);

        // Clear notification after 3 seconds
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      }, 1000);
    } catch (error) {
      console.error('Form submission error:', error);
      setNotification({
        type: 'error',
        message: t('contact.form.errorMsg')
      });
      setIsSubmitting(false);

      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
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
              <span className="text-sm text-[#00c7c5] tracking-wider uppercase">{t('contact.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-6 leading-tight">
              {t('contact.titlePrefix')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c7c5] via-[#00e5e3] to-[#00c7c5]">
                {t('contact.titleHighlight')}
              </span>
              {t('contact.titleSuffix')}
            </h2>

            <p className="text-lg md:text-xl text-[#ffffff]/60 mb-8 leading-relaxed">
              {t('contact.description')}
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
                  <div className="text-sm text-[#ffffff]/50">{t('contact.callUs')}</div>
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
                  <div className="text-sm text-[#ffffff]/50">{t('contact.emailUs')}</div>
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
              <h3 className="text-2xl text-[#ffffff] mb-6">{t('contact.form.title')}</h3>

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
                  {t('contact.form.nameLabel')}
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
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm text-[#ffffff]/70 mb-2">
                  {t('contact.form.emailLabel')}
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
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="mb-5">
                <label htmlFor="phone" className="block text-sm text-[#ffffff]/70 mb-2">
                  {t('contact.form.phoneLabel')}
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
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-[#ffffff]/70 mb-2">
                  {t('contact.form.messageLabel')}
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
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00c7c5] to-[#00a09e] text-[#000000] rounded-xl hover:shadow-2xl hover:shadow-[#00c7c5]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="text-lg">{isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}