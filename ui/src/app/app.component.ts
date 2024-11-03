import {Component, OnInit, signal} from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Routes,
} from '@angular/router';
import {DISPLAYED_TIME, ViewportBackground} from "./shared/keys";
import {slide} from "./core/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slide
  ]
})
export class AppComponent implements OnInit {
  readonly routes: Routes
  viewportBgClass = signal<ViewportBackground>("bg-final")

  private displayedRouteIndex: number = 0

  constructor(
    private readonly router: Router,
  ) {
    this.routes = this.router.config.filter(x => !!x.title && !x.redirectTo)
  }

  ngOnInit(): void {
    this.initializeNextSwitch()
  }

  initializeNextSwitch() {
    const delayInSecond = this.routes[this.displayedRouteIndex].data!['displayedTime'] ?? 5
    this.displayedRouteIndex = (this.displayedRouteIndex + 1) % this.routes.length

    setTimeout(() => {
      this.router.navigateByUrl(this.routes[this.displayedRouteIndex].path ?? '/')
      const backgroundClass: ViewportBackground = this.routes[this.displayedRouteIndex].data!['background'] as ViewportBackground ?? 'bg-final'
      this.viewportBgClass.set(backgroundClass)
      this.initializeNextSwitch()
    }, delayInSecond * 1000)
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

