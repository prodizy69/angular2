import { TestRoutingModule } from './test.routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  imports: [CommonModule, TestRoutingModule],
  declarations: [SampleComponent
  ],
  exports: [SampleComponent],
  providers: []
})
export class TestModule {

}
