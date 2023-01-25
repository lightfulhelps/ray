import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

const translation = i18n.createInstance();

translation
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en'],
    resources: { en: { ...en } },
    detection: {
      order: [
        'querystring',
        'cookie',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
        'localStorage',
      ],
      lookupQuerystring: 'lng',
    },
  });

export default translation;
