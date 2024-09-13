import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use()
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", // Idioma predeterminado
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
    resources: {
      en: {
        translation: {
          greeting: "Hello",
        },
      },
      es: {
        translation: {
          greeting: "Hola",
        },
      },
    },
  });

export default i18n;
