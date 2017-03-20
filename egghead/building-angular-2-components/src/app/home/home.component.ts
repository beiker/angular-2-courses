import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {SimpleService} from '../services/services.module';
import {WidgetThree} from '../widgets/widget-three.component';
@Component({
  selector: 'home',
  template: `
    <div>I'm the app component</div>
    <widget-one [message]="simpleService.message"></widget-one>
    <widget-one [message]="'Hello World'"></widget-one>
    <widget-two></widget-two>
    <hr>
    {{simpleService.message}}
    <hr>
    <widget-two>
      <widget-one [message]="'Widget One Anidado en Widget Two'"></widget-one>
    </widget-two>
    <hr>
    <div #container></div>
`
})
export class HomeComponent{

  @ViewChild('container', {read:ViewContainerRef}) container;

  constructor(
    private simpleService:SimpleService,
    private resolver:ComponentFactoryResolver
  ){}

  ngAfterContentInit(){
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    this.container.createComponent(widgetFactory);
  }
}
