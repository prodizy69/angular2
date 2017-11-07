import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'gms', pathMatch: 'full' },
{ path: 'gms', component: LoginComponent, data: { footer: false, header: false }},
{ path: 'gms/home', component: HomeComponent, data: { footer: true, header: true }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
