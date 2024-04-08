import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-Users-list',
  templateUrl: './Users-list.component.html',
  styleUrls: ['./Users-list.component.css'],
})
export class UsersListComponent {
  Users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  title = '';

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.UserService.getAll().subscribe({
      next: (data) => {
        this.Users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(User: User, index: number): void {
    this.currentUser = User;
    this.currentIndex = index;
  }

}
