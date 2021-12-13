import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../request.service';
import { Request} from  '../request.class';
import { User } from 'src/app/user/user.class';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  users! : User
  requests: Request[] = [];
  searchCriteria: string = "";
  statusStyles: any = {
    NEW: "bold",
    EDIT: "text-primary bold",
    REVIEW: "text-warning bold",
    APPROVED: "text-success bold",
    REJECTED: "text-danger bold",
  };

  constructor(
    private reqsrv: RequestService,
    private sys: SystemService
  ) { }

  get isAdmin() { return this.sys.getLoggedInUser().isAdmin; }

  ngOnInit(): void {
    this.reqsrv.list().subscribe(
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