/* eslint-disable @typescript-eslint/no-explicit-any */
import { createI18n } from "vue-i18n";
import { DEFAULT_LANG } from "@/definition/constants";

const i18n = createI18n<any>({
  legacy: false,
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: loadLocaleMessages(),
});

function loadLocaleMessages() {
  const locales = require.context(
    "@/locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );

  const messages: any = {};
  locales.keys().forEach(async (key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];

      messages[locale] = await import(`@/locales/${locale}.json`);
    }
  });
  
  return messages;
}

export default i18n;