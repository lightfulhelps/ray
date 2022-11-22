import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

const translation = i18n.createInstance();

translation.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  lng: 'en',
  resources: { en: { ...en } },
});

export default translation;
