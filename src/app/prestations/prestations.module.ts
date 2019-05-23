import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';

@NgModule({
  declarations: [ ListPrestationsComponent, ItemPrestationComponent
    , FormPrestationComponent, PageAddPrestationComponent, PagePrestationsComponent, AddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
