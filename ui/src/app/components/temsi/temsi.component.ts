import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {AviationMeteoService} from "../../services/aviation-meteo.service";
import {loadAndRenderPDF} from "../../shared/utils";
import {map} from "rxjs";

@Component({
  selector: 'app-temsi',
  standalone: true,
  imports: [],
  templateUrl: './temsi.component.html',
  styleUrl: './temsi.component.scss'
})
export class TemsiComponent implements OnInit {

  private readonly service = inject(AviationMeteoService)

  @ViewChild('pdfCanvas', { static: true })
  pdfCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    let currentDate = new Date()
    currentDate = new Date(currentDate.getTime() + currentDate.getTimezoneOffset())

    this.service.getAvailableTemsi().pipe(
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
        return loadAndRenderPDF(this.pdfCanvas.nativeElement, nextValue!.imageLink, 40, 50, 50, 40)
      }
      return null;
    })
  }
}
