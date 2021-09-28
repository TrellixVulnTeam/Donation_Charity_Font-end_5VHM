import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { HeaderBarComponent } from './layout/header-bar/header-bar.component';
import { ListCampaignComponent } from './mainactivity/home-page/list-campaign/list-campaign.component';
import { HomePageComponent } from './mainactivity/home-page/home-page.component';
import { LeastCampaignComponent } from './mainactivity/home-page/least-campaign/least-campaign.component';
import { CampaignPageComponent } from './mainactivity/campaign-page/campaign-page.component';
import { CampaignDetailComponent } from './mainactivity/campaign-page/campaign-detail/campaign-detail.component';

//primeNG
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {ImageModule} from 'primeng/image';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderBarComponent,
    HomePageComponent,
    ListCampaignComponent,
    LeastCampaignComponent,
    CampaignPageComponent,
    CampaignDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    MenubarModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ImageModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
