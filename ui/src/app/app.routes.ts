import { Routes } from '@angular/router';
import {MetarTafComponent} from "./components/metar-taf/metar-taf.component";
import {RadarComponent} from "./components/radar/radar.component";
import {TemsiComponent} from "./components/temsi/temsi.component";
import {WindyComponent} from "./components/windy/windy.component";
import {WintemComponent} from "./components/wintem/wintem.component";
import {slide} from "./core/animations";
import {SchedulerComponent} from "./components/scheduler/scheduler.component";

export const routes: Routes = [
  {
    path: 'metar-taf',
    component: MetarTafComponent,
    title: 'METAR / TAF',
    data: {
      DISPLAYED_TIME : 10,
      animation: 'slide'
    }
  },
  {
    path: 'radar',
    component: RadarComponent,
    title: 'Radar',
    data: {
      DISPLAYED_TIME : 5,
      animation: 'slide'
    }
  },
  {
    path: 'temsi',
    component: TemsiComponent,
    title: 'TEMSI',
    data: {
      DISPLAYED_TIME : 5,
      animation: 'slide'
    }
  },
  {
    path: 'wintem',
    component: WintemComponent,
    title: 'Wintem',
    data: {
      DISPLAYED_TIME : 7,
      animation: 'slide'
    }
  },
  {
    path: 'windy',
    component: WindyComponent,
    title: 'Windy',
    data: {
      DISPLAYED_TIME : 10,
      animation: 'slide'
    }
  },
  {
    path: 'scheduler',
    component: SchedulerComponent,
    title: 'Planning',
    data: {
      DISPLAYED_TIME : 10,
      animation: 'slide'
    }
  },
  {
    path: '**',
    redirectTo: 'metar-taf',
  }
];
