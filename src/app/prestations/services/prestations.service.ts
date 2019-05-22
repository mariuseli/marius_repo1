import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestation } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})

export class PrestationService{

  pCollection: Prestation[];
  constructor(){
    this.collection = fakePrestation;
  }

  //get collection
  get collection(): Prestation[]{
    return this.pCollection;
  }

  //set collection
  set collection(col: Prestation[]){
    this.pCollection = col;
  }

}
