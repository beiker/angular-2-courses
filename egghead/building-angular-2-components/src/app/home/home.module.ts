import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {WidgetModule} from '../widgets/widget.module';
@NgModule({
  imports: [WidgetModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule{}
