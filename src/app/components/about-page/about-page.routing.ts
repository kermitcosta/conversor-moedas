import { AboutPageComponent } from './about-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent, title: 'Sobre'
  },
];

export const AboutPageRoutes = RouterModule.forChild(routes);
