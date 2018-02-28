import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {VisualforceService} from './visualforce/visualforce.service';
import {VisualforceModule} from "./visualforce/visualforce.module";


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
