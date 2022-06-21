import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar'; // Teste angular material
import { SupportedSymbolsModule } from './modules/supported-symbols/supported-symbols.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SupportedSymbolsModule,
    MatToolbarModule,  // Teste angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
