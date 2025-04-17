import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule, CoreModule, TRANSLATION_PROVIDER, TranslateLoaderService, provideTranslations  } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    importProvidersFrom(CoreModule.forRoot()),
    importProvidersFrom(ContentModule.forRoot()),
    importProvidersFrom( AuthModule.forRoot({ useHash: true })),
    importProvidersFrom(TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateLoaderService }
    })),
    provideTranslations('app', 'assets'),
    
  ]
};
