import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onDelete({ id }: Character): void {
    if (!id ) return;

    this.onDeleteCharacter.emit( id );
  }

  onDeleteIndex(index: number):void {
    //TODO
    console.log( index );
  }

}
