import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material';
import { RandomUsersService } from './random-users.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users$: Subject<User[]> = new BehaviorSubject<User[]>([]);

    constructor(
        private snackBar: MatSnackBar,
        private randomUsersService: RandomUsersService,
    ) { }
    loadMockData(max?: number) {
        this.randomUsersService.getUsers(max || 50).subscribe(item => {
            this.setUsers(item);
        });
    }
    setUsers(users?: User[], friends?: User[]): void {
        const usersCheck = localStorage.getItem('users');
        if (usersCheck && !users) {
            this.updateLocalStorage(JSON.parse(usersCheck));
            return;
        }
        this.updateLocalStorage(users);
    }
    addUser(user: User): Observable<any> {
        const users = [...JSON.parse(localStorage.getItem('users'))];
        users.push(user);
        this.updateLocalStorage(users);
        this.snackBar.open('User Added', '', {
            duration: 2000
        });
        return of({ sucess: true });
    }
    removeUser(index: number): Observable<any> {
        const users = [...JSON.parse(localStorage.getItem('users'))];
        users.splice(index, 1);
        this.updateLocalStorage(users);
        this.snackBar.open('User Removed', '', {
            duration: 2000
        });
        return of({ sucess: true });
    }
    clearCache() {
        localStorage.clear();
        this.updateLocalStorage([], []);
    }
    private updateLocalStorage(users: User[], friends?: string[]) {
        localStorage.setItem('users', JSON.stringify(users));
        this.users$.next(JSON.parse(localStorage.getItem('users')));
    }
}
