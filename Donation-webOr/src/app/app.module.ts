import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { HeaderBarComponent } from './layout/header-bar/header-bar.component';

//primeNG
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    MenubarModule,
    InputTextModule,
    ButtonModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
