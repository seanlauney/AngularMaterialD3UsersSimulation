import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { User } from '../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  users: User[];
  user: User;
  friend: string;
  friends: any[];
  tempTest: any[] = [];
  friendAutoOptions: User[] = [];
  showLastCreatedUser = false;
  spinner = false;

  constructor(
    private userService: UserService,
  ) {
    this.friends = [];
  }
  ngOnInit() {
    this.userService.users$.subscribe((users: User[]) => {
      this.friendAutoOptions = users;
    });

    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
      friends: new FormControl([]),
      weight: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(200)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }
  public createUser = (ownerFormValue) => {
    if (this.userForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }
  private executeOwnerCreation = (userFormValue) => {
    const user: User = {
      name: userFormValue.name,
      friends: userFormValue.friends,
      weight: userFormValue.weight,
      age: userFormValue.age,
    };
    this.userService.addUser(user).subscribe(res => {
      this.spinner = true;
      // console.log(res);
      setTimeout(() => {
        this.showLastCreatedUser = true;
        this.userForm.reset();
        this.spinner = false;
      }, 800);
    }, (error => {
      console.log(error, user);
    }));
  }
}
