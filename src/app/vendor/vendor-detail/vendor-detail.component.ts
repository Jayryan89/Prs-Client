import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor} from '../vendor.class';
import { SystemService } from 'src/app/system/system.service';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor
  id: number =0;
  showVerify: boolean = false; //verify button
 
  constructor(
    private vndrsvc: VendorService,
    private route: ActivatedRoute,//inject Activated Route
    private router: Router,
    private sys : SystemService
  ) { }

  toggleVerify():void{
    this.showVerify = !this.showVerify
  }

  delete():void{
    this.vndrsvc.remove(this.vendor).subscribe(
      res =>{
        console.log("Delete was Successful.");
        this.router.navigateByUrl("/vendors/list");
      },
      err => {
        console.error(err);
      }
    )
  }

  edit():void {
    this.router.navigateByUrl(`/vendors/edit/${this.vendor.id}`);

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // creating variable and snapshot of url route
    this.vndrsvc.get(+this.id).subscribe(
      res =>{
        console.log("Vendor:", res);
        this.vendor = res;
      },
      err => {
        console.error(err);
      }
    );

  }
}