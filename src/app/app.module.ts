import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryHeaderComponent,
    MainHeaderComponent,
    NavMenuComponent,
    FooterComponent,
    MobileNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
