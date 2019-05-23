import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  collection: Client[];
  enteteTableauClient: Array<string>;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.enteteTableauClient = ['Name', 'Email', 'Statut', 'Action'];
  }

  change(param: { item: Client, state?: StateClient}) {
    this.clientService.update(param.item, param.state);
  }

}
