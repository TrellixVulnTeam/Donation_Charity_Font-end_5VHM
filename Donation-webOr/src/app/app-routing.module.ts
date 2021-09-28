import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { CampaignDetailComponent } from './mainactivity/campaign-page/campaign-detail/campaign-detail.component';
import { HomePageComponent } from './mainactivity/home-page/home-page.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'campaign',
    component:CampaignDetailComponent
  },
  {
    path:'',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
