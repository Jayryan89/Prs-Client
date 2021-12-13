import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  constructor(
    private router: Router,
    private vndrsvc: VendorService,
    private sys : SystemService
  ) { }

  save():void{
    this.vndrsvc.create(this.vendor).subscribe(
      res=>{
        console.log("Vendor create successful.")
        this.router.navigateByUrl("/vendor/list")
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
  }

}