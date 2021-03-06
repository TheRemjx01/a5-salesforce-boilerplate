import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {VisualforceModule} from 'salesforce-ng5-remote';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisualforceModule.forRoot({
      apexController: 'SPA_HomePageCC'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
