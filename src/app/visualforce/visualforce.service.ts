import {Injectable, Optional} from '@angular/core';
import {NgRemote, RemoteResponse} from '../../utils/sf-remote-utils';
export class RemoteAction {
  name: string;
  apexController?: string;
}
export class VisualforceConfig {
  apexController: string;
}

@Injectable()
export class VisualforceService {
  private _apexController: string;
  constructor(@Optional() config: VisualforceConfig) {
    if (config) {
      this._apexController = config.apexController;
    }
  }
  fetch(method: RemoteAction, ...params: any[]): Promise<RemoteResponse> {
    const {name, apexController} = method;
    if (this._apexController) {
      return new NgRemote(name, this._apexController).fetch(...params);
    }

    return new NgRemote(name, apexController).fetch(...params);
  }

}
