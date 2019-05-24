import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestationService } from 'src/app/prestations/services/prestations.service';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {

  // private sub: Subscription;
  collection$: Observable<Prestation[]>;
  enteteTableau: Array<string>;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {

    this.collection$ = this.prestationService.collection;
    this.enteteTableau = ['Type', 'Client', 'Durée', 'Total HT', 'Total TTC', 'State', 'Action'];
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  change(param: {item: Prestation, state: State}) {
    this.prestationService
      .update(param.item, param.state)
      .then((res) =>{
        //res est la réponse de l'API firebase
        //Traiter réponse à envoyer aux user
      });
  }

  action(param: {item: Prestation, pAction: string}){
    if(param.pAction='delete'){
      this.prestationService.delete(param.item);
    }

    if(param.pAction='edit'){
      console.log('redirtection vers edition');
    }
  }


}
