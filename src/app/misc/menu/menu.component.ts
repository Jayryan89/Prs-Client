import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { Menu } from './menu.class';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  get name() { 
    return this.sys.getLoggedInUser()?.username;
  }

  menus: any[] = [    
    {display:'Home', route: '/home'},
    {display:'Users', route: '/users/list'},
    {display:'Vendors', route: '/vendors/list'},
    {display:'Products', route: '/products/list'},
    {display:'Requests', route: '/requests/list'},
    {display:'Reviews', route:  '/requests/request-review-list'},
    {display:'About', route: '/about'},
    {display:'Login', route:'/users/login'},
    
  ]

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
  }

}