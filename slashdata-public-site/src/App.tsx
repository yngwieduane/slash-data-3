import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

// Lazy load non-critical routes to reduce initial bundle
const SolutionsPage = lazy(() => import('./components/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const WtheeqDetailPage = lazy(() => import('./components/solutions/WtheeqDetailPage').then(m => ({ default: m.WtheeqDetailPage })));
const RabetDetailPage = lazy(() => import('./components/solutions/RabetDetailPage').then(m => ({ default: m.RabetDetailPage })));
const RhoonDetailPage = lazy(() => import('./components/solutions/RhoonDetailPage').then(m => ({ default: m.RhoonDetailPage })));
const SharyDetailPage = lazy(() => import('./components/solutions/SharyDetailPage').then(m => ({ default: m.SharyDetailPage })));
const ArticleDetail = lazy(() => import('./components/ArticleDetail').then(m => ({ default: m.ArticleDetail })));
const PressNews = lazy(() => import('./PressNews'));

// Simple loading fallback - minimal DOM
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#00c7c5] border-t-transparent rounded-full animate-spin" />
  </div>
);

function HomeSectionRoute({ targetId }: { targetId: string }) {
  const location = useLocation();

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  }, [targetId, location.key]);

  return <Home />;
}

function SolutionDetailRoute() {
  const { solutionId } = useParams();

  switch (solutionId) {
    case 'wtheeq':
      return <WtheeqDetailPage />;
    case 'rabet':
      return <RabetDetailPage />;
    case 'rhoon':
      return <RhoonDetailPage />;
    case 'shary':
      return <SharyDetailPage />;
    default:
      return <SolutionsPage />;
  }
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // GA4 pageview tracking - deferred to idle time
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window.gtag === 'function') {
        const pagePath = `${location.pathname}${location.search}${location.hash}`;
        window.gtag('event', 'page_view', {
          page_path: pagePath,
          page_location: window.location.href,
          page_title: document.title
        });
      }
    };
    
    // Defer tracking to idle time to reduce main thread work
    if ('requestIdleCallback' in window) {
      requestIdleCallback(trackPageView, { timeout: 2000 });
    } else {
      setTimeout(trackPageView, 100);
    }
  }, [location.pathname, location.search, location.hash]);

  // Basic GA4 click tracking - passive listener
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href.startsWith('mailto:')) {
        window.gtag?.('event', 'contact', {
          method: 'email',
          link_url: href
        });
        return;
      }

      if (href.startsWith('tel:')) {
        window.gtag?.('event', 'contact', {
          method: 'phone',
          link_url: href
        });
        return;
      }

      if (href.startsWith('http')) {
        try {
          const url = new URL(href);
          if (url.origin !== window.location.origin) {
            window.gtag?.('event', 'click', {
              link_url: href,
              link_text: anchor.textContent?.trim() || undefined,
              outbound: true
            });
          }
        } catch {
          // ignore invalid URLs
        }
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleFooterNavigate = (view: string) => {
    switch (view) {
      case 'about':
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('about');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
      case 'solutions':
        navigate('/solutions');
        break;
      case 'partners':
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('partners');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
      case 'locations':
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('locations');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<HomeSectionRoute targetId="about" />} />
          <Route path="/contactus" element={<HomeSectionRoute targetId="contact-form" />} />
          <Route path="/contact-us" element={<HomeSectionRoute targetId="contact-form" />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetailRoute />} />
          <Route path="/press-news" element={<PressNews />} />
          <Route path="/press-news/:id" element={<ArticleDetail />} />
        </Routes>
      </Suspense>

      <Footer onNavigate={handleFooterNavigate} />
    </div>
  );
}
