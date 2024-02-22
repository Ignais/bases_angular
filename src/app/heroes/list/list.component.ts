import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class HeroesListComponent {

  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Thor', 'Hulk'];
  public deletedHero?: string;

  deleteHeroe():void {
    this.deletedHero = this.heroNames.pop();

  }

}
