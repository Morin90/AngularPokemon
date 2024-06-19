import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../Pokemon/pokemon';
import { POKEMONS } from '../Pokemon/mock-pokemon-list';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class='center'>
      <img src="https://img.over-blog-kiwi.com/2/44/93/52/20170810/ob_2ad044_79.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a  class="waves-effect waves-teal btn-flat" (click)="goToPokemonList()" >
        Retourner à l' accueil
      </a>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {
  pokemonList: Pokemon[] = [];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {} 

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id === Number(pokemonId));
    }
  }
  
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
