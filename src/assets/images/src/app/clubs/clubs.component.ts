import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { Router } from '@angular/router';
import { ClubService } from '../club.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  providers: [ClubService]
})

export class ClubsComponent implements OnInit {
  clubs: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private clubService: ClubService){}

  ngOnInit(){
    this.clubs = this.clubService.getClubs();
  }

  goToDetailPage(clickedClub) {
    this.router.navigate(['clubs', clickedClub.$key]);
  };

  return(){
  window.history.back();
  }
}
