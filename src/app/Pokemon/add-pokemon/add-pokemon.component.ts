import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { Pokemon } from '../pokemon';

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

  ngOnInit() {
    this.pokemon = {
      id: 0,
      name: 'New Pokemon',
      hp: 100,
      cp: 10,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
      types: ['Plante'],
      created: new Date()
    };
  }
  
}
