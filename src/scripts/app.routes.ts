import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';

const routes: Routes = [{ path: '', component: LoginComponent},

{ path: 'home', component: HomeComponent, data: { footer: true, header: true } },
{ path: 'test', loadChildren: 'scripts/test/test.module#TestModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
