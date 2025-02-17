import en from './i18n/en.json';
import ru from './i18n/ru.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  defaultLocale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    en,
    ru,
  },
}));
