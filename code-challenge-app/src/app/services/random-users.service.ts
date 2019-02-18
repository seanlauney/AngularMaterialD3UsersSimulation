import { Injectable } from '@angular/core';
import { UserPhotoService } from './user-photo.service';
import { User } from '../models/user';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {
  users: User[];
  friends: User[] = [];

  constructor(private userPhotoService: UserPhotoService) { }
  titleCase(text: string) {
    if (!text) { return text; }
    return text.split(' ')
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(' ');
  }
  getFriends(max: number) {
    const random = this.friends.sort(() => 0.5 - Math.random());
    return random.slice(0, max).map(item => {
      if (item.friends.length < 1) {
        item.friends.push(random[0]);
      }
      item.friends.map(current => {
        current.friends = [];
        return current;
      })
      return item;
    });
  }

  getUsers(max?: number): Observable<any> {
    return this.userPhotoService.getPhotos()
      .pipe(map(users => {
        this.users = users['results'].map(user => {
          const currentUser: User = {
            name: this.titleCase(user.name.first),
            age: user.dob.age,
            weight: Math.floor((user.location.postcode / 1000) + 100) || 155,
            friends: this.getFriends(Math.floor(Math.random() * 15) + 1),
          };
          this.friends.push(currentUser);

          return currentUser;
        });
        return this.users;
      }));
  }
}
