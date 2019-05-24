import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestations.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details-prestation',
  templateUrl: './details-prestation.component.html',
  styleUrls: ['./details-prestation.component.scss']
})
export class DetailsPrestationComponent implements OnInit {
  presta$: Subject<Prestation>;

  //custom
  libelle1: string;
  libelle2: string;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {

   this.presta$ =  this.prestationService.presta$;

  }

  identifierPrestation(param: Prestation){
    console.log(param);
    this.libelle1 = param.typePresta;
    this.libelle2 = param.client;
  }


}
