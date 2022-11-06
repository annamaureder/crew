import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { DiscoveryComponent } from './discovery.component'
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { DiscoveryRoutingModule } from "./discovery-routing.module";

@NgModule({
  imports: [NativeScriptCommonModule, DiscoveryRoutingModule, NativeScriptUIListViewModule],
  declarations: [DiscoveryComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DiscoveryModule {}
