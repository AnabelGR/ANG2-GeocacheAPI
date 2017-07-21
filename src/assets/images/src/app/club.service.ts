import { Injectable } from '@angular/core';
import { Club } from './club.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClubService {
  clubs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.clubs = database.list('clubs');
   }

  getClubs() {
    return this.clubs;
  }

  addClub(newClub: Club) {
    this.clubs.push(newClub);
  }

  getClubById(clubId: string) {
    return this.database.object('clubs/' + clubId);
  }

  updateClub(localUpdatedClub){
  const clubEntryInFirebase = this.getClubById(localUpdatedClub.$key);
  clubEntryInFirebase.update({clubName: localUpdatedClub.clubName, league: localUpdatedClub.league, manager: localUpdatedClub.manager, managerPhone: localUpdatedClub.managerPhone, managerEmail: localUpdatedClub.managerEmail, teamLogo: localUpdatedClub.teamLogo, teamHomeKit: localUpdatedClub.teamHomeKit, teamAwayKit: localUpdatedClub.teamAwayKit, clubId: localUpdatedClub.clubId});
  }

  deleteClub(localClubToDelete){
    const clubEntryInFirebase = this.getClubById(localClubToDelete.$key);
    clubEntryInFirebase.remove();
  }
}
