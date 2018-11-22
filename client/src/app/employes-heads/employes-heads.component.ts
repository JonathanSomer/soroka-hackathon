import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {YouTuveIframeComponent} from '../you-tuve-iframe/you-tuve-iframe.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-employes-heads',
  templateUrl: './employes-heads.component.html',
  styleUrls: ['./employes-heads.component.scss']
})
export class EmployesHeadsComponent implements OnInit {
  public currentEmployee = 1;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public employes = [
    { name: 'קלאודיו אלתר', title: 'אח', imageUrl: './assets/claudio.png', videoUrl: './assets/cloud.mp4'},
    { name: 'רויטל גוטרמן', title: 'אחות', imageUrl: './assets/revital.png', videoUrl: './assets/revi.mp4'},
    { name: 'מנור שפריץ', title: 'רופא', imageUrl: './assets/manor.png', videoUrl: './assets/cloud.mp4'}
  ];

  openyouTubeMovie(url: string, title: string) {
    const dialogRef = this.dialog.open(YouTuveIframeComponent, {
      width: '400px',
      data: {url: url, title}
    });
  }

  swipe(type) {
    console.log(type);
    switch (type) {
      case 'swipeleft': {
        const index = this.currentEmployee - 1;
        this.currentEmployee = index >= 0 ? index : this.employes.length - 1;
        break;
      }
      case 'swiperight': {
        const index = this.currentEmployee + 1;
        this.currentEmployee = index <= this.employes.length - 1 ? index : 0;
        break;
      }
    }
  }

  clickOnEmployee() {
    this.openyouTubeMovie(this.employes[this.currentEmployee].videoUrl, this.employes[this.currentEmployee].name);
  }



}
