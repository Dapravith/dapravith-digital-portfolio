
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English translations
import enCommon from './locales/en/common.json';
import enNav from './locales/en/nav.json';
import enHero from './locales/en/hero.json';
import enAbout from './locales/en/about.json';
import enExperience from './locales/en/experience.json';
import enEducation from './locales/en/education.json';
import enSkills from './locales/en/skills.json';
import enProjects from './locales/en/projects.json';
import enContact from './locales/en/contact.json';
import enFooter from './locales/en/footer.json';

// Import Khmer translations
import khCommon from './locales/kh/common.json';
import khNav from './locales/kh/nav.json';
import khHero from './locales/kh/hero.json';
import khAbout from './locales/kh/about.json';
import khExperience from './locales/kh/experience.json';
import khEducation from './locales/kh/education.json';
import khSkills from './locales/kh/skills.json';
import khProjects from './locales/kh/projects.json';
import khContact from './locales/kh/contact.json';
import khFooter from './locales/kh/footer.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        nav: enNav,
        hero: enHero,
        about: enAbout,
        experience: enExperience,
        education: enEducation,
        skills: enSkills,
        projects: enProjects,
        contact: enContact,
        footer: enFooter
      },
      kh: {
        common: khCommon,
        nav: khNav,
        hero: khHero,
        about: khAbout,
        experience: khExperience,
        education: khEducation,
        skills: khSkills,
        projects: khProjects,
        contact: khContact,
        footer: khFooter
      },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
