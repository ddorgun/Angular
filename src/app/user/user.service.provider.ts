import { UserService } from "./user.service";
import { APP_INITIALIZER } from "@angular/core";

let userServiceFactory = (userService: UserService) => {
  return () => {
    console.log('userServiceFactory');
    return userService.get();
  }
}

export let userServiceProvider = {
  provide: APP_INITIALIZER,
  useFactory: userServiceFactory,
  deps: [UserService],
  multi: true
}