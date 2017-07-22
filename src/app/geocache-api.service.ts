import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { GeocacheService } from './geocache.service';

@Injectable()
export class GeocacheApiService {
  constructor(private http: Http, private geocacheService: GeocacheService) { }

  getByLatAndLng (lat: string, lng: string) {
    return this.http.get ('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + geoKey);
  }


  getByAddress (streetNumber: string, route: string, locality: string, admnArea: string) {
    return this.http.get ('https://maps.googleapis.com/maps/api/geocode/json?address=' + streetNumber + ',+' + route + ',+' + locality + ',+' + admnArea + '&key=' + geoKey);
  }

  saveGeocaches(lat: string, lng: string) {
    return this.http.get ('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + geoKey).subscribe(response => {
      let foundGeocache: Geocache;
      for (const results of response.json().geeocaches) {
        // foundGeocache = new Geocache(lat, lng);
        this.geocacheService.addGeocache(foundGeocache);
      }
    });
  }
}
