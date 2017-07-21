import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { ClubSearchService } from '../club-search.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-club-search',
  templateUrl: './club-search.component.html',
  styleUrls: ['./club-search.component.css'],
  providers: [ClubSearchService]
})

export class ClubSearchComponent implements OnInit {
  clubs;
  startAt = new Subject()
  endAt = new Subject()
  lastKeypress: number = 0;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private clubSearchService: ClubSearchService) { }

  ngOnInit() {
    this.clubSearchService.getClubs(this.startAt, this.endAt)
    .subscribe(clubs => this.clubs = clubs)
  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 200) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }
    this.lastKeypress = $event.timeStamp
  }

  goToDetailPage(clickedClub) {
    this.router.navigate(['clubs', clickedClub.$key]);
  };

}
