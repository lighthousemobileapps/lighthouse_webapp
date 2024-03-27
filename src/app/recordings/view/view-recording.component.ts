import { Input, OnDestroy, inject } from '@angular/core';
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

  router = inject(Router);
  // ref: StorageReference | undefined;
  recordingsService = inject(RecordingsService);
  url: string = '';

  ngOnInit(): void {
    const currentState = this.router.lastSuccessfulNavigation?.extras.state;
    console.log(currentState?.extras);
    // const ref = currentState[data];

  }



  async getDownloadUrl(){
      this.url = await this.recordingsService.getDownloadUrl(this.url);

  }
}
