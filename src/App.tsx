import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SolutionsPage } from './components/SolutionsPage';
import { WtheeqPage } from './components/solutions/WtheeqPage';
import { WtheeqDetailPage } from './components/solutions/WtheeqDetailPage';
import { RabetDetailPage } from './components/solutions/RabetDetailPage';
import { RhoonDetailPage } from './components/solutions/RhoonDetailPage';
import { SharyDetailPage } from './components/solutions/SharyDetailPage';
import { ArticleDetail } from './components/ArticleDetail';
import PressNews from './PressNews';

// Configure your reCAPTCHA site key here
const RECAPTCHA_SITE_KEY = '6Lf_uVcsAAAAAPJ_A96iDVuh4tReSUqQdFIdzpwp';

export default function App() {
  const navigate = useNavigate();

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/wtheeq" element={<WtheeqPage />} />
        <Route path="/solutions/wtheeq/details" element={<WtheeqDetailPage />} />
        <Route path="/solutions/rabet/details" element={<RabetDetailPage />} />
        <Route path="/solutions/rhoon/details" element={<RhoonDetailPage />} />
        <Route path="/solutions/shary/details" element={<SharyDetailPage />} />
        <Route path="/press-news" element={<PressNews />} />
        <Route path="/press-news/:id" element={<ArticleDetail />} />
      </Routes>

      <Footer onNavigate={handleFooterNavigate} />
    </div>
  );
}