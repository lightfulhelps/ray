import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import uk from './uk.json';

const translation = i18n.createInstance();

translation.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  lng: localStorage.getItem('userLanguage') || 'en',
  supportedLngs: ['en', 'uk'],
  resources: {
    en: { ...en },
    uk: { ...uk },
  },
});

export default translation;
