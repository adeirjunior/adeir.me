import "server-only";

import { Locale } from "../../../i18n-config";
import { Dictionary } from "../types";

type Dictionaries = {
  en: () => Promise<Dictionary>;
  pt: () => Promise<Dictionary>;
};

const dictionaries: Dictionaries = {
  en: () => import("./../../../dictionaries/en.json").then((module) => module.default),
  pt: () => import("./../../../dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
