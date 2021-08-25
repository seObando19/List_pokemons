import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FetchAllProfileResponse, PokemonProfile } from "../models/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private API_URL:string ="https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  getPokemonProfile(id:string):Observable<PokemonProfile[]>{
    return this.http.get<FetchAllProfileResponse>(`${this.API_URL}/pokemon/${id}`)
                .pipe(
                  map( this.transformSmallProfilePokemon )
                )
  }

  private transformSmallProfilePokemon(resp: FetchAllProfileResponse):PokemonProfile[] {

    const profileList: PokemonProfile[] = resp.results.map( profile => {
      const urlArr = profile.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
      return {
        id,
        pic,
        name: profile.name,
      }
    })

    return profileList;
  }
}
