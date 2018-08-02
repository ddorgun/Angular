import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group
} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('menuMouseOver', [
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1)'
            })),
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1.1)'
            })),
            transition('inactive <=> active', animate('100ms ease-out'))
            // transition('inactive => active', [
            //     group([
            //         animate('100ms ease-out'),
            //         animate('0.3s 0.1s ease', style({
            //             transform: 'translatex(0)',
            //             width: 120
            //         }))
            //     ])
            // ]),
            // transition('active => inactive', [
            //     group([
            //         animate('100ms ease-out'),
            //         animate('0.3s ease', style({
            //             transform: 'translatex(-20px)',
            //             width: 120
            //         }))
            //     ])
            // ])
        ]),
        trigger('menuExpendMouseOver', [
            state('view', style({width: 120, opacity: 1})),
            transition('* => start', [
                group([
                    animate('0.3s 0.1s ease', style({
                        width: 120,
                        visibility: 'hidden'
                    })),
                    animate('0.3s ease', style({
                        opacity: 1
                        
                    }))
                ])
            ]),
            transition('start => *', [
                group([
                    animate('0.3s ease', style({
                        // width: 40
                        visibility: 'visible'
                    })),
                    animate('0.3s 0.2s ease', style({
                        opacity: 0
                        
                    }))
                ])
            ])
        ])
    ]
})
export class AppComponent {
    title = 'app';
    isExpanded = true;
    isShowing = false;
    isMenuMouserOver = 'inactive'
    expend = 'hidden';

    constructor(private route: Router) { }

    mouserover(): void {
        console.log('over');
        // this.isMenuMouserOver = (this.isMenuMouserOver != 'inactive') ? 'active' : 'inactive';
    }

    mouseenter(): void {
         this.isMenuMouserOver = 'active';
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    }

    mouseleave(): void {
        this.isMenuMouserOver = 'inactive';
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    }
    go(): void {
        this.route.navigate(['page1']);
    }

    go2(): void {
        this.route.navigate(['page2']);
    }

    animationDone($event) :void {

        console.log($event);
        if($event.fromState !== 'void' && this.isShowing){
            ($event.toState === 'active') ? this.expend = 'start' : this.expend = 'hidden';
        }
    }

    animationDone1($event) :void {

        console.log('animationDone1', $event);
    }
}
