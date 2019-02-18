import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../models/user';

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.scss']
})
export class UserDetailsDialogComponent implements OnInit {
  user: User;


  constructor(@Inject(MAT_DIALOG_DATA) data: any,
  ) {
    if (data) {
      this.user = {
        name: data.name,
        friends: data.friends,
        weight: data.weight,
        age: data.age,
      };
    }
  }

  ngOnInit() {
  }
}
