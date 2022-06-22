import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { SupportedSymbolsListComponent } from './modules/supported-symbols/supported-symbols-list/supported-symbols-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'listar-moedas', component: SupportedSymbolsListComponent, title: 'Lista de Moedas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
