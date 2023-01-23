import i18next from "https://deno.land/x/i18next@v22.4.9/index.js";

import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware@v3.2.2/index.js";

import languageService from './languageService.ts';

i18next

    .init({

        debug: process.env,

        fallbackLng: 'en',

        preload: languageService.allSupported(),

        resources: {

            en: {

                translation: {

                    welcome: 'hello world'

                }

            },

            el: {

                translation: {

                    welcome: 'olá mundo'

                }

            }

        }

    })

const handle = i18nextMiddleware.handle(i18next);

export { handle }