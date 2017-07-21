import { Component, OnInit, Input } from '@angular/core';
import { GeocacheCoordinates } from '../geocacheCoordinates.model';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.scss']
})
export class GeocacheListComponent implements OnInit {
  @Input() childLocations;


  constructor() { }

  ngOnInit() {
  }

}
