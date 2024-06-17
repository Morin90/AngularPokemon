import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: []
})
export class PokemonModule { }