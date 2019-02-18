import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserPhotoService {
  private readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getPhotos(max?: number) {
    return this.http.get(`${this.baseUrl}?results=${max || '50'}`);
  }
}
