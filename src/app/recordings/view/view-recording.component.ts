import { ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { StorageReference } from 'firebase/storage';
import { url } from 'inspector';
import { RecordingsService } from 'src/app/services/recordings.service';


@Component({
  selector: 'app-view-recording',
  templateUrl: './view-recording.component.html',
  styleUrls: ['./view-recording.component.scss'],
  providers: [RecordingsService]
})
export class ViewRecordingComponent implements OnInit{


  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;

  startVideo() {
    console.log(this.videoURL);
    this.videoPlayer.nativeElement.play();
  }


  router = inject(Router);
  // ref: StorageReference | undefined;
  recordingsService = inject(RecordingsService);
  videoURL: string = '';
  videoName: string = '';

  // constructor(){
  //   const currentState = this.router.lastSuccessfulNavigation?.extras.state;
  //   if(currentState){
  //     console.log(currentState['reference']);
  //     this.videoName = currentState['reference']
  //     this.getDownloadUrl();
  //   }
  // }


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
