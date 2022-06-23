import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ConversorPageComponent } from './components/conversor-page/conversor-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SupportedSymbolsListComponent } from './components/supported-symbols-list/supported-symbols-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, title: 'Conversor de Moedas' },
  { path: 'conversor', component: ConversorPageComponent, title: 'Conversor' },
  { path: 'listar-moedas', component: SupportedSymbolsListComponent, title: 'Lista de Moedas' },
  { path: 'sobre', component: AboutPageComponent, title: 'Sobre' },
  { path: '**', component: ErrorPageComponent, title: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
