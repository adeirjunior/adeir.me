import { resolve, toFileUrl } from "https://deno.land/std@0.179.0/path/mod.ts";

interface languages {
    pt: languageKeys
    en: languageKeys
}

interface languageKeys {
    intro: string
    intro2: string
}

export default class MultiL {
    navigatorL: string = window.navigator.language;
    languageKey!: string;
    #avaliableL: languages;

    constructor(value: string) {

        const path = toFileUrl(resolve(value))

        const file = Deno.readTextFileSync(path);

        this.#avaliableL = JSON.parse(file);
    }

    setLanguage(key: string) {
        const avaliableKeys: string[] = Object.keys(this.#avaliableL)
        let value = key

        if (key.includes('-')) {
                    
            value = key.split('-')[0]
        } 

        avaliableKeys.forEach(avaliableKey => {

            if (avaliableKey === value ) {
                this.languageKey = value
                return
            }

        });

        if (!this.languageKey) this.languageKey = 'default'
    }

    get(key: string) {
        let returnValue = '';

        if(this.languageKey !== 'default') {
            const path = this.#avaliableL[this.languageKey as keyof languages]

            const avaliableKeys: string[] = Object.keys(path)

            avaliableKeys.forEach(avaliableKey => {
                if (avaliableKey === key ) {
                    returnValue = path[key as keyof languageKeys]
                }
            });
        } else {
            const path = this.#avaliableL['en']

            const avaliableKeys: string[] = Object.keys(path)

            avaliableKeys.forEach(avaliableKey => {
                if (avaliableKey === key ) {
                    returnValue = path[key as keyof languageKeys]
                }
            });
        }

        if(returnValue) return returnValue
    }
}