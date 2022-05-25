import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes : Routes  = [
  { path: '' , redirectTo: 'login' , pathMatch: 'prefix'},
  { path: 'login' , component: AuthComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      scrollPositionRestoration : 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],exports :[RouterModule]
})
export class AppRoutingModule { }
