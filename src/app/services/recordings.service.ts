import { inject } from '@angular/core';
// import { Firestore, } from '@angular/fire/firestore';
import { Storage, getDownloadURL, listAll, ref } from '@angular/fire/storage';
import { AuthService } from './auth.service';
// import { ref } from 'firebase/storage';
import { RecordingDirectory } from '../models/recordings/recording-directory';
import { Recording } from '../models/recordings/recording';



export class RecordingsService {

  // firestore: Firestore = inject(Firestore);
  storage: Storage = inject(Storage);
  authService: AuthService = inject(AuthService);
  uid = this.authService.uid;
  // user$ = authState(this.auth).pipe(filter(user  =>  user !== null), map(user  =>  user!));

  async loadRecordings(){
    // const uid = this.authService.uid;
    if(this.uid){
      const storageRef = ref(this.storage, (`users/${this.uid}`));
      const dirs: RecordingDirectory[] = [];
      const dirRefs = (await listAll(storageRef)).prefixes;
      dirRefs.forEach(async (dirRef) => {
        const dirItems = (await listAll(dirRef)).items;
        const recordings: Recording[] = dirItems.map<Recording>((dirItemRef) => ({name: dirItemRef.name, date: new Date((dirItemRef.name.match(/\d{4}-\d{2}-\d{2}/) ?? [''])[0]), ref: dirItemRef, cloudPath: '', localPath: ''}));
        const dir: RecordingDirectory = {title: dirRef.name, recordings: recordings };
        dirs.push(dir);
      });
      return dirs;
    }
    return [];
  }

  async getDownloadUrl(fileName: string | undefined): Promise<string>{
    if(fileName){
      const dates = fileName.match(/\d{4}-\d{2}-\d{2}/);
      if(dates){
        const date = dates[0];
        console.log(date);
        const path = `users/${this.uid}/${date}/${fileName}`;
        const recordingRef = ref(this.storage, (`${path}`));
        if(recordingRef){
          return getDownloadURL(recordingRef);
        }
        return "";
      }
      return "";
    }
    return "";
  }
}
