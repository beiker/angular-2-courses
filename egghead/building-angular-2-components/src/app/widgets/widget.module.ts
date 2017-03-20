import {NgModule} from '@angular/core';
import {WidgetOne} from './widget-one.component';
import {WidgetTwo} from './widget-two.component';
import {WidgetThree} from './widget-three.component';
@NgModule({
  declarations: [WidgetOne, WidgetTwo, WidgetThree],
  entryComponents: [WidgetThree],
  exports: [WidgetOne, WidgetTwo, WidgetThree]
})
export class WidgetModule{}
