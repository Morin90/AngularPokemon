import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-pokemon.component.html',
  styles: ``
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {...."ab"..."abz"."ab"...."abc"......}
      debounceTime(300),
      // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(),
      // {......"ab"..........."abc"......}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // {.....pokemonList(ab)............pokemonList(abc)......}
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }

}