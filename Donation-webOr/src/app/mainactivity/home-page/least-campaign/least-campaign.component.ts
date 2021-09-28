import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-least-campaign',
  templateUrl: './least-campaign.component.html',
  styleUrls: ['./least-campaign.component.css']
})
export class LeastCampaignComponent implements OnInit {
  value:number=0;
  constructor() { }

  ngOnInit(): void {
    this.value=1/6*100;
    this.value=parseFloat(this.value.toFixed(2));
  }

}
