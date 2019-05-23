import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  titre: string;
  libelle: string;
  txtButton: string;

  constructor() { }

 ngOnInit() {
   this.txtButton = "Ajouter un client";
  }

}
