import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../../core/services/theme.service';
import { RouterLink } from '@angular/router';
import { ServicesItemsService } from './services/services-items.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(10px)' })
        ),
      ]),
    ]),
  ],
})
export class AboutComponent implements AfterViewInit, OnInit, OnDestroy {
  tabs = [
    { key: 'sobre-mi', label: 'SOBRE MI' },
    { key: 'que-hago', label: 'QUÉ HAGO' },
    { key: 'como-lo-hago', label: 'CÓMO LO HAGO' },
    { key: 'clientes', label: 'CLIENTES' },
  ];

  open1 = false;
  selectedTab = 'sobre-mi';
  qhItems: any[] = [];
  @ViewChild('slider', { static: false }) slider!: ElementRef<HTMLDivElement>;
  private step = 520 + 80; // ancho tarjeta + gap (ajusta si cambias CSS)

  @ViewChildren('tabElement') tabElements!: QueryList<ElementRef>;
  @ViewChild('nav') navElement!: ElementRef;

  underlineStyle = {
    width: '0px',
    left: '0px',
  };

  constructor(private themeService: ThemeService, private serviesItems: ServicesItemsService) {}

  ngOnInit() {
    this.themeService.setTheme('#D7ECED', '#114653');
    document.body.style.background = '#D7ECED';
    // Cargar los items de servicios
    this.qhItems = this.serviesItems.qhItems;
  }

  ngOnDestroy(): void {
    this.themeService.setTheme('#F1F7F8', '#114653');
    document.body.style.background = '#F1F7F8';
  }

  ngAfterViewInit() {
    // Mover la línea al tab activo inicial
    setTimeout(() => this.updateUnderline(), 0);
  }

  selectTab(key: string) {
    this.selectedTab = key;
    this.updateUnderline();
  }

  updateUnderline() {
    const activeTab = this.tabElements.find(
      (el) => el.nativeElement.dataset.key === this.selectedTab
    );

    if (activeTab) {
      const el = activeTab.nativeElement as HTMLElement;
      this.underlineStyle = {
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`,
      };
    }
  }

  toggle(i: number) {
    this.qhItems[i].open = !this.qhItems[i].open;
  }

  next() {
    this.slider?.nativeElement.scrollBy({ left: this.step, behavior: 'smooth' });
  }

  prev() {
    this.slider?.nativeElement.scrollBy({ left: -this.step, behavior: 'smooth' });
  }
}