import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [ CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;


  constructor(private router: Router) {

  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate([`/pokemons`, pokemon.id]);
  }
}
