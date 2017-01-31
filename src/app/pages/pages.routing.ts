import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent} from "./about/about.component";
import {NewsComponent} from "./news/news.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {DealComponent} from "./deal/deal.component";
import {HelpComponent} from "./help/help.component";

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
  },
  {
   path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'deal',
    component: DealComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }

];
