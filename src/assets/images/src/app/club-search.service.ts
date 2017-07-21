import { Injectable } from '@angular/core';
import { Club } from './club.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClubSearchService {

constructor(private database: AngularFireDatabase) { }

  getClubs(start, end): FirebaseListObservable<any[]> {
    return this.database.list('/clubs', {
      query: {
        orderByChild: 'clubName',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

 }
