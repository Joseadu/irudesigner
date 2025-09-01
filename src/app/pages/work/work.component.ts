import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { work_basic } from '../../core/models/work.interface';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { TransitionService } from '../../core/services/transition.service';
import { LogoComponent } from '../../core/base/logo.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, CommonModule, BadgeComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements AfterViewInit, OnDestroy {

  constructor(
    private themeService: ThemeService,
    private el: ElementRef,
    private transitionService: TransitionService
  ) {}

  ngAfterViewInit() {
    const links = this.el.nativeElement.querySelectorAll('.group-link');
    links.forEach((link: HTMLElement) => {
      const route = link.getAttribute('routerLink');
      if (!route) return;

      const color = this.themeService.getColorsForRoute(route);
      if (color) {
        link.setAttribute('data-primary-color', color.bg);
        link.setAttribute('data-text-color', color.text);

        link.addEventListener('click', () => {
          this.transitionService.setBackground(color.bg);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.resetBg();
  }

  changeBg(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const bg = target.getAttribute('data-primary-color');
    const text = target.getAttribute('data-text-color');

    if (bg && text) {
      document.body.style.transition =
        'background-color 0.6s ease, color 0.3s ease';
      document.body.style.backgroundColor = bg;
      document.body.style.color = text;
      this.themeService.setHoverColors(bg, text);
    }
  }

  resetBg(): void {
    this.themeService.resetHoverColors();
    this.themeService.resetBodyStyles();
  }
}
