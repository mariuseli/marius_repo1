import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateModule } from '../template/template.module';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ActionComponent } from './components/action/action.component';
import { LinksComponent } from './components/links/links.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, ButtonAddComponent, ActionComponent, LinksComponent],
  exports: [TotalPipe,
    StateDirective,
    TableauComponent,
    TemplateModule,
    ButtonAddComponent,
    ActionComponent,
    ReactiveFormsModule,
    LinksComponent,
    RouterModule],
  imports: [CommonModule, TemplateModule, RouterModule, NgbPopoverModule, FontAwesomeModule, ReactiveFormsModule]
})
export class SharedModule { }
