import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HeroesListComponent } from './heroes/list/list.component';
import { HeroComponent } from './heroes/hero/hero.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterComponent, HeroesListComponent, HeroComponent]
})

export class AppComponent {
  public title: string = 'Mi primer App con angular';

}
