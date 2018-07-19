import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSidenavModule
    ],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class NavModule { }
