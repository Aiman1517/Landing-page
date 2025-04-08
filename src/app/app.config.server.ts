import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';



export const getPrerenderParams = () => {
  return {
    '/:lang': [{ lang: 'en' }, { lang: 'ru' }, { lang: 'kz' }],
    '/:lang/reviews': [{ lang: 'en' }, { lang: 'ru' }, { lang: 'kz' }],
    '/:lang/footer': [{ lang: 'en' }, { lang: 'ru' }, { lang: 'kz' }],
  };
};

export const config: ApplicationConfig = {
  providers: [
    {
      provide: 'PRERENDER_PARAMS',
      useValue: getPrerenderParams(),
    },
  ],
};
