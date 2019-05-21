import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginModule } from './login.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';




const appRoutes: Routes = [

  {
    path: 'Login',
    component: PageLoginComponent
  }


];

@NgModule({

  imports: [
    RouterModule.forChild(appRoutes)

  ]
})
export class LoginRoutingModule { }
