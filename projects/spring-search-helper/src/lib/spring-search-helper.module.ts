import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class SpringSearchHelperModule {
  constructor(@Optional() @SkipSelf() parentModule: SpringSearchHelperModule) {}
}
