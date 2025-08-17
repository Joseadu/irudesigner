import { Directive, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { Subscription, filter } from 'rxjs';

@Directive()
export abstract class DetailComponentBase implements OnInit, OnDestroy {
  backgroundColor = '';
  textColor = '';

  private themeService = inject(ThemeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private sub!: Subscription;

  ngOnInit(): void {
    this.updateColors();
    this.sub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateColors());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

private updateColors() {
  let activeRoute = this.route;
  while (activeRoute.firstChild) {
    activeRoute = activeRoute.firstChild;
  }
  // Usa la URL real
  const url = this.router.url;
  console.log('URL actual:', url);
  const colors = this.themeService.getColorsForRoute(url);

  if (colors) {
    this.backgroundColor = colors.bg;
    this.textColor = colors.text;
    this.themeService.setTheme(colors.bg, colors.text);
  } else {
    this.backgroundColor = '#ffdddd';
    this.textColor = '#000';
  }
}
}