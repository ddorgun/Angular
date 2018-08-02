import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';

import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [
    { path: '', component: BoardComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  declarations: [BoardComponent]
})
export class LCommonModule { }
