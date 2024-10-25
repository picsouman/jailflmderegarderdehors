import { Routes } from '@angular/router';
import {MetarTafComponent} from "./components/metar-taf/metar-taf.component";
import {RadarComponent} from "./components/radar/radar.component";
import {TemsiComponent} from "./components/temsi/temsi.component";
import {WindyComponent} from "./components/windy/windy.component";
import {WintemComponent} from "./components/wintem/wintem.component";

export const routes: Routes = [
  {
    path: 'metar-taf',
    component: MetarTafComponent,
    title: 'METAR / TAF',
    data: {
      DISPLAYED_TIME : 5
    }
  },
  {
    path: 'radar',
    component: RadarComponent,
    title: 'Radar',
    data: {
      DISPLAYED_TIME : 5
    }
  },
  {
    path: 'temsi',
    component: TemsiComponent,
    title: 'TEMSI',
    data: {
      DISPLAYED_TIME : 5
    }
  },
  {
    path: 'windy',
    component: WindyComponent,
    title: 'Windy',
    data: {
      DISPLAYED_TIME : 5
    }
  },
  {
    path: 'wintem',
    component: WintemComponent,
    title: 'Wintem',
    data: {
      DISPLAYED_TIME : 5
    }
  },
  {
    path: '**',
    redirectTo: 'metar-taf',
  }
];
