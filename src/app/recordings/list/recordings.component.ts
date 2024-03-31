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
   this.directories.sort((a,b) => {
    const date1 = Date.parse(a.title.replace('-','/'));
    console.log(date1);
    const date2 = Date.parse(b.title.replace('-','/'));
    return (date1 < date2) ? 1 : -1;
   })

  }

  viewRecording(ref: StorageReference | undefined){
    const navigationExtras: NavigationExtras = {
      state: {
        data: {reference: ref},
      }
    };
    this.router.navigate(['view-recording'], navigationExtras);
  }
}
