import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'verify-mail',
    loadChildren: () => import('./verify-mail/verify-mail.module').then( m => m.VerifyMailPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'new-user',
    loadChildren: () => import('./new-user/new-user.module').then( m => m.NewUserPageModule),
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
