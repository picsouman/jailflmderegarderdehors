import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {AviationMeteoChartDetail} from "../models/dto/aviationMeteoChartDetail";

@Injectable({
  providedIn: 'root'
})
export class AviationMeteoService {

  private readonly http = inject(HttpClient)

  getAvailableTemsi(): Observable<AviationMeteoChartDetail[]> {
    return this.http
      .get('/aviation-meteo/FR/aviation/serveur_donnees.jsp?ID=UACAVCPXNE&TYPE_DONNEES=CARTES&BASE_COMPLETE=non&VUE_CARTE=AERO_TEMSI&ZONE=AERO_FRANCE', {responseType: 'text'})
      .pipe(
        map((xmlData: string) => this.parseXML(xmlData)),
        catchError(error => {
          console.error('Erreur lors de la récupération des données:', error);
          return of([]);
        })
      )
  }

  getAvailableWintem(): Observable<AviationMeteoChartDetail[]> {
    return this.http
      .get('/aviation-meteo/FR/aviation/serveur_donnees.jsp?ID=UACAVCPXNE&TYPE_DONNEES=CARTES&BASE_COMPLETE=non&VUE_CARTE=AERO_WINTEM&ZONE=AERO_FRANCE', {responseType: 'text'})
      .pipe(
        map((xmlData: string) => this.parseXML(xmlData)),
        catchError(error => {
          console.error('Erreur lors de la récupération des données:', error);
          return of([]);
        })
      )
  }

  private parseXML(xmlString: string): AviationMeteoChartDetail[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const charts: AviationMeteoChartDetail[] = [];

    const chartsElement = xmlDoc.getElementsByTagName('carte');

    for (let i = 0; i < chartsElement.length; i++) {
      const carteElement = chartsElement[i];
      const chart: AviationMeteoChartDetail = {
        type: this.getTextContent(carteElement, 'type'),
        flightLevel: this.getTextContent(carteElement, 'niveau'),
        chartZone: this.getTextContent(carteElement, 'zone_carte'),
        dateRun: this.parseStringToDateTime(this.getTextContent(carteElement, 'date_run')),
        dateEnd: this.parseStringToDateTime(this.getTextContent(carteElement, 'date_echeance')),
        imageLink: '/aviation-meteo' + this.getTextContent(carteElement, 'lien').replace(/^.*CDATA\[|\]\]>$/g, '') // Extraction du lien dans la section CDATA
      };
      charts.push(chart);
    }

    return charts;
  }

  private getTextContent(element: Element, tagName: string): string {
    const tag = element.getElementsByTagName(tagName)[0];
    return tag ? tag.textContent || '' : '';
  }

  private parseStringToDateTime(dateStr: string): Date {
    const [day, month, year, time] = dateStr.split(" ");
    const [hour, minute] = time.split(":");

    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
}
