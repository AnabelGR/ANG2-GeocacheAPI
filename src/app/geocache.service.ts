import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Geocache } from './geocache.model';

@Injectable()
export class GeocacheService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.geocaches = af.list('geocaches');
    }
    addGeocache(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
    }
    getGeocaches() {

    return this.geocaches;
    }
    deleteGeocache(selectedGeocache) {
    let foundGeocache = this.getGeocacheById(selectedGeocache.$key);
    foundGeocache.remove();
    }
    getGeocacheById(geocacheId: string){
    return this.af.object('geocaches/' + geocacheId);
    }
  }
