import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  titre: string;
  libelle: string;

  constructor() { }

  ngOnInit() {
    // this.titre = "Prestations";
    // this.libelle = "Liste des Prestations";
  }

}
