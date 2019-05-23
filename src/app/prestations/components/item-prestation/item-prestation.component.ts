import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  @Input() item: Prestation;
  @Output() doChange: EventEmitter<any> = new EventEmitter();
  @Output() doAction: EventEmitter<any> = new EventEmitter();

  states = State;
  constructor() { }

  ngOnInit() {
  }

  changeState(event) {

    this.doChange.emit({
      item: this.item,
      state: event.target.value
    });
  }

  action(param){

    console.log(param);
     this.doAction.emit({
        item: this.item,
        action: param
      });
  }
}
