import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [
    { path: '', component: ListPokemonComponent },
    { path: ':id', component: DetailPokemonComponent },
    { path: 'edit/:id', component: EditPokemonComponent }
];

@NgModule({
    
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(pokemonRoutes),
    ],
    providers: [PokemonService]
})
export class PokemonModule { }