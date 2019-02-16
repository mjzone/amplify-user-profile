import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule,
  CanActivate
} from '@angular/router';
import {
  AuthComponent
} from './auth/auth.component';
import {
  ProfileComponent
} from './profile/profile.component';
import {
  AuthGuard
} from './auth.guard';

const routes: Routes = [{
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
