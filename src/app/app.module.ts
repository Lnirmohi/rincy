import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSiemaModule} from 'ngx-siema';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { FeatureCarouselComponent } from './feature-carousel/feature-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryHeaderComponent,
    MainHeaderComponent,
    NavMenuComponent,
    FooterComponent,
    MobileNavbarComponent,
    FeatureCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSiemaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
