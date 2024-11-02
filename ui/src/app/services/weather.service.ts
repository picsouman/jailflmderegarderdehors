import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private readonly http = inject(HttpClient)

  getMetar(airportIcao: string): Observable<string> {
    return this.http.get(`/weather/api/data/metar?ids=${airportIcao}`, { responseType: 'text' });
  }

  getTaf(airportIcao: string): Observable<string> {
    return this.http.get(`/weather/api/data/taf?ids=${airportIcao}`, { responseType: 'text' })
  }
}
