import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {
  value:number=0
  constructor() { }

  ngOnInit(): void {
    this.value=1/6*100;
    this.value=parseFloat(this.value.toFixed(2));
  }

}
