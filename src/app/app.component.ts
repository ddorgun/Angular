import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError
} from '@angular/router';
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
        transform: 'scale(1.1)'
      })),
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
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
      state('active', style({ width: '240px' })),
      state('inactive', style({ width: '40px' })),
      transition('inactive <=> active', animate('200ms ease-out'))
      // transition('* => start', [
      //     group([
      //         animate('0.3s 0.1s ease', style({
      //             width: 120,
      //             visibility: 'hidden'
      //         })),
      //         animate('0.3s ease', style({
      //             opacity: 1

      //         }))
      //     ])
      // ]),
      // transition('start => *', [
      //     group([
      //         animate('0.3s ease', style({
      //             // width: 40
      //             visibility: 'visible'
      //         })),
      //         animate('0.3s 0.2s ease', style({
      //             opacity: 0

      //         }))
      //     ])
      // ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
  isExpanded = true;
  isShowing = false;
  isMenuMouserOver = 'inactive'
  expend = 'hidden';
  isLodingBar = false;

  constructor(private route: Router) {
    this.route.events.subscribe(
      event => this.navigationInterceptor(event),
      error => console.error(error),
      () => console.log('Complete'));
  }


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

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.isLodingBar = true;
    }
    if (event instanceof NavigationEnd) {
      console.log('NaviagationEnd');
      this.isLodingBar = false;
    }
    if (event instanceof NavigationCancel) {
      this.isLodingBar = false;
    }
    if (event instanceof NavigationError) {
      this.isLodingBar = false;
    }
  }
}
