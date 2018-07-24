import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BaseCComponent } from './base-c/base-c.component'

const routers: Routes = [
    { path: '', component: MainComponent },
    { path: 'page2', component: BaseCComponent }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        MainComponent,
        BaseCComponent
    ]
})
export class ContentModule { }
