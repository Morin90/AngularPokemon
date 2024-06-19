import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './Pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './Pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemons/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule { }