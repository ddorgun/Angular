import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, } from '@angular/router';

import { HomeComponent } from '../page/home/home.component';
import { DashboardComponent } from '../page/dashboard/dashboard.component';

const routers: Routes = [
    { path: '', component: HomeComponent },
    { path: 'page1', component: DashboardComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
