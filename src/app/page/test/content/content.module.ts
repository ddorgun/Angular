import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BaseCComponent } from './base-c/base-c.component';
import {AllMaterialModule} from '../../page.module'

const routers: Routes = [
    { path: '', component: MainComponent },
    { path: 'common', loadChildren: './common/common.module#LCommonModule' }  //loadChildren: './common/common.module#LCommonModule'
];
@NgModule({
    imports: [
        CommonModule,
        AllMaterialModule,
        RouterModule.forChild(routers)
    ],
    declarations: [
        MainComponent,
        BaseCComponent,
    ],
    exports: []
})
export class ContentModule { }
