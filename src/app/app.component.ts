import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    isExpanded = true;
    isShowing = false;

    constructor(private route: Router){}

    mouseenter(): void {
        if(!this.isExpanded){
            this.isShowing = true;
        }
    }

    mouseleave(): void {
        if(!this.isExpanded){
            this.isShowing = false;
        }
    }
    go(): void {
        this.route.navigate(['page1']);
    }

    go2(): void {
        this.route.navigate(['page2']);
    }
}
