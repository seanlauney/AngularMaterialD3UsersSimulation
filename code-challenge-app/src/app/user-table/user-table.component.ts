import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { UserService } from '../services/users.service';
import { User } from '../models/user';



@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'friends', 'age', 'weight'];
  dataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);
  remove: number;
  mockCount = 500;
  maxCount = 1000;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.users$.subscribe(users => {
      this.dataSource.data = users;
    });
  }
  removeUser(index: number) {
    this.remove = index;
    this.userService.removeUser(index).subscribe(res => {
      // console.log(res, index);
      setTimeout(() => {
        this.remove = null;
      }, 500);

    });
  }
  resetUsers() {
    this.userService.loadMockData(this.mockCount);
  }
  clearUsers() {
    this.userService.clearCache();
  }
}
