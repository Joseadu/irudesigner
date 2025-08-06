import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class AboutComponent implements AfterViewInit, OnInit {
  tabs = [
    { key: 'sobre-mi', label: 'SOBRE MI' },
    { key: 'que-hago', label: 'QUÉ HAGO' },
    { key: 'como-lo-hago', label: 'CÓMO LO HAGO' },
    { key: 'clientes', label: 'CLIENTES' }
  ];

  selectedTab = 'sobre-mi';

  @ViewChildren('tabElement') tabElements!: QueryList<ElementRef>;
  @ViewChild('nav') navElement!: ElementRef;

  underlineStyle = {
    width: '0px',
    left: '0px'
  };

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.setTheme('#D7ECED', '#114653');
    document.body.style.background = '#D7ECED';
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
    const activeTab = this.tabElements.find(el => el.nativeElement.dataset.key === this.selectedTab);

    if (activeTab) {
      const el = activeTab.nativeElement as HTMLElement;
      this.underlineStyle = {
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`
      };
    }
  }
}