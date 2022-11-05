import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ChatsRoutingModule } from './chats-routing.module'
import { BenefitsComponent } from './benefits.component'

@NgModule({
  imports: [NativeScriptCommonModule, ChatsRoutingModule],
  declarations: [BenefitsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChatsModule {}
