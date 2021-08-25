import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../models/pokemon";
import { ServicePokemonService } from "../services/service-pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemons:Pokemon[] = [];
  public page:number = 0;
  public search:string = '';

  constructor(private servicePokemonService: ServicePokemonService) { }

  ngOnInit(): void {

    this.servicePokemonService.getPokemon()
      .subscribe(pokemons =>{
        this.pokemons = pokemons;
      });

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
