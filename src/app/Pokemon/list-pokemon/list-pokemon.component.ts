import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [ CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
  private pokemonService: PokemonService) {

  }
  ngOnInit(): void {
this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate([`/pokemons`, pokemon.id]);
  }
}
