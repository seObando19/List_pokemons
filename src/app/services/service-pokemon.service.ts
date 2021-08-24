import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Pokemon, FetchAllPokemonResponse } from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class ServicePokemonService {

  private API_URL:string="https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  getPokemon():Observable<Pokemon[]> {
    return this.http.get<FetchAllPokemonResponse>(`${this.API_URL}/pokemon?limit=1500`)
                .pipe(
                  map( this.transformSmallPokemon )
                )
  }

  private transformSmallPokemon(resp: FetchAllPokemonResponse ): Pokemon[] {

    const pokemonList: Pokemon[] = resp.results.map( poke => {

      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
      return {
        id,
        pic,
        name: poke.name,
      }
    })

    return pokemonList;
  }

}
