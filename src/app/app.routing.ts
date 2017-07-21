import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { GeocacheAddressListComponent } from './geocache-address-list/geocache-address-list.component';
import { AboutComponent } from './about/about.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LogbookComponent } from './logbook/logbook.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
      path: 'geocache-form',
      component: GeocacheFormComponent
    },
    {
      path: '',
      component: WelcomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'how-to-play',
      component: HowToPlayComponent
    },
    {
      path: 'logbook',
      component: LogbookComponent
    },

    {
      path: 'locations',
      component: GeocacheListComponent
    },
    {
      path: 'addresses',
      component: GeocacheAddressListComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
