import { Component, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.scss'],
  providers: [ GeocacheService ]
})
export class LogbookComponent implements OnInit {
  savedGeocaches: FirebaseListObservable <any[]> = null;

  constructor(private geocacheService: GeocacheService) { }

  ngOnInit() {
    this.savedGeocaches = this.geocacheService.getGeocaches();
  }

  deleteGeocache(selectedGeocache: Geocache) {
    this.geocacheService.deleteGeocache(selectedGeocache);
    alert('This geocache has been deleted from your list of saved geocaches.');
  }
}
