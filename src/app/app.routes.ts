import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FortuneLandingComponent } from './fortune-landing/fortune-landing.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'login', component: UserLoginComponent }, 
    { path: 'signup', component: UserSignUpComponent }, 
    { path: 'landing', component: FortuneLandingComponent }, 
//   { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule {}
