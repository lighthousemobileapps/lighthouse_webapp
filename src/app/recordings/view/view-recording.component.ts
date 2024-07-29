import { ElementRef, ViewChild, inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RecordingsService } from 'src/app/services/recordings.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout/flex';



@Component({
    selector: 'app-view-recording',
    templateUrl: './view-recording.component.html',
    styleUrls: ['./view-recording.component.scss'],
    providers: [RecordingsService],
    standalone: true,
    imports: [FlexModule, MatButtonModule, MatIconModule]
})
export class ViewRecordingComponent implements OnInit{

  constructor(private _location: Location){}

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;

  startVideo() {
    console.log(this.videoURL);
    this.videoPlayer.nativeElement.play();
  }

  returnToRecordings(){
    this._location.back();
  }




  router = inject(Router);
  recordingsService = inject(RecordingsService);
  videoURL: string = '';
  videoName: string = '';




  ngOnInit(): void {
    const currentState = this.router.lastSuccessfulNavigation?.extras.state;
    if(currentState){
      console.log(currentState['reference']);
      this.videoName = currentState['reference']
      this.getDownloadUrl();
    }
  }


  async getDownloadUrl(){
      this.videoURL = await this.recordingsService.getDownloadUrl(this.videoName);
      console.log(this.videoURL);
  }


}
