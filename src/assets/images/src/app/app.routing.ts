import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ClubsComponent }   from './clubs/clubs.component';
import { ClubDetailComponent }   from './club-detail/club-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ClubSearchComponent } from './club-search/club-search.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'clubs',
    component: ClubsComponent
  },
  {
    path: 'clubs/:id',
    component: ClubDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'club-search',
    component: ClubSearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
