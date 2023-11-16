import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserControllerService} from "../../services/user-controller.service";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserControllerService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.findAll().subscribe(data => this.users = data);
  }
}
