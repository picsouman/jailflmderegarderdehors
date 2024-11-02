import {Component, inject, signal} from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-metar-taf',
  standalone: true,
  imports: [],
  templateUrl: './metar-taf.component.html',
  styleUrl: './metar-taf.component.scss',
})
export class MetarTafComponent {

  private readonly weatherService = inject(WeatherService);

  bronMetar = signal('')
  bronTaf = signal('')
  chalonMetar = signal('')
  saintYanMetar = signal('')
  saintYanTaf = signal('')

  ngOnInit() {
    this.weatherService.getMetar('LFLY').subscribe(
      value => this.bronMetar.set(value)
    )

    this.weatherService.getTaf('LFLY').subscribe(
      value => this.bronTaf.set(value)
    )

    this.weatherService.getMetar('LFLH').subscribe(
      value => this.chalonMetar.set(value)
    )

    this.weatherService.getMetar('LFLN').subscribe(
      value => this.saintYanMetar.set(value)
    )

    this.weatherService.getTaf('LFLN').subscribe(
      value => this.saintYanTaf.set(value)
    )
  }

}
