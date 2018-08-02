import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  goch(): void {
    this.router.navigate(['common'], {relativeTo: this.route});
}

}
