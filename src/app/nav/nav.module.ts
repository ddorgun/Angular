import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        MatListModule
    ],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class NavModule { }
