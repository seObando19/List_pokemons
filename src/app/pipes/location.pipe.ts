import { Pipe, PipeTransform } from '@angular/core';
import { Location } from "../models/locations";

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(locations: Location[], page:number = 0, search:string = ''): Location[] {
    if (search.length === 0){
      return locations.slice(page, page + 10);
    }

    const filteredLocations = locations.filter(location => location.name.includes(search));
    return filteredLocations.splice(page, page + 10);

  }

}
