import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { masterFirebaseConfig } from './api-keys';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { GeocacheAddressListComponent } from './geocache-address-list/geocache-address-list.component';
import { AboutComponent } from './about/about.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LogbookComponent } from './logbook/logbook.component';
import { WelcomeComponent } from './welcome/welcome.component';


// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// };

@NgModule({
  declarations: [
    AppComponent,
    GeocacheListComponent,
    GeocacheFormComponent,
    GeocacheAddressListComponent,
    AboutComponent,
    HowToPlayComponent,
    LogbookComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
