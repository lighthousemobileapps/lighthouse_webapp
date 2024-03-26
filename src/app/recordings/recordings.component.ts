import { Component } from "@angular/core";


@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss'],
})
export class RecordingsComponent{

  panelOpenState = false;

  folders = [
    {
      name: '2024-03-26',
      recordings: [
        {
          name: '2024-03-26-15-56-56.mp4',
          date: '2024-03-26-15-56-56',
        },
        {
          name: '2024-03-26-02-52-45.mp4',
          date: '2024-03-26-02-52-45',
        },
    ]
    },
    {
      name: '2024-03-25',
      recordings: {
        name: '2024-03-26-11-56-32.mp4',
        date: '2024-03-26-11-56-32',
      },
    },
    {
      name: '2024-03-24',
      recordings: {
        name: '2024-03-26-05-09-32.mp4',
        date: '2024-03-26-05-09-32',
      },
    },
  ];

}
