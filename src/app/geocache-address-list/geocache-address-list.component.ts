import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geocache-address-list',
  templateUrl: './geocache-address-list.component.html',
  styleUrls: ['./geocache-address-list.component.scss']
})
export class GeocacheAddressListComponent implements OnInit {
  @Input() childAddress;

  constructor() { }

  ngOnInit() {
  }

}
