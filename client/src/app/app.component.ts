import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {YouTuveIframeComponent} from './you-tuve-iframe/you-tuve-iframe.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  srcObject: null;

  constructor(public dialog: MatDialog, public router: Router) {}


  openyouTubeMovie(url: string, title: string) {
    return this.dialog.open(YouTuveIframeComponent, {
      width: '400px',
      data: {url: url, title}
    });
  }

  ngOnInit(): void {
    this.openyouTubeMovie('./assets/about_movie.mp4','ברוכים הבאים למי מה מו!');
  }

  changeCurrentTab(index) {
    switch (index) {
      case 1:
        this.router.navigateByUrl('/video-game');
        break;
      case 0:
        this.router.navigateByUrl('/employees');
        break;
      case 2:
        this.router.navigateByUrl('/about-us');
        break;
    }
  }
}
