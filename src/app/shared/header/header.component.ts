import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LogoComponent } from '../../core/base/logo.component';
import { ThemeService } from '../../core/services/theme.service';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LogoComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  private sub = new Subscription();

  textColor = '#114653';
  bgColor = '#D7ECED';

  constructor (
    private router: Router 
  ) {}

  ngOnInit() {
    // Suscripción a los colores actuales
    this.sub.add(this.themeService.getTextColor$().subscribe(c => this.textColor = c));
    this.sub.add(this.themeService.getBackgroundColor$().subscribe(c => this.bgColor = c));

    // Suscripción a cambios de ruta
    this.sub.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const route = event.urlAfterRedirects;
          const colors = this.themeService.getColorsForRoute(route);

          if (colors) {
            // Si la ruta es un proyecto, aplica sus colores
            this.themeService.setTheme(colors.bg, colors.text);
          } else {
            // Si no es una ruta de proyecto, resetea al color por defecto
            this.themeService.resetHoverColors(); 
          }
        })
    );
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}