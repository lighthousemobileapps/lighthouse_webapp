import { OnDestroy, inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RecordingsService } from '../services/recordings.service';





@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  providers: [RecordingsService]
})
export class LiveComponent implements OnInit, OnDestroy {

  recordingsService = inject(RecordingsService)
  isLoading: boolean = false;
  rtmpUrl: string = "";




  constructor() { }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  async ngOnInit(): Promise<void> {
    this.rtmpUrl = await this.recordingsService.getLiveUrl()
  }



}
