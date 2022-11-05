import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', loadChildren: () => import('~/app/components/feed/feed.module').then((m) => m.FeedModule) },
  { path: 'community', loadChildren: () => import('~/app/components/community/community.module').then((m) => m.CommunityModule) },
  { path: 'chats', loadChildren: () => import('~/app/components/feed/feed.module').then((m) => m.FeedModule) },
  { path: 'profile', loadChildren: () => import('~/app/components/profile/profile.module').then((m) => m.ProfileModule) },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
