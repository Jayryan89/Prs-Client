import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string = "";

  constructor(private usrsrv: UserService, private sys : SystemService) { }


  ngOnInit(): void {
    this.usrsrv.list().subscribe(
      users => {
        console.log("Users:", users)
        this.users = users;

      },
      err => {
        console.error(err);
      }

    );
  }
}