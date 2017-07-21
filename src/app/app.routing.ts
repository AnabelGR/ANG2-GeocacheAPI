import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';

const appRoutes: Routes = [
  {
      path: '',
      component: GeocacheFormComponent
    },
    {
      path: 'geocache',
      component: GeocacheListComponent
    },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
