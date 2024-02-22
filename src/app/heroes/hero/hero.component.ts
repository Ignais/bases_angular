import { NgIf, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  public name: string = 'elpidio valdez';
  public age: number = 30;

  get Name(): string {
    return this.name.toUpperCase();
  }

  getFullData(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Resoples';
  }

  changeAge(): void {
    this.age = 70;
  }

}
