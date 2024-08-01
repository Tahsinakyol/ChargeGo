import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "./tr.json";
import en from "./en.json";

const resources = {
  en: en,
  tr: tr,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
});

export default { i18n };
