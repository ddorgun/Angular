import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user/user.service';
import { UserDetail } from '../user/user-detail';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userInfo: UserDetail = {id: "", name: ""};

    constructor(user: UserService) {
      this.userInfo = user.getData();
    }

    ngOnInit() {
    }

    @Output() menuToggleEvent = new EventEmitter();

    menutoggle(): void {
        this.menuToggleEvent.emit();
    }
    
}
