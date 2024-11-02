import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {AviationMeteoService} from "../../services/aviation-meteo.service";
import {map} from "rxjs";
import {loadAndRenderPDF} from "../../shared/utils";

@Component({
  selector: 'app-wintem',
  standalone: true,
  imports: [],
  templateUrl: './wintem.component.html',
  styleUrl: './wintem.component.scss'
})
export class WintemComponent implements OnInit {
  private readonly service = inject(AviationMeteoService)

  @ViewChild('pdfCanvas', { static: true })
  pdfCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    let currentDate = new Date()
    currentDate = new Date(currentDate.getTime() + currentDate.getTimezoneOffset())

    this.service.getAvailableWintem().pipe(
      map(charts => {
        if(charts.length == 0){
          return null
        }
        const currentDateTime = currentDate.getTime()
        const sortedChartsByClosestToCurrentDate = charts.sort((first, second) => (first.dateRun.getTime() - currentDateTime) - (second.dateRun.getTime() - currentDateTime))
        return sortedChartsByClosestToCurrentDate[0]
      })
    ).subscribe(nextValue => {
      if(nextValue) {
        return loadAndRenderPDF(this.pdfCanvas.nativeElement, nextValue!.imageLink, 140, 110, 210, 105)
      }
      return null;
    })
  }
}
