import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
import { translationChunksConfig, translations } from '@spartacus/assets';
// import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
// import { BootcampStaticCmsModule } from './cms/static/static-cms.module';
// import { BootcampComponentModule } from './components/component.module';
// import { BootcampDataBindingModule } from './data-binding/data-binding.module';
// import { BootcampI18nModule } from './i18n/i18n.module';
// import { BootcampLayoutConfigModule } from './layout/layout.module';
// import { BootcampConfigModule } from './myfeature/config/config.module';
// import { Theme, ThemeConfig } from './myfeature/config/theme.config';
// import { BootcampOutletModule } from './outlet/outlet.module';
// import { BootcampRoutingModule } from './routing/routing.module';
// import { BootcampSeoModule } from './seo/seo.module';
// import { NgrxEffectsModule } from './state/ngrx-effects/ngrx-effects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.1'
      }
    }),

    //Enable these modules to test
    
    // BootcampComponentModule,
    // BootcampDataBindingModule,
    // BootcampRoutingModule,
    // RouterModule,
    // BootcampOutletModule,
    // BootcampLayoutConfigModule,
    // NgrxEffectsModule,
    // BootcampI18nModule,
    // BootcampSeoModule,
    // BootcampStaticCmsModule,
    // BootcampConfigModule,
    // Provide a custom theme to the `ThemeConfig`.
    // ConfigModule.withConfig({ theme: Theme.STRAWBERRIES } as ThemeConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
