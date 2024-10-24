import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  {

    path: '**', component: NoPageFoundComponent,

  },
  {

    path: '', redirectTo: '/dashboard', pathMatch: 'full',

  },


];

@NgModule({
  imports: [

    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
