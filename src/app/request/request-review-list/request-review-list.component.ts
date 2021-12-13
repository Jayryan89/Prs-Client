import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../request.service';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];
  request: Request = new Request();
  searchCriteria: string = '';

  constructor(
    private requestsvc: RequestService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.request.userId = +this.sys.loggedInUser.id
    this.requestsvc.reviewlist(this.request.userId).subscribe(
      res => {
        console.log(res);
        this.requests = res as Request[];
      },
      err => {
        console.error(err);
      }

    );
  }
  }