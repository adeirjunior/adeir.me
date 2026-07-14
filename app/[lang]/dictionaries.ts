import 'server-only';

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'pt') => {
    const loadDictionary = dictionaries[locale];

    if (typeof loadDictionary === 'function') {
        return loadDictionary();
    } else {
        throw new Error(`Dictionary for locale "${locale}" not found.`);
    }
};
