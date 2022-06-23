import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SupportedSymbolsModule } from './components/supported-symbols-list/supported-symbols.module';
import { HomeModule } from './components/home-page/home.module';
import { AboutPageModule } from './components/about-page/about-page.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConversorModule } from './components/conversor-page/conversor.module';
import { MatButtonModule } from '@angular/material/button';
import { ErrorPageComponent } from './components/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SupportedSymbolsModule,
    HomeModule,
    AboutPageModule,
    ConversorModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
