import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludaAComponent } from './saluda-a/saluda-a.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludaAComponent,
    SuperHeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
