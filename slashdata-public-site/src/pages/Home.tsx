import { lazy, Suspense, useEffect, useState, useRef } from 'react';
import { Hero4 } from '../components/home/Hero4';
import { useNavigate } from 'react-router-dom';
import { newsArticles } from '../data/articles';
import { SEO } from '../components/SEO';

// Lazy load below-the-fold components
const About = lazy(() => import('../components/About').then(m => ({ default: m.About })));
const SolutionsCarousel = lazy(() => import('../components/SolutionsCarousel').then(m => ({ default: m.SolutionsCarousel })));
const Partners = lazy(() => import('../components/Partners').then(m => ({ default: m.Partners })));
const BlogNews = lazy(() => import('../components/BlogNews').then(m => ({ default: m.BlogNews })));
const Locations = lazy(() => import('../components/Locations').then(m => ({ default: m.Locations })));
const ContactCTA = lazy(() => import('../components/ContactCTA').then(m => ({ default: m.ContactCTA })));
const GoogleReCaptchaProvider = lazy(() => 
  import('react-google-recaptcha-v3').then(m => ({ default: m.GoogleReCaptchaProvider }))
);

// Configure your reCAPTCHA site key here
const RECAPTCHA_SITE_KEY = '6Ldm0lgsAAAAADSgwexDwNpzLLzZlfdTu8OjY0Xp';

// Simple section loader
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-[#00c7c5] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Hook to lazy load component when visible
function useLazyLoad() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function Home() {
    const navigate = useNavigate();
    
    // Lazy load triggers for below-fold sections
    const aboutSection = useLazyLoad();
    const solutionsSection = useLazyLoad();
    const partnersSection = useLazyLoad();
    const blogSection = useLazyLoad();
    const locationsSection = useLazyLoad();
    const contactSection = useLazyLoad();

    const handleNavigateToArticle = (article: typeof newsArticles[0]) => {
        navigate(`/press-news/${article.id}`);
    };

    return (
        <>
            <SEO
                title="UAE Digital Governance & Gov Interoperability Ecosystem | SlashData"
                description="Powering a unified UAE digital ecosystem for governance and interoperability, connecting government and private sector systems through secure, scalable integration."
            />
            <Hero4 onNavigateToSolutions={() => navigate('/solutions')} />

            <div ref={aboutSection.ref}>
              {aboutSection.isVisible && (
                <Suspense fallback={<SectionLoader />}>
                  <About />
                </Suspense>
              )}
            </div>

            <div ref={solutionsSection.ref}>
              {solutionsSection.isVisible && (
                <Suspense fallback={<SectionLoader />}>
                  <SolutionsCarousel
                    onNavigateToWtheeqDetail={() => navigate('/solutions/wtheeq')}
                    onNavigateToRabetDetail={() => navigate('/solutions/rabet')}
                    onNavigateToRhoonDetail={() => navigate('/solutions/rhoon')}
                    onNavigateToSharyDetail={() => navigate('/solutions/shary')}
                  />
                </Suspense>
              )}
            </div>

            <div ref={partnersSection.ref}>
              {partnersSection.isVisible && (
                <Suspense fallback={<SectionLoader />}>
                  <Partners />
                </Suspense>
              )}
            </div>

            <div ref={blogSection.ref}>
              {blogSection.isVisible && (
                <Suspense fallback={<SectionLoader />}>
                  <BlogNews
                    onNavigateToPressNews={() => navigate('/press-news')}
                    onNavigateToArticle={handleNavigateToArticle}
                  />
                </Suspense>
              )}
            </div>

            <div ref={locationsSection.ref}>
              {locationsSection.isVisible && (
                <Suspense fallback={<SectionLoader />}>
                  <Locations />
                </Suspense>
              )}
            </div>

            <div ref={contactSection.ref} id="contact-form">
              {contactSection.isVisible && RECAPTCHA_SITE_KEY ? (
                <Suspense fallback={<SectionLoader />}>
                  <GoogleReCaptchaProvider
                    reCaptchaKey={RECAPTCHA_SITE_KEY}
                    scriptProps={{
                      async: true,
                      defer: true,
                      appendTo: 'head',
                    }}
                    container={{
                      parameters: {
                        badge: 'bottomright',
                        theme: 'dark',
                      }
                    }}
                  >
                    <ContactCTA />
                  </GoogleReCaptchaProvider>
                </Suspense>
              ) : contactSection.isVisible ? (
                <Suspense fallback={<SectionLoader />}>
                  <ContactCTA />
                </Suspense>
              ) : null}
            </div>
        </>
    );
}
