import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonService } from './pokemon.service';

import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { LocalStorageService } from './local-storage.service';




const pokemonRoutes: Routes = [
    { path: 'edit/:id', component: EditPokemonComponent },
    { path: 'add', component: AddPokemonComponent },
    { path: '', component: ListPokemonComponent },
    { path: ':id', component: DetailPokemonComponent }

];

@NgModule({
    
    imports: [
        CommonModule,
        FormsModule,
        PokemonFormComponent,
        RouterModule.forChild(pokemonRoutes),
    ],
    providers: [PokemonService],
})
export class PokemonModule { }