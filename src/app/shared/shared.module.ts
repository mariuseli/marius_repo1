import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateModule } from '../template/template.module';
import { ButtonAddComponent } from './button-add/button-add.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { ActionComponent } from './components/action/action.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, ButtonAddComponent, ActionComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, TemplateModule, ButtonAddComponent, ActionComponent, ReactiveFormsModule],
  imports: [CommonModule, TemplateModule, RouterModule, NgbPopoverModule, FontAwesomeModule, ReactiveFormsModule]
})
export class SharedModule { }
