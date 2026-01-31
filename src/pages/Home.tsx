
import { useEffect } from 'react';
import { Hero4 } from '../components/home/Hero4';
import { About } from '../components/About';
import { SolutionsCarousel } from '../components/SolutionsCarousel';
import { Partners } from '../components/Partners';
import { BlogNews } from '../components/BlogNews';
import { Locations } from '../components/Locations';
import { ContactCTA } from '../components/ContactCTA';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useNavigate } from 'react-router-dom';
import { newsArticles } from '../data/articles';
import { SEO } from '../components/SEO';

// Configure your reCAPTCHA site key here
const RECAPTCHA_SITE_KEY = '6Lf_uVcsAAAAAPJ_A96iDVuh4tReSUqQdFIdzpwp';

export function Home() {
    const navigate = useNavigate();

    // Add global cursor pointer styles (kept from original App.tsx)
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      button,
      button *,
      button:hover,
      button:hover *,
      a,
      a *,
      a:hover,
      a:hover *,
      [role="button"],
      [role="button"] *,
      [role="button"]:hover,
      [role="button"]:hover *,
      [onclick],
      [onclick] *,
      div[onclick],
      .cursor-pointer,
      .cursor-pointer *,
      .group,
      .group * {
        cursor: pointer !important;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handleNavigateToArticle = (article: typeof newsArticles[0]) => {
        navigate(`/press-news/${article.id}`);
    };


    return (
        <>
            <SEO
                title="SlashData - Smart Digital Solutions"
                description="Leading provider of digital transformation solutions and services."
            />
            <Hero4 onNavigateToSolutions={() => navigate('/solutions')} />

            <About />

            <SolutionsCarousel
                onNavigateToWtheeq={() => navigate('/solutions/wtheeq')}
                onNavigateToWtheeqDetail={() => navigate('/solutions/wtheeq/details')}
                onNavigateToRabetDetail={() => navigate('/solutions/rabet/details')}
                onNavigateToRhoonDetail={() => navigate('/solutions/rhoon/details')}
                onNavigateToSharyDetail={() => navigate('/solutions/shary/details')}
            />

            <Partners />

            <BlogNews
                onNavigateToPressNews={() => navigate('/press-news')}
                onNavigateToArticle={handleNavigateToArticle}
            />

            <Locations />

            {RECAPTCHA_SITE_KEY ? (
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
            ) : (
                <ContactCTA />
            )}
        </>
    );
}
