import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private access_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2MSIsInVuaXF1ZV9uYW1lIjoiaW50ZXJ2aWV3YXBpQGdhcnRuZXIuY29tIiwiZW1haWwiOiJpbnRlcnZpZXdhcGlAZ2FydG5lci5jb20iLCJuYmYiOjE1NDY0NDIxNzksImV4cCI6MTYwNjQ0MjExOSwiaWF0IjoxNTQ2NDQyMTc5fQ.44hDkqDwmhZ-kNZ0muzk7B7T-yTKcHz-w_Vr0FHDih4`;

  setToken() {
    localStorage.setItem('access_token', this.access_token);
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
}
