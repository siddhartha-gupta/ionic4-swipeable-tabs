import { NgModule } from '@angular/core';
import { SwipeTabDirective } from './swipe-tab.directive';

@NgModule({
  declarations: [
    SwipeTabDirective
  ],
  exports: [
    SwipeTabDirective
  ]
})
export class DirectivesModule { }
