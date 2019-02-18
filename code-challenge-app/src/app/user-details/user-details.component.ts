import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { UserPhotoService } from '../services/user-photo.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  image: any;
  @Input() user: User;


  constructor(
    private userPhotoService: UserPhotoService,

  ) {
    this.user = this.user;
  }


  ngOnInit() {
    this.userPhotoService.getPhotos(1).pipe(first())
      .subscribe(result => {
        this.image = result['results'][0].picture;
      });
  }
}
