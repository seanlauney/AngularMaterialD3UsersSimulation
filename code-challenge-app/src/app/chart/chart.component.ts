import { Component, OnInit } from '@angular/core';
import { Link } from '../d3/models/link';
import { Node } from '../d3/models/node';
import { UserService } from '../services/users.service';
import { User } from '../models/user';
import { UserPhotoService } from '../services/user-photo.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];
  users: [] = [];

  constructor(
    private userService: UserService,
    private userPhotoService: UserPhotoService) { }
  ngOnInit() {
    this.userService.setUsers();
    // this.userService.loadMockData();
    this.userPhotoService.getPhotos().pipe(first())
      .subscribe(result => {
        this.users = result['results'];
      });

    this.userService.users$.subscribe((users: User[]) => {
      this.constructNodes(users);
    });
  }
  private resetChart(): void {
    this.nodes = [];
    this.links = [];
  }
  private setUpdateLinks(users: User[]) {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user && Array.isArray(user.friends)) {
        for (let j = 0; j < user.friends.length; j++) {
          /** increasing connections toll on connecting nodes */
          this.nodes[i].linkCount++;
          /** connecting the nodes before starting the simulation */
          this.links.push(new Link(i, j));
        }
      }
    }
  }
  private constructNodes(users: User[]) {
    this.resetChart();
    /** constructing the nodes array */
    for (let i = 0; i < users.length; i++) {
      const node = new Node(i, users[i]);
      this.nodes.push(node);
    }
    this.setUpdateLinks(users);
  }
}
