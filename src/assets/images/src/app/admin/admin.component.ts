import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { Roster } from '../roster.model'
import { ClubService } from '../club.service';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClubService, RosterService]
})
export class AdminComponent implements OnInit {
  addClubForm: boolean = false;
  addClubButton: boolean = true;
  addRosterForm: boolean = false;
  addRosterButton: boolean = true;

  constructor(private clubService: ClubService, private rosterService: RosterService) { }

  ngOnInit() {
  }

  submitForm(clubName: string, league: string, manager: string, managerPhone: string, managerEmail: string, teamLogo: string, teamHomeKit: string, teamAwayKit: string, clubId: string) {
    const newClub: Club = new Club(clubName, league, manager, managerPhone, managerEmail, teamLogo, teamHomeKit, teamAwayKit, clubId);
    this.clubService.addClub(newClub);
  }

  submitRosterForm(playerFirstName: string, playerLastName: string, playerNumber: string, playerPosition: string, OGFC: boolean, WSFC: boolean) {
    const newRoster: Roster = new Roster(playerFirstName, playerLastName, playerNumber, playerPosition, OGFC, WSFC);
    this.rosterService.addRoster(newRoster);
  }

  showAddClubForm() {
  this.addClubForm = true;
  this.addClubButton = false;
  }

  hideAddClubForm() {
    this.addClubForm = false;
  }
  showAddRosterForm() {
  this.addRosterForm = true;
  this.addRosterButton = false;
  }

  hideAddRosterForm() {
    this.addRosterForm = false;
  }
}
