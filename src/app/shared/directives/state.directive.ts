import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})

export class StateDirective implements OnChanges {

  @Input() appState: State;
  @HostBinding('class') nomClass: string;

  constructor() { }

   ngOnChanges() {
     console.log(this.appState);
     this.nomClass = this.formatClass(this.appState);
   }

  private formatClass(state?: any): string {
    //console.log(state);
    //return state ;
    if(state){
      return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
    }

    return '';
  }

}
