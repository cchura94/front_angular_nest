import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { peticionInterceptor } from './interceptors/peticion.interceptor';
// import { peticionInterceptor } from './interceptors/peticion.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
              provideHttpClient(
                // DI-based interceptors must be explicitly enabled.
                withInterceptorsFromDi(),
                ),
                {provide: HTTP_INTERCEPTORS, useClass: peticionInterceptor, multi: true},
              
            ]
};