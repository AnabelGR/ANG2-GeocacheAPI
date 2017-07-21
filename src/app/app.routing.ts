import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { GeocacheAddressListComponent } from './geocache-address-list/geocache-address-list.component';

const appRoutes: Routes = [
  {
      path: '',
      component: GeocacheFormComponent
    },
    {
      path: 'geocache/locations',
      component: GeocacheListComponent
    },
    {
      path: 'geocache/address',
      component: GeocacheAddressListComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
