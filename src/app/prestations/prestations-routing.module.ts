import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';


const appRoutes: Routes = [

  {
    path: '',
    component: PagePrestationsComponent,
    data: {titre: 'Prestations', libelle: 'Liste des Prestations !!'}
  }


];



@NgModule({

  imports: [
    RouterModule.forChild(appRoutes)

  ]
})
export class PrestationsRoutingModule { }
