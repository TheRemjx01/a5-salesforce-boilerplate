import { Component, OnInit } from '@angular/core';
import {NgRemote} from '../../utils/sf-remote-utils';
import {VisualforceService} from "../visualforce/visualforce.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _visualforce: VisualforceService) { }

  ngOnInit() {
    const ngRemote = new NgRemote('helloWorld', 'SPA_HomePageCC');
    const ngRemoteV2 = new NgRemote('helloWorldV2', 'SPA_HomePageCC');
    ngRemote.getApi()().then(res => {
      console.log('RES: ', res);
    });
    ngRemoteV2.getApi()('Nghia').then(res => {
      console.log('RES: ', res);
    });
    ngRemoteV2.fetch('Nghia').then(res => {
      console.log('RUNNER: ', res);
    });
    const myMethod = {
      name: 'helloWorld',
      apexController: 'SPA_HomePageCC'
    };
    const myMethod_2 = {
      name: 'helloWorldV2',
      apexController: 'SPA_HomePageCC'
    };
    const myMethod_3 = {
      name: 'helloWorldV3',
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

  }

}
