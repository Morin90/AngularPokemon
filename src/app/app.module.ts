import { NgModule, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule, routes } from './app.routes';
import { PokemonModule } from './Pokemon/pokemon.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: true }),
    PokemonModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }