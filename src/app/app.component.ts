import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    isExpanded = true;
    isShowing = false;

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
}
