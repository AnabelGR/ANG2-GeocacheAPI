import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GeocacheApiService } from '../geocache-api.service';
import { GeocacheService } from '../geocache.service';

@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.scss'],
  providers: [ GeocacheApiService, GeocacheService ]
})

export class GeocacheFormComponent{
  geocaches: any[]=null;
  noGeocaches: boolean=false;

  constructor(private router: Router, private geocacheApi: GeocacheApiService) { }

  saveGeocacheInfo(lng, lat){
    this.geocacheApi.saveGeocaches(lng, lat);
    alert('The geocache from ' + lng + ', ' + lat + ' has been saved to the database.')
  }

  getGeocacheInfo(lat: string, lng: string) {
    this.noGeocaches = false;
    this.geocacheApi.getByLatAndLng(lat, lng).subscribe(response =>{
      if(response.json().results.length > 0)
      {
        this.geocaches = response.json();
      } else {
        this.noGeocaches = true;
      }
    });
  }
}
