import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, } from '@angular/router';

import { PageModule } from '../page/page.module';
import { HomeComponent } from '../page/home/home.component';

const routers: Routes = [
    { path: '', component: HomeComponent }
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
