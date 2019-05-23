import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './components/tableau/tableau.component';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, TemplateModule],
  imports: [CommonModule, TemplateModule]

})
export class SharedModule { }
