import { Component, OnInit, inject } from "@angular/core";
import { RecordingsService } from "../../services/recordings.service";
import { RecordingDirectory } from "../../models/recordings/recording-directory";
import { NavigationExtras, Router } from "@angular/router";
import { StorageReference } from "firebase/storage";


@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss'],
  providers: [RecordingsService]
})
export class RecordingsComponent implements OnInit{

  router = inject(Router);
  recordingsService = inject(RecordingsService);
  directories: RecordingDirectory[] = [];
  panelOpenState = false;


  ngOnInit(): void {
    this.loadData();
  }

  async loadData(){
   this.directories = await this.recordingsService.loadRecordings();

  }

  viewRecording(ref: StorageReference | undefined){
    const navigationExtras: NavigationExtras = {
      state: {
        data: {reference: ref},
      }
    };
    this.router.navigate(['view-recording'], navigationExtras);
  }

  // folders = [
  //   {
  //     name: '2024-03-26',
  //     recordings: [
  //       {
  //         name: '2024-03-26-15-56-56.mp4',
  //         date: '2024-03-26-15-56-56',
  //       },
  //       {
  //         name: '2024-03-26-02-52-45.mp4',
  //         date: '2024-03-26-02-52-45',
  //       },
  //   ]
  //   },
  //   {
  //     name: '2024-03-25',
  //     recordings: [
  //       {
  //         name: '2024-03-25-17-32-02.mp4',
  //         date: '2024-03-25-17-32-02',
  //       },
  //       {
  //         name: '2024-03-25-11-56-32.mp4',
  //         date: '2024-03-25-11-56-32',
  //       },
  //     ],
  //   },
  //   {
  //     name: '2024-03-24',
  //     recordings: [
  //       {
  //         name: '2024-03-24-05-09-32.mp4',
  //         date: '2024-03-24-05-09-32',
  //       },
  //       {
  //         name: '2024-03-24-34-57-32.mp4',
  //         date: '2024-03-24-55-28-32',
  //       },
  //   ]
  //   },
  // ];

}
