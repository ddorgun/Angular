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

import { MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        BreadcrumbComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PageModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatProgressBarModule,
        NavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
