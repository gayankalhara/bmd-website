import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent} from "./about/about.component";
import {NewsComponent} from "./news/news.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {LoginComponent} from "./login/login.component";



export const PAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];
