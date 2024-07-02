import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PokemonFormComponent
  ],
  template: `
  <h2 class="center">Ajouter un pokémon</h2>
  <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    this.pokemon = {
      id: 13,
      name: 'New Pokemon',
      hp: 100,
      cp: 10,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
      types: ['Plante'],
      created: new Date()
    };
  }
  addPokemon(pokemon: Pokemon) {
    pokemon.id = new Date().getTime(); // Générer un ID unique
    this.pokemonService.addPokemon(pokemon);
  }
}
