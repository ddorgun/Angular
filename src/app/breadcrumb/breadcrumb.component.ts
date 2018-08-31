import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from './breadcrumb.interface'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {

  constructor(private router : Router) { 
    //   breadcumbs$ = this.router.events
  }

  ngOnInit() {
  }

}

