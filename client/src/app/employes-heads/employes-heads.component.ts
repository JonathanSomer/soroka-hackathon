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
    { name: 'קלאודיו אלתר', title: 'אח', imageUrl: './assets/claudio.png', videoUrl: 'https://youtu.be/V-7pTTNvUs8'},
    { name: 'רויטל גוטרמן', title: 'אחות', imageUrl: './assets/revital.png', videoUrl: 'https://youtu.be/UQ2wIJj__ls'},
    { name: 'מנור שפריץ', title: 'רופא', imageUrl: './assets/manor.png', videoUrl: 'https://youtu.be/V-7pTTNvUs8'}
  ];

  openyouTubeMovie(url: string, title: string) {
    const dialogRef = this.dialog.open(YouTuveIframeComponent, {
      width: '400px',
      data: {url: url, title}
    });
  }

  swipe(type) {
    switch (type) {
      case 'swipeleft':
        this.currentEmployee--;
        break;
      case 'swiperight':
        this.currentEmployee++;
        break;
    }
  }

  clickOnEmployee() {
    // this.openyouTubeMovie(employee.videoUrl, employee.name);
  }



}
