import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocale from './locales/en.json';
import ruLocale from './locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLocale
      },
      ru: {
        translation: ruLocale
      }
    },
    lng: localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n
