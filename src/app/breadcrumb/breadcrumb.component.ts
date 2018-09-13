import { filter, map, distinctUntilChanged,  } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Breadcrumb } from './breadcrumb'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {

  breadcrumbs$: Observable<Breadcrumb[]>;
  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      // distinctUntilChanged(),
      map((event: NavigationEnd) => {
        return this.buildBreadcrumb(this.activateRoute)
      })
    );
  }

  ngOnInit() {
  }

  buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<Breadcrumb> = []): Array<Breadcrumb> {
    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    const path = route.routeConfig ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}`;
    let newBreadcrumbs = [...breadcrumbs];
    if(path){
      newBreadcrumbs.push({
        label: label,
        url: nextUrl
      });
    }
    if (route.firstChild && route.firstChild.routeConfig.path) {
      return this.buildBreadcrumb(route.firstChild, `${nextUrl}/`, newBreadcrumbs)
    }
    return newBreadcrumbs;
  }

}