import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  profile;

  addUser(user) {
    this.profile = user;
  }

  getUser() {
    return this.profile;
  }
}
