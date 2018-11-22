import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {YouTuveIframeComponent} from './you-tuve-iframe/you-tuve-iframe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  srcObject: null;
  @ViewChild('video') video;

  constructor(public dialog: MatDialog) {

  }

  openyouTubeMovie(url: string, title: string) {
    const dialogRef = this.dialog.open(YouTuveIframeComponent, {
      width: '400px',
      data: {url: url, title}
    });
  }

  ngOnInit(): void {
    this.requestCameraAccess();
  }

  sendCurrentFrame() {
    const videoWidth = this.video.nativeElement.videoWidth;
    const timesBig = videoWidth / 256;

    const canvas = document.createElement('canvas');
    const canvasHeight = videoWidth / timesBig;
    const canvasWidth = this.video.nativeElement.videoHeight / timesBig;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    debugger;
    canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0, canvasWidth, canvasHeight);
    canvas.toBlob((blob) => {
      const f = new File([blob], 'image.jpeg', {type:"image/jpeg");

      const formData = new FormData();
      formData.append('image', f);

      fetch('https://soroka-hackathon.herokuapp.com/classify', { method: 'POST', body: formData})
        .then(r => r.json())
        .then((data) => {
           this.openyouTubeMovie( data.url, `${data.name} - ${data.description}`);
        });
     }, 'image/jpeg');
  }

  requestCameraAccess() {
    (navigator.mediaDevices.getUserMedia as any)({ video: true, facingMode: false})
      .then((stream)  => {

        this.video.nativeElement.srcObject = stream;
      })
      .catch((err)  => {
        console.error(err);
        /* handle the error */
      });
  }

  onEmployeeClick(employee) {
    this.openyouTubeMovie(employee.videoUrl, employee.name);
  }

}
