import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GettingStartedPageComponent } from './pages/getting-started-page/getting-started-page.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { environment } from 'src/environments/environment';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToEntryRoute = () => redirectLoggedInTo([environment.entryRoute]);

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [ AngularFireAuthGuard ], data: { authGuardPipe: redirectLoggedInToEntryRoute } },
  { path: environment.entryRoute, component: GettingStartedPageComponent, canActivate: [ AngularFireAuthGuard ], data: { authGuardPipe: redirectUnauthorizedToLogin }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
