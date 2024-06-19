import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [],
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img class="center" [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>

  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
pokemon: Pokemon | undefined;
constructor(private pokemonService: PokemonService,
  private route: ActivatedRoute
) {
  
}

ngOnInit() {

  const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

  if (pokemonId) {
    this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
  }else {
    this.pokemon = undefined;
  } 

}
}