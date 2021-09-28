import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.css']
})
export class ListCampaignComponent implements OnInit {
  listcampaign=[
    {
      id:1,name:'Quỹ vaccine phòng chống Covid-19',currentPrice:10000000000,plan:60000000000,image:'../../../assets/image/vacxin.png',title:'Vì một việt nam khoẻ mạnh',startDate:'1/1/2021'
    },
    {
      id:2,name:'Quỹ vaccine phòng chống Covid-19',currentPrice:10000000000,plan:60000000000,image:'../../../assets/image/vacxin.png',title:'Vì một việt nam khoẻ mạnh',startDate:'1/4/2021'
    },
    {
      id:3,name:'Quỹ vaccine phòng chống Covid-19',currentPrice:10000000000,plan:60000000000,image:'../../../assets/image/vacxin.png',title:'Vì một việt nam khoẻ mạnh',startDate:'1/6/2021'
    },
    {
      id:4,name:'Quỹ vaccine phòng chống Covid-19',currentPrice:10000000000,plan:60000000000,image:'../../../assets/image/vacxin.png',title:'Vì một việt nam khoẻ mạnh',startDate:'1/9/2021'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
