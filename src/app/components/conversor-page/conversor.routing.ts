import { Routes, RouterModule } from '@angular/router';
import { ConversorPageComponent } from './conversor-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConversorPageComponent, title: 'Conversor'
  },
];

export const ConversorRoutes = RouterModule.forChild(routes);
