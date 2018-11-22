import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployesHeadsComponent } from './employes-heads/employes-heads.component';
import { YouTuveIframeComponent } from './you-tuve-iframe/you-tuve-iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesHeadsComponent,
    YouTuveIframeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatDialogModule
  ],
  entryComponents: [
    YouTuveIframeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
