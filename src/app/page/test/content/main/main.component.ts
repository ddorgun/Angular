import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { UserDetail } from 'src/app/user/user-detail';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userInfo: UserDetail;
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService) {
    this.user.getUser().subscribe(data => this.userInfo = data);
  }

  ngOnInit() {
    console.log('MainComponent', this.userInfo);
  }

  goch(): void {
    this.router.navigate(['common'], { relativeTo: this.route });
  }

}
