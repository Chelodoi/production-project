import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend, { BackendOptions } from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru', // язык по умолчанию
        debug: __IS_DEV__,
        backend: <BackendOptions>{ loadPath: '/locales/{{lng}}/{{ns}}.json' },
        interpolation: { escapeValue: false },
    });

export default i18n;
