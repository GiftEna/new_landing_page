import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpperContentAreaComponent } from './components/upper-content-area/upper-content-area.component';
import { MiddlePageComponent } from './components/middle-page/middle-page.component';
import { LowerContentAreaComponent } from './components/lower-content-area/lower-content-area.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpperContentAreaComponent,
    MiddlePageComponent,
    LowerContentAreaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, UpperContentAreaComponent, MiddlePageComponent, LowerContentAreaComponent, FooterComponent]
})
export class AppModule { }
