import { Component, OnInit } from '@angular/core';
import { Location } from "../models/locations";
import { LocationService } from "../services/location.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locations:Location[] = [];
  public page:number = 0;
  public search:string = '';

  constructor(private serviceLocation:LocationService) { }

  ngOnInit(): void {
    this.serviceLocation.getLocation()
      .subscribe(locations =>{
        this.locations = locations;
      })
  }

  nextPage() {
    this.page += 10;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 10;
  }

  onSearchPokemon(search:string){
    this.page = 0;
    this.search = search;
  }

}
