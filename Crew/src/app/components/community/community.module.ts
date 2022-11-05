import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { CommunityRoutingModule } from './community-routing.module'
import { CommunityComponent } from './community.component'

@NgModule({
  imports: [NativeScriptCommonModule, CommunityRoutingModule],
  declarations: [CommunityComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CommunityModule {}
