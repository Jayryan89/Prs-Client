import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class'
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user.class';


@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  users: User[] = [];
  request!: Request;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersvc: UserService,
    private requestsvc: RequestService,
    private sys: SystemService
  ) { }

  save(): void {
    this.requestsvc.edit(this.request).subscribe(
      res => {
        console.log("Request Edit Successful");
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.requestsvc.get(+id).subscribe(
      res => {
        console.log("Request", res);
        this.request = res as Request;
      },
      err => {
        console.error(err);
      }
    );
      this.usersvc.list().subscribe(
        res => {
          this.users = res as User[];
        },
        err => {
          console.error(err);
        }
      );
    
  }

}