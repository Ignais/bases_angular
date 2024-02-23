import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../componets/list/list.component';
import { AddCharacterComponent } from '../componets/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-abz-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    AddCharacterComponent,
    FormsModule
  ],
  templateUrl: './main-page.component.html',

})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {

  }

  get character(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteById( id );
  }

  onNewCharacter(character: Character): void{
    this.dbzService.onNewCharacter(character)
  }
}
