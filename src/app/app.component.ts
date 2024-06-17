import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common'; 
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  ngOnInit() {
    console.table(this.pokemonList);
  }
  selectPokemon(pokemonId: number) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id === pokemonId);
    if(pokemon){
    console.log(`Vous avez demandé le pokémon ${this.pokemonList[pokemonId - 1].name}`);
  this.pokemonSelected = pokemon;
  }
  else{
    console.log(`Vous avez demandé un pokémon qui n'existe pas`);
    this.pokemonSelected = pokemon;
  }
}
}
