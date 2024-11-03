import { Routes } from '@angular/router';
import {MetarTafComponent} from "./components/metar-taf/metar-taf.component";
import {RadarComponent} from "./components/radar/radar.component";
import {TemsiComponent} from "./components/temsi/temsi.component";
import {WindyComponent} from "./components/windy/windy.component";
import {WintemComponent} from "./components/wintem/wintem.component";
import {SchedulerComponent} from "./components/scheduler/scheduler.component";
import {ViewportBackground} from "./shared/keys";

export const routes: Routes = [
  {
    path: 'metar-taf',
    component: MetarTafComponent,
    title: 'METAR / TAF',
    data: {
      displayedTime : 10,
      animation: 'slide',
      background: 'bg-final'
    }
  },
  {
    path: 'radar',
    component: RadarComponent,
    title: 'Radar',
    data: {
      displayedTime : 5,
      animation: 'slide',
      background: 'bg-clouds'
    }
  },
  {
    path: 'temsi',
    component: TemsiComponent,
    title: 'TEMSI',
    data: {
      displayedTime : 5,
      animation: 'slide',
      background: 'bg-clouds'
    }
  },
  {
    path: 'wintem',
    component: WintemComponent,
    title: 'Wintem',
    data: {
      displayedTime : 7,
      animation: 'slide',
      background: 'bg-clouds'
    }
  },
  {
    path: 'windy',
    component: WindyComponent,
    title: 'Windy',
    data: {
      displayedTime : 10,
      animation: 'slide',
      background: 'bg-clouds'
    }
  },
  {
    path: 'scheduler',
    component: SchedulerComponent,
    title: 'Planning',
    data: {
      displayedTime : 10,
      animation: 'slide',
      background: 'bg-final'
    }
  },
  {
    path: '**',
    redirectTo: 'metar-taf',
  }
];
