import { Component, OnInit } from '@angular/core';
import { PrestationService } from 'src/app/prestations/services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  collection: Prestation[];
  enteteTableau: Array<String>;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.enteteTableau = ['Type', 'Client', 'Durée', 'Total HT', 'Total TTC', 'State', 'Action'];
  }

}
