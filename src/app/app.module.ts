import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { BootcampComponentModule } from './components/component.module';

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
    // BootcampConfigModule,
    BootcampComponentModule,

    // BootcampDataBindingModule
    // BootcampRoutingModule,
    //RouterModule
    // BootcampOutletModule,
    // BootcampLayoutConfigModule
    // NgrxEffectsModule,
    // BootcampI18nModule,
    // BootcampSeoModule,
    // BootcampStaticCmsModule,
    // BootcampConfigModule,
    // // Provide a custom theme to the `ThemeConfig`.
    // ConfigModule.withConfig({ theme: Theme.STRAWBERRIES } as ThemeConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
