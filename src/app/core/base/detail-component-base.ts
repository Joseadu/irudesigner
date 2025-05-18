import { Directive, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Directive()
export abstract class DetailComponentBase implements OnInit {
  backgroundColor = '';
  textColor = '';

  private themeService = inject(ThemeService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const routePath = this.route.snapshot.routeConfig?.path || '';
    const colors = this.themeService.getColorsForRoute(routePath);

    if (colors) {
      this.backgroundColor = colors.bg;
      this.textColor = colors.text;
    }

    this.themeService.resetBodyStyles();
  }
}
