import { StorageReference } from '@angular/fire/storage';

export interface Recording {
  name: string;
  date: Date;
  ref: StorageReference,
  cloudPath: string;
  localPath: string;
}
