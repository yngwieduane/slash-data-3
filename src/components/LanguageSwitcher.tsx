import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-[#000000] hover:text-[#00c7c5] transition-colors rounded-md"
            aria-label="Toggle language"
        >
            <Globe size={20} />
            <span className="font-medium text-sm">
                {i18n.language === 'en' ? 'العربية' : 'English'}
            </span>
        </button>
    );
}
