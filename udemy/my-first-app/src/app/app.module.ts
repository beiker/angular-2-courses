import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { WarningAlertComponent } from './warning-alert/warning-alert.component';
// import { PracticingDirectivesComponent } from './practicing-directives/practicing-directives.component';
import {CockpitComponent} from './cockpit/cockpit.component';
import {ServerElementComponent} from './server-element/server-element.component';

@NgModule({
  declarations: [
      AppComponent,
      // ServerComponent,
      // ServersComponent,
      // SuccessAlertComponent,
      // WarningAlertComponent,
      // PracticingDirectivesComponent
      CockpitComponent,
      ServerElementComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
