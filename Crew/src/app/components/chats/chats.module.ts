import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ChatsRoutingModule } from './chats-routing.module'
import { ChatsComponent } from './chats.component'

@NgModule({
  imports: [NativeScriptCommonModule, ChatsRoutingModule],
  declarations: [ChatsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChatsModule {}
