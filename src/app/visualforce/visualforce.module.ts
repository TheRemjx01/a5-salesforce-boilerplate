import {NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {VisualforceConfig} from './visualforce.service';

@NgModule({
  imports: [],
  declarations: []
})
export class VisualforceModule {
  constructor(@Optional() @SkipSelf() parentModule: VisualforceModule) {
    if (VisualforceModule) {
      throw new Error('Visualforce module has already loaded. Import it in the app module only');
    }
  }

  static forRoot(visualforceConfig: VisualforceConfig): ModuleWithProviders {
    return {
      ngModule: VisualforceModule,
      providers: [
        {provide: VisualforceConfig, useValue: visualforceConfig}
      ]
    };
  }
}
