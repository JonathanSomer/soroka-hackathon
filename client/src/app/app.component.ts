import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  srcObject: null;
  @ViewChild('video') video;

  ngOnInit(): void {
    this.requestCameraAccess();
  }

  requestCameraAccess() {
    navigator.mediaDevices.getUserMedia({ video: true})
      .then((stream)  => {

        this.video.nativeElement.srcObject = stream;
        console.log(this.video.nativeElement.srcObject);
      })
      .catch((err)  => {
        console.error(err);
        /* handle the error */
      });
  }
}
