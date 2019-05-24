import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { DetailsPrestationComponent } from './components/details-prestation/details-prestation.component';


const appRoutes: Routes = [

  {
    path: '',
    component: PagePrestationsComponent,
    data: {titre: 'Prestations', libelle: 'Liste des Prestations'},
    children: [
      {path: 'detail', component: DetailsPrestationComponent},
      {path: 'comment', component: CommentPrestationComponent},

    ]
  },

  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: {titre: 'Prestations', libelle: 'Ajouter des Prestations'}
  }



];



@NgModule({

  imports: [
    RouterModule.forChild(appRoutes)

  ]
})
export class PrestationsRoutingModule { }
