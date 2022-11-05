import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { DiscoveryModule } from './discovery-routing.module'
import { DiscoveryComponent } from './discovery.component'
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
  imports: [NativeScriptCommonModule, DiscoveryModule, NativeScriptUIListViewModule],
  declarations: [DiscoveryComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DiscoveryModule {}
