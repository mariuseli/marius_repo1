import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateModule } from '../template/template.module';
import { ButtonAddComponent } from './button-add/button-add.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, ButtonAddComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, TemplateModule, ButtonAddComponent],
  imports: [CommonModule, TemplateModule, RouterModule]

})
export class SharedModule { }
