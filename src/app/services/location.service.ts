import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Location, FechAllLocationResponse } from "../models/locations";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private API_URL:string = "https://pokeapi.co/api/v2";

  constructor(private http:HttpClient) { }

  getLocation():Observable<Location[]>{
    return this.http.get<FechAllLocationResponse>(`${this.API_URL}/location?limit=20`)
                .pipe(
                  map( this.transformLocation )
                )
  }

  private transformLocation(resp: FechAllLocationResponse): Location[] {
    const locationList: Location[] = resp.results.map( location => {

      const urlArr = location.url.split('/');
      const id = urlArr[2];
      return {
        id,
        name: location.name,
      }
    })

    return locationList;
  }
}
