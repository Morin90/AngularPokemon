import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonFormComponent
  ],
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemonService.getPokemonById(Number(pokemonId))
        .subscribe(pokemon => this.pokemon = pokemon);
    }
  }


  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons/edit', pokemon.id]);
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }
}
