import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'fun-with-forms';
  submitted = false;

  constructor(private userservice: UserService) {}

  onSubmit(e: NgForm) {
    if (!e.value.gender || !e.value.checkIfHuman) {
      return;
    }
    this.userservice.addUser(e.value);
    this.submitted = true;
  }
}
