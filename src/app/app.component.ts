import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter, pairwise, startWith } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { TransitionService } from './core/services/transition.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private themeService: ThemeService,
    public transitionService: TransitionService // 👈 Añadido
  ) {}

  ngOnInit(): void {
    // ✅ GESTIÓN DEL BODY (la que ya tienes)
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        startWith(null),
        pairwise()
      )
      .subscribe(([prev, curr]: any) => {
        const from = prev?.urlAfterRedirects || '';
        const to = curr?.urlAfterRedirects || '';

        const saliendoDeWork = from === '/' || from.includes('/work');
        const entrandoEnDetalle = to !== '/' && !to.includes('/work');

        if (saliendoDeWork && entrandoEnDetalle) {
          this.themeService.resetBodyStyles();
        }
      });

    // ✅ GESTIÓN DE LA ANIMACIÓN DE CARGA (nueva)
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => {
        this.transitionService.start();
      });

    this.router.events
      .pipe(
        filter(e =>
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
        )
      )
      .subscribe(() => {
        this.transitionService.stop(2000); // al menos 2s de overlay
      });
  }
}