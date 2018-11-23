import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-you-tuve-iframe',
  templateUrl: './you-tuve-iframe.component.html',
  styleUrls: ['./you-tuve-iframe.component.scss']
})
export class YouTuveIframeComponent implements OnInit {

  @ViewChild('video') video;

  constructor(
    public dialogRef: MatDialogRef<YouTuveIframeComponent>, private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  iframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url) ;
  }

  close() {
    this.dialogRef.close();
  }

  startVideo() {
    this.video.nativeElement.play();
  }

  ngOnInit() {
    this.startVideo();
  }

}
