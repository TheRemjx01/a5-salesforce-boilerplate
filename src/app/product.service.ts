import { Injectable } from '@angular/core';
import {VisualforceService} from 'salesforce-ng5-remote';
import Product from '../models/Product';
import {RemoteResponse} from '../utils/sf-remote-utils';

@Injectable()
export class ProductService {

  constructor(private _visualforce: VisualforceService) { }

  getAll(): Promise<Product[]> {
    return this._visualforce.fetch({name: 'getAll'}).then((response: RemoteResponse) => {
      return response.res;
    }, (err) => {
      console.log('Err while fetch: ', err);
    });
  }

  getById(id: string): Promise<Product> {
    return this._visualforce.fetch({name: 'getById'}, id).then((response: RemoteResponse) => {
      return response.res;
    }, (err) => {
      console.log('Err while fetch: ', err);
    });
  }
}
