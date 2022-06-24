import { Routes, RouterModule } from '@angular/router';
import { SupportedSymbolsListComponent } from './supported-symbols-list.component';

const routes: Routes = [
  {
    path: '',
    component: SupportedSymbolsListComponent, title: 'Lista de Moedas'
  },
];

export const SupportedSymbolsRoutes = RouterModule.forChild(routes);
