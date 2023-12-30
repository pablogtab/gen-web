import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InvestmentsBuildingsComponent } from './views/investments/investments-buildings/investments-buildings.component';
import { InvestmentsRentACarComponent } from './views/investments/investments-rent-a-car/investments-rent-a-car.component';
import { InvestmentsRealEstateComponent } from './views/investments/investments-real-estate/investments-real-estate.component';
import { InvestmentsStorageComponent } from './views/investments/investments-storage/investments-storage.component';
import { ServicesComponent } from './views/services/services.component';
import { PartnersComponent } from './views/partners/partners.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'inversiones/construccion', component: InvestmentsBuildingsComponent },
    { path: 'inversiones/rent-a-car', component: InvestmentsRentACarComponent },
    { path: 'inversiones/real-estate', component: InvestmentsRealEstateComponent },
    { path: 'inversiones/storage', component: InvestmentsStorageComponent },
    { path: 'servicios', component: ServicesComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'nosotros', component: AboutUsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];
