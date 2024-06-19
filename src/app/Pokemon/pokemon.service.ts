import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  getPokemonList(){
    return POKEMONS;
  }

  getPokemonById(id: number){
    return POKEMONS.find(pokemon => pokemon.id == id);
  }

  getPokemonTypeList(){
    return [...new Set(POKEMONS.map(pokemon => pokemon.types[0]))];
  }
}
