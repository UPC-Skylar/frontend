import { Routes } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {CaregiversComponent} from './domains/products/components/caregivers/caregivers.component';
import {FamilyComponent} from './domains/products/components/family/family.component';
import {ContactComponent} from './core/components/contact/contact.component';
import {AboutComponent} from './core/components/about/about.component';
import {SupportComponent} from './core/components/support/support.component';
import {LoginComponent} from './core/components/login/login.component';


export const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'caregivers-component', component: CaregiversComponent},
  {path: 'family-component', component: FamilyComponent},
  {path: 'contact-component', component: ContactComponent},
  {path: 'about-component', component: AboutComponent},
  {path: 'support-component', component: SupportComponent},
  {path: 'login-component', component: LoginComponent},
];
