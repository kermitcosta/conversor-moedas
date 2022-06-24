import { HomePageComponent } from './home-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Conversor de Moedas'
  },
];

export const HomeRoutingRoutes = RouterModule.forChild(routes);
