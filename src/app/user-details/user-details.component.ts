import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userName = this.userService.getUser().name;
  userSurname = this.userService.getUser().surname;
  userBirthDate = this.userService.getUser().birthDate;
  userGender = this.userService.getUser().gender;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
