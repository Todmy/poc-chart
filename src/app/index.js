import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './techs';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

import {D3Component} from './d3/d3';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    D3Component
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
