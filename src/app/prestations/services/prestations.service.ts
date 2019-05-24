import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { environment } from 'src/environments/environment';
import { fakePrestation } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private urlApi = environment.urlApi;
  pCollection: Observable<Prestation[]>;
  presta$: BehaviorSubject<Prestation> = new BehaviorSubject<Prestation>(null);

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestation');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab => tab.map(obj => new Prestation(obj)))
      map((tab) => {
        this.presta$.next( new Prestation(tab[0]));
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );


    //Par Api Http
    // this.collection = this.http.get(`${this.urlApi}collection`).pipe...

  }

  // get collection
  get collection(): Observable<Prestation[]> {

    console.log(this.pCollection);
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  // add item in collection
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });

    //Par API http
    //return this.http.post(`${this.urlApi}collection`, item);
  }

  update(item: Prestation, option?: State): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });

    //Par API http
    //return this.http.put(`${this.urlApi}collection`, item);
  }

  delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });

    //Par API http
    //return this.http.delete(`${this.urlApi}collection/${item.id}`, item);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();

    //Par API http
    //return this.http.get(`${this.urlApi}collection/${item.id}`, item);
  }
}
