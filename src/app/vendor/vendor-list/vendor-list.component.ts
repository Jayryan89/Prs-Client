import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service'
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  constructor(
    private vndrsvc: VendorService,
    private sys : SystemService
  ) { }

  vendors: Vendor[] = [];
  searchCriteria: string = "";
  sortAsc: boolean=true;

  ngOnInit(): void {
    this.vndrsvc.list().subscribe(
      vendors => {
        console.log("Vendors: vendor", )
        this.vendors = vendors;

      },
      err => {
        console.error(err);
      }

    );
  }

}
