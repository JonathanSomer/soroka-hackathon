import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatTableModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployesHeadsComponent } from './employes-heads/employes-heads.component';
import { YouTuveIframeComponent } from './you-tuve-iframe/you-tuve-iframe.component';
import { VideoGameComponent } from './video-game/video-game.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'employees', component: EmployesHeadsComponent },
  { path: 'video-game', component: VideoGameComponent },
  { path: '**', component: VideoGameComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EmployesHeadsComponent,
    YouTuveIframeComponent,
    VideoGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true} // <-- debugging purposes only
    )
  ],
  entryComponents: [
    YouTuveIframeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
