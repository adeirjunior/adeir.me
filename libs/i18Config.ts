export interface IAppConfig {

    supportedLocales: {

        [key: string]: string

    }

}

export const appConfig: IAppConfig = {

    supportedLocales: {

        'en': 'English',

        'pt-br': 'Portuguese',

    }

}