import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../../user/user-detail'
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: UserDetail = {id: null, name: null};
  constructor(private userService: UserService) {
    console.log('HomeComponent constructor');
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
   }

  ngOnInit() {
    // this.user = this.userService.getUser();
    // console.log(this.user);
    console.log('HomeComponent', this.user);
    
  }

}
