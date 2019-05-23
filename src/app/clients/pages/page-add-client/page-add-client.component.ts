import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/client.model';


@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit() {

  }

  add(item: Client){
    console.log('Ajout d\'un client');
  }

}
