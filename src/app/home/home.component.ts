import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('f') personalForm: NgForm;
  title = 'fun-with-forms';
  submitted = false;

  constructor(private userservice: UserService) {}

  ngOnInit(): void {}

  onSubmit(e: NgForm) {
    if (!e.value.gender || !e.value.checkIfHuman) {
      return;
    }
    this.userservice.addUser(e.value);
    this.submitted = true;
  }
}
