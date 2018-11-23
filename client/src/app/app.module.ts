import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule, MatSnackBarModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployesHeadsComponent } from './employes-heads/employes-heads.component';
import { YouTuveIframeComponent } from './you-tuve-iframe/you-tuve-iframe.component';
import { VideoGameComponent } from './video-game/video-game.component';
import {RouterModule, Routes} from '@angular/router';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AboutUsComponent } from './about-us/about-us.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    // override hammerjs default configuration
    'swipe': { direction: Hammer.DIRECTION_ALL  }
  };
}

const appRoutes: Routes = [
  { path: 'employees', component: EmployesHeadsComponent },
  { path: 'video-game', component: VideoGameComponent },
  { path: 'about-us', component: AboutUsComponent },
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
    VideoGameComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true} // <-- debugging purposes only
    )
  ],
  entryComponents: [
    YouTuveIframeComponent
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
