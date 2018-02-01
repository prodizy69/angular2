import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '', component: SampleComponent }
];

export const TestRoutingModule = RouterModule.forChild(routes);
