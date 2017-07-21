import { Injectable } from '@angular/core';
import { Roster } from './roster.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RosterService {
  rosters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.rosters = database.list('rosters');
   }

  getRosters() {
    return this.rosters;
  }

  addRoster(newRoster: Roster) {
    this.rosters.push(newRoster);
  }

  getRosterById(rosterId: string) {
    return this.database.object('rosters/' + rosterId);
  }

  deleteRoster(localRosterToDelete){
    const rosterEntryInFirebase = this.getRosterById(localRosterToDelete.$key);
    rosterEntryInFirebase.remove();
  }
}
