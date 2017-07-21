import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey, masterFirebaseConfig } from './api-keys';
import { Geocache } from './geocache.model';
import { GeocacheService } from './geocache.service';

@Injectable()
export class GeocacheApiService {
  constructor(private http: Http, private geocacheService: GeocacheService) { }

  getByLatAndLng(lat: string, lng: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=" + geoKey)
  }

  getByAddress(address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=" + geoKey)
  }

  saveGeocaches(lat: string, lng: string) {
  return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=" + geoKey).subscribe(response => {
    let foundGeocache: Geocache;
    for(let formatted_address of response.json().location) {
      foundGeocache = new Geocache(formatted_address, lat, lng);
      this.geocacheService.addGeocache(foundGeocache);
    }
  });
}
}
