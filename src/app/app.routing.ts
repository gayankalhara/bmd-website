import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { PAGE_ROUTES } from './pages/pages.routing';
import {LoginComponent} from "./pages/login/login.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: PAGE_ROUTES
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

// tslint:disable-next-line:eofline
export const Routing = RouterModule.forRoot(APP_ROUTES);
