import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserTableComponent } from './user-table/user-table.component';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-challenge-app';
  userCount: number;
  constructor(
    public dialog: MatDialog,
    public userService: UserService,
  ) {
  }
  editUsers(): void {
    this.dialog.open(UserTableComponent, {
      maxHeight: '90vh',
    });

  }

  ngOnInit() {
    this.userService.users$.subscribe(users => {
      this.userCount = users.length;
    });

  }
}
