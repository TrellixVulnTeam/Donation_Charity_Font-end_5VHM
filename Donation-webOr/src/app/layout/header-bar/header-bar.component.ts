import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Charity',
        icon:'pi pi-home',
        routerLink:'/home',
      },
      {
        label:'Campaign',
      },
      {
        label:'Manage team',
        icon:'pi pi-users',
      },
      {
        label:'Account',
        icon:'pi pi-user',
        items:[
          {
            label:'Your profile',
            icon:'pi pi-user-edit',
          },
          {
            label:'Logout',
            icon:'pi pi-sign-out',
            routerLink:'/login',
          }
        ]
      },
  ];
  }

}
