import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  pCollection: Client[];

  constructor() {
    this.collection = fakeClients;
   }

   //get collection
   get collection(): Client[]{
     return this.pCollection;
   }

   //set collection
   set collection(col: Client[]){
     this.pCollection = col;
   }

   update(item: Client, state?: StateClient){
    const data = {...item};
    data.state = state;

    //appel HTTP vers un endpoint de base de données
    item.state = state;
    // console.log(item);
   }
}
