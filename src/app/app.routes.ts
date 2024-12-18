import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PartnerComponent } from './partner/partner.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { DriversComponent } from './drivers/drivers.component';
import { LoginComponent } from './login/login.component';
import { RegisterDriversComponent } from './register-drivers/register-drivers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'partner', component: PartnerComponent},
  { path: 'opportunities', component: OpportunitiesComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register-drivers', component: RegisterDriversComponent}
];
