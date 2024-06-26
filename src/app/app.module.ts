import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule, routes} from './app.routes';
import { PokemonModule } from './Pokemon/pokemon.module';
import { PokemonFormComponent } from './Pokemon/pokemon-form/pokemon-form.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonFormComponent,
    PokemonModule,
    AppRoutingModule,
    InMemoryWebApiModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }