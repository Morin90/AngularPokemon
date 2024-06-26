import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  pokemons: any[] = [];
  constructor(private router: Router) {}

  navigateToAddPokemon() {
    this.router.navigate(['/pokemons/add']);
  }

}
