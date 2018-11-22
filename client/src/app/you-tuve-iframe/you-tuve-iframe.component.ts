import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-you-tuve-iframe',
  templateUrl: './you-tuve-iframe.component.html',
  styleUrls: ['./you-tuve-iframe.component.scss']
})
export class YouTuveIframeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<YouTuveIframeComponent>, private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  iframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url) ;
  }

  ngOnInit() {
  }

}
