import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportedSymbolsListComponent } from './modules/supported-symbols/supported-symbols-list/supported-symbols-list.component';


const routes: Routes = [
  { path: 'listar-moedas', component: SupportedSymbolsListComponent, title: 'Lista de Moedas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
