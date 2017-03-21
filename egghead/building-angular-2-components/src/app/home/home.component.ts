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
    <button (click)="onClick()">Click!!</button>
    <button (click)="onClickDetach()">Detach!!</button>
    <div #container></div>
    <hr>
    <button (click)="createTemplate()">Create Template</button>
    <template #template let-description="description">
      <h2>My {{description}} Template</h2>
      <button>My {{description}} button</button>
    </template>
`
})
export class HomeComponent{@ViewChild('container', {read:ViewContainerRef}) container; private widgetRef;

  @ViewChild('template') template;

  constructor(
    private simpleService:SimpleService,
    private resolver:ComponentFactoryResolver
  ){}

  ngAfterContentInit(){
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);

    this.widgetRef = this.container.createComponent(widgetFactory, 2);
    this.widgetRef.instance.message = `I'm last!!`;
  }

  onClick(){
    // const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    // const widgetRef = this.container.createComponent(widgetFactory, 3);
    // widgetRef.instance.message = `I'm fourth!!`;

    // this.container.move(this.widgetRef.hostView, 3);

    const randomIndex = Math.floor(Math.random() * this.container.length);
    this.container.move(this.widgetRef.hostView, randomIndex);
  }

  onClickDetach(){
    this.container.detach(2);
  }

  createTemplate(){
    this.container.createEmbeddedView(this.template, {
      description: 'sweet!!'
    });
  }
}
