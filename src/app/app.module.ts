import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Routing Modules
import { AppRoutingModule } from './app-routing/app-routing.module';

// Feature Modules
import { PageModule } from './page/page.module';
import { LayoutComponent } from './layout/layout.component';
import { NavModule } from './nav/nav.module';

import { MatSidenavModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PageModule,
        MatSidenavModule,
        NavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
