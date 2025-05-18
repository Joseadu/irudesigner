import { Directive, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { TransitionService } from '../services/transition.service';

@Directive()
export abstract class DetailComponentBase implements OnInit {
  backgroundColor = '';
  textColor = '';
  shrink = false;

  private themeService = inject(ThemeService);
  private route = inject(ActivatedRoute);
  private transitionService = inject(TransitionService);

  ngOnInit(): void {
    const routePath = this.route.snapshot.routeConfig?.path || '';
    const colors = this.themeService.getColorsForRoute(routePath);

    if (colors) {
      this.backgroundColor = colors.bg;
      this.textColor = colors.text;
    }

    // Deja el body en blanco siempre en los detalles
    this.themeService.resetBodyStyles();

    // Escucha cuando termina el overlay y activa la animación
    this.transitionService.isLoading$.subscribe(isLoading => {
      if (!isLoading) {
        this.shrink = true;
      }
    });
  }
}