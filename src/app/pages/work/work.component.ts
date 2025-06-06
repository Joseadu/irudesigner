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

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements AfterViewInit, OnDestroy {
  @ViewChild('wrapper') wrapperRef!: ElementRef;

  workBasic = [
    /* ... */
  ];

  constructor(private themeService: ThemeService, private el: ElementRef, private transitionService: TransitionService) {}

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
        this.transitionService.setBackground(color.bg); // solo cuando haces click
      });
    }
  });
}


  ngOnDestroy(): void {
    this.resetBg(); // limpiar wrapper al salir
  }

  changeBg(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const bg = target.getAttribute('data-primary-color');
    const text = target.getAttribute('data-text-color');

    if (bg) {
      document.body.style.transition =
        'background-color 0.6s ease, color 0.3s ease';
      document.body.style.backgroundColor = bg;
      document.body.style.color = text || '';
      this.themeService.setTheme(bg, text || '');
    }
  }

  resetBg(): void {
    this.themeService.resetBodyStyles();
  }
}
