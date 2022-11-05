import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { OnboardingRoutingModule } from './onboarding-routing.module'
import { ProfileComponent } from './onboarding.component'

@NgModule({
  imports: [NativeScriptCommonModule, OnboardingRoutingModule],
  declarations: [ProfileComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class OnboardingModule {}
