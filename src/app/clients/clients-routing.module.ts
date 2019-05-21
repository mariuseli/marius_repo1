import { NgModule } from '@angular/core';
import { PageClientsComponent } from 'src/app/clients/pages/page-clients/page-clients.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [

  {
    path: '',
    component: PageClientsComponent
  }


];

@NgModule({

  imports: [
    RouterModule.forChild(appRoutes)

  ]
})


export class ClientsRoutingModule { }
