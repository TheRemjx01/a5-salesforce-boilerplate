import { Component, OnInit } from '@angular/core';
import {RemoteAction, VisualforceService} from 'salesforce-ng5-remote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _visualforce: VisualforceService) { }

  ngOnInit() {
    const myMethod = {
      name: 'helloWorld',
      apexController: 'SPA_HomePageCC'
    };
    const myMethod_2 = {
      name: 'helloWorldV2',
      apexController: 'SPA_HomePageCC'
    };
    const myMethod_3: RemoteAction = {
      name: 'helloWorldV3'
    };
    const myMethod_4: RemoteAction = {
      name: 'getResponseObject'
    };
    const myMethod_5: RemoteAction = {
      name: 'getResponseList'
    };
    const myMethod_6: RemoteAction = {
      name: 'getResponseMap'
    };
    this._visualforce.fetch(myMethod).then(res => {
      console.log('Visualforce service: ', res);
    });
    this._visualforce.fetch(myMethod_2, 'Nghia').then(res => {
      console.log('Vsualforce service 2: ', res);
    });
    this._visualforce.fetch(myMethod_3, 'Nghia', 'Nguyen').then(res => {
      console.log('Visualforce service 3: ', res);
    });
    this._visualforce.fetch(myMethod_4).then((res) => {
      console.log('Visualforce service 4: ', res);
    });
    this._visualforce.fetch(myMethod_5).then(res => {
      console.log('Visualforce service 5: ', res);
    });
    this._visualforce.fetch(myMethod_6).then(res => {
      console.log('Visualforce service 6: ', res);
    });

  }

}
