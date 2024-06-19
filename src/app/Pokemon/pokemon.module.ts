import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemons/:id', component: DetailPokemonComponent },
    { path: `edit/pokemon/:id`, component: EditPokemonComponent }
];
@NgModule({
    declarations: [
        BorderCardDirective,
        PokemonTypeColorPipe,
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        
    ],
    imports: [
        RouterModule.forChild(pokemonRoutes),
        FormsModule,
        CommonModule
        
    ],
    providers: [

        PokemonService
    ],
    exports: [
        CommonModule,
        PokemonModule
    ]
})
export class PokemonModule { }