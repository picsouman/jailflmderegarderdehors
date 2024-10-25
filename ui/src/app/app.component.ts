import {Component, OnInit} from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Routes
} from '@angular/router';
import {DISPLAYED_TIME} from "./shared/keys";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  routes: Routes
  displayedRouteIndex: number = 0

  constructor(
    private readonly router: Router
  ) {
    this.routes = this.router.config.filter(x => !!x.title && !x.redirectTo)
  }

  ngOnInit(): void {
    this.initialiseNextSwitch()
  }

  initialiseNextSwitch() {
    const delayInSecond = this.routes[this.displayedRouteIndex].data![DISPLAYED_TIME] ?? 5
    this.displayedRouteIndex = (this.displayedRouteIndex + 1) % this.routes.length
    setTimeout(() => {
      this.router.navigateByUrl(this.routes[this.displayedRouteIndex].path ?? '/')
      this.initialiseNextSwitch()
    }, delayInSecond * 1000)
  }
}

