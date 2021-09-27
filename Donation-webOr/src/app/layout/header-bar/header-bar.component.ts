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
        label:'Donation',
        icon:'pi pi-home',
      },
  ];
  }

}
