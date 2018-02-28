declare var Visualforce: any; // skipped typescript declaration check manually
export class RemoteResponse {
  res: any;
  originalEvent: any;
}

// reference: https://github.com/Microsoft/TypeScript/issues/3691 (skipped declaration check)
export class NgRemote {
  jsRemoteMethod;
  sfController;
  remoteCallName;
  fetch;
  /**
   *  Usage: new NgRemote(method, controller).run(params...).then(callback)
   * */
  constructor(jsRemoteMethod, sfController) {
    this.jsRemoteMethod = jsRemoteMethod;
    this.sfController = sfController;
    this.remoteCallName = `${this.sfController}.${this.jsRemoteMethod}`;
    this.fetch = this.getApi();
  }
  /** Call: promise(arg1, arg2)
   * */
   getApi(): any {
    return (...args: any[]) => {
      const _allArguments = [...args];
      return new Promise((resolve, _) => {
       Visualforce.remoting.Manager.invokeAction(this.remoteCallName, ..._allArguments, (res, originalEvent) => {
         resolve({
           res,
           originalEvent
         });
       });
     });
    };
  }

}
