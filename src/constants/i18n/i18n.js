import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';

const resources = {
  en,
  fr: {
    translation: {
      Hi: 'Hi,',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',

  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false },
});

export default i18n;
