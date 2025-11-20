import { Component, inject, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { LogoComponent } from '../../core/base/logo.component';
import { ThemeService } from '../../core/services/theme.service';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LogoComponent, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  private themeService = inject(ThemeService);
  private sub = new Subscription();

  isMenuOpen = false;
  isLangOpen = false;
  currentLang = 'es';

  textColor = '#114653';
  bgColor = '#D7ECED';

  constructor (
    private router: Router, private translate: TranslateService
  ) {}

  ngOnInit() {
    // Establecer el idioma actual desde localStorage o por defecto 'es'
    const savedLang = localStorage.getItem('lang') || 'es';
    this.currentLang = savedLang;
    this.translate.use(savedLang);

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

    this.sub.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.isMenuOpen = false;
        })
    );
  }

  ngAfterViewInit() {
    // Listener para cerrar el dropdown cuando se hace clic fuera
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.custom-select')) {
        this.isLangOpen = false;
      }
    });
  }

  toggleLangDropdown() {
    this.isLangOpen = !this.isLangOpen;
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.isLangOpen = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}