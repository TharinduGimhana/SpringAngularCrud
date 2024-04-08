import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-User',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user: User = {
    name: '',
    address: ''
  };
  submitted = false;

  constructor(private userService: UserService) {}

  saveUser(): void {
    const data = {
      name: this.user.name,
      address: this.user.address
    };

    this.userService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      address: ''
    };
  }
}
