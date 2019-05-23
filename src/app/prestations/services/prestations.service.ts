import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestation } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';


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

  update(item: Prestation, state?: State){
    const data = {...item};
    data.state = state;

    //appel HTTP vers un endpoint de base de données
    item.state = state;
    // console.log(item);
   }

   delete( item: Prestation ){
    console.log('suppression d\'enregistrement');
    return;
   }

   add(item: Prestation){
     this.collection.push(new Prestation(item));
   }

}
