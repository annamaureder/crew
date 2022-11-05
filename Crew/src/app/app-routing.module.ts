import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('~/app/components/home/home.module').then((m) => m.HomeModule)},
  { path: 'onboarding', loadChildren: () => import('~/app/components/home/home.module').then((m) => m.HomeModule)},
  { path: 'chats', loadChildren: () => import('~/app/components/home/home.module').then((m) => m.HomeModule)},
  { path: 'profile', loadChildren: () => import('~/app/components/home/home.module').then((m) => m.HomeModule)},
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
