import { inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RecordingsService } from '../services/recordings.service';





@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  providers: [RecordingsService]
})
export class LiveComponent implements OnInit {

  recordingsService = inject(RecordingsService)
  isLoading: boolean = false;
  rtmpUrl: string = "";


  async ngOnInit(): Promise<void> {
    this.rtmpUrl = await this.recordingsService.getLiveUrl()
  }



}
