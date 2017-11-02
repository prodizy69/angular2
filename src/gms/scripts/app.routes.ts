import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile-component/profile-component';
import { HomeComponent } from './home-component/home-component';


const routes: Routes = [{ path: '', redirectTo: 'gms', pathMatch: 'full' },
                        { path: 'gms', component: HomeComponent },
                        { path: 'gms/profile', component: ProfileComponent }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
