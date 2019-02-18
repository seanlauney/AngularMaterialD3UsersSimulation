import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../models/user';
import { UserPhotoService } from '../services/user-photo.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  image: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private userPhotoService: UserPhotoService,

  ) {
    if (data) {
      this.user = {
        name: data.name,
        friends: data.friends,
        weight: data.weight,
        age: data.age,
      }
    }
  }

  ngOnInit() {
    this.userPhotoService.getPhotos(1).pipe(first())
      .subscribe(result => {
        this.image = result['results'][0].picture;
      });


  }


}
