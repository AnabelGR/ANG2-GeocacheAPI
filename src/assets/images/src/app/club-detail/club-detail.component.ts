import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Club } from '../club.model';
import { ClubService } from '../club.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css'],
  providers: [ClubService]
})

export class ClubDetailComponent implements OnInit {
  clubId: string;
  clubToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private clubService: ClubService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.clubId = urlParameters['id'];
   });
   this.clubToDisplay = this.clubService.getClubById(this.clubId);
  }

  return(){
  window.history.back();
  }

}
