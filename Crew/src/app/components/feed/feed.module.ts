import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { FeedRoutingModule } from './feed-routing.module'
import { FeedComponent } from './feed.component'

@NgModule({
  imports: [NativeScriptCommonModule, FeedRoutingModule],
  declarations: [FeedComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeedModule {}
