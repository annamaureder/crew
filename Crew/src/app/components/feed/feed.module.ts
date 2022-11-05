import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { FeedRoutingModule } from './feed-routing.module'
import { FeedComponent } from './feed.component'
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
  imports: [NativeScriptCommonModule, FeedRoutingModule, NativeScriptUIListViewModule],
  declarations: [FeedComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeedModule {}
