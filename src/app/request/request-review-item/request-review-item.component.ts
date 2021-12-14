import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system/system.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  users: User[]=[];
  requestId: number=0;
  request!: Request;
  showReject: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private requestsvc:RequestService,
    private router: Router,
    private sys: SystemService
  ) { }

  approve():void {
    this.requestsvc.approve(this.request).subscribe(
      res=>{
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  reject(): void {
    this.requestsvc.reject(this.request).subscribe({
      next: res=>{
        this.router.navigateByUrl("/requests/list");
      },
      error: err=>{
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.params['id'];
    let id = this.route.snapshot.params['id'];
    this.requestsvc.get(+id).subscribe(
      res=>{
        console.log("Request", res);
        this.request = res as Request;
      },
      err=> {
        console.error(err);
      }
    );
  }
}
