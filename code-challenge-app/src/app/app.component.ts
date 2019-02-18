import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserTableComponent } from './user-table/user-table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-challenge-app';
  constructor(
    public dialog: MatDialog,
  ) {
  }
  editUsers(): void {
    this.dialog.open(UserTableComponent, {
      maxHeight: '90vh',
    });

  }

  ngOnInit() { }
}
