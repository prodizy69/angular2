import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LoginComponent},

{ path: 'home', component: HomeComponent, data: { footer: true, header: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
