import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  states = StateClient;
  formulaireClient: FormGroup;
  clientInitial = new Client();
  @Output() fireModifClient: EventEmitter<Client> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormulaire();
  }

  createFormulaire() {
    this.formulaireClient = this.fb.group({
      clientName: [this.clientInitial.name, Validators.required],
      clientEmail: [this.clientInitial.email, Validators.compose([Validators.required, Validators.email])],
      clientState: [this.clientInitial.state]
    });
  }

  submitClientForm() {
    this.fireModifClient.emit(this.formulaireClient.value);
  }
}
