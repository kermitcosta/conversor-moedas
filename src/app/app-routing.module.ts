import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('src/app/components/home-page/home.module').then(m => m.HomeModule)
  },
  {
    path: 'conversor',
    loadChildren: () => import('src/app/components/conversor-page/conversor.module').then(m => m.ConversorModule)
  },
  {
    path: 'listar-moedas',
    loadChildren: () => import('src/app/components/supported-symbols-list/supported-symbols.module').then(m => m.SupportedSymbolsModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('src/app/components/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  { path: '**', component: ErrorPageComponent, title: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
