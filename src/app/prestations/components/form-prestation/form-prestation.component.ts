import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  states = State;
  form: FormGroup;
  init = new Prestation();

  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      nbJours: [this.init.nbJours],
      tauxTva: [this.init.tauxTva],
      tjmHt: [this.init.tjmHt],
      comment: [this.init.comment],
      state: [this.init.comment]
    });
  }

  submit() {
    this.nItem.emit(this.form.value);
  }
}
