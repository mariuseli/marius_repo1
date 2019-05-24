import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  pCollection: Observable<Client[]>;
  private clientCollection: AngularFirestoreCollection<Client>;

  constructor(private afs: AngularFirestore) {
    this.clientCollection = afs.collection<Client>('client');
    this.collection = this.clientCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
    }

   //get collection
   get collection(): Observable<Client[]>{
     return this.pCollection;
   }

   //set collection
   set collection(col: Observable<Client[]>) {
     this.pCollection = col;
   }

   update(item: Client, state?: StateClient) {
    const data = {...item};
    data.state = state;

    //appel HTTP vers un endpoint de base de données
    item.state = state;
    // console.log(item);
   }

   add(item: Client){
     //this.collection.push(new Client(item));
   }
}
