import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.scss'
})
export class RadarComponent {

  readonly currentDate = new Date()

}
