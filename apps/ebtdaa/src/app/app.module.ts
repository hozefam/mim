import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './footer/footer.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    HomeComponent,
    AboutusComponent,
    FaqComponent,
    ContactusComponent,
    LoginComponent,
    FooterComponent,
    ServiceDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
