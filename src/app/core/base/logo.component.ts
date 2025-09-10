import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styles: [`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .main-logo {
      cursor: pointer;
    }
    .main-logo:focus {
      border: none;
      outline: none;
    }
  `],
  template: `
    <svg
      routerLink="/"
      class="main-logo"
      xmlns="http://www.w3.org/2000/svg"
      height="36"
      viewBox="0 0 400 204.9"
    >
      <path *ngFor="let d of paths" [attr.d]="d" [attr.fill]="textColor" />
    </svg>
  `,
})
export class LogoComponent implements OnDestroy {
  private themeService = inject(ThemeService);
  private sub = new Subscription();

  textColor = '#114653';
  paths: string[] = [
    `M35.1,81.9l16.5-22.9c3.5-4,8.6-6.2,13.9-6.2,9,0,15.8,5.9,15.8,16.5,0,9-6.4,12.7-20.7,22-2.9,1.9-7.3,3.9-5.8,8.4.9,2.7,4.2,3.7,9.5,2,15.6-4.9,24.2,6.5,10.3,23.7l-33.6,38.5c-2.8,3.2-3.7,4.6-3.7,6.4,0,3.5,3,6.5,6.3,5.1l21.2-9.2c7.4-3.2,16.1-2.1,17.1,8.1,1.2,11.8-12.9,17.8-26.5,17.8-20.1,0-29.5-13.4-24.7-31l9.9-52.2c.3-1,.5-2.1.5-3.2,0-4.1-2.8-5.5-8.5-5.5h-.1c-4.4,0-6-2.5-6-5.6.1-2.9,4.2-7.6,8.6-12.7Z`,
    `M210,192.1c-7.1,0-16.4-3.4-26.1-15.2l-43.6-52.8c-3.9-4.9-5.6-8.6-5.6-11.1.2-4.6,3.7-5.8,10.2-4.9l53.6,6.8c18.9,2.5,25.1-6,25.1-15.2,0-8.7-6.7-15.3-19.6-15.3h-55.2c-18.2,0-28,10.8-28,23.3.1,3.5.8,7,2.2,10.2l18,42.3c6.9,16.2,4.8,31.8-15.3,31.8-10.9,0-23.1-8.5-23.1-33.7,0-60,25.2-105.7,78.9-105.7,43.6,0,54,27.5,54,43.4,0,12-4.4,22.8-29.3,31.6l-29,10.4c-4.2,1.4-7.6,3.5-7.6,7.8s2.8,5.5,9.5,5.5l34.8.4c11.6.2,20.5,7.4,20.5,18.4s-6,22-24.4,22Z`,
    `M315.3,109.6c-14.1-15.3.4-32.1,17.8-18l20.5,16.6c3.7,3,6.9,1.8,8.3.4,1.9-1.9,3.2-4.9-.4-9l-10.2-11.8c-7.8-9-11.6-13.6-11.6-20.1,0-8.5,6-14.8,16-14.8,12.7,0,17.6,7.9,17.6,23.3v66.2c0,34-20.3,49.9-58.6,49.9-35.6,0-60-21.2-60-54.7v-57.3c0-19.6,7.2-27.5,20.6-27.5,18.9,0,23.5,20.3,15,32.8l-21.7,32.1c-7.2,10.8-4.8,20.3,5.6,25.6l50.1,25.7c15.2,7.8,24.5,6.7,29.8-.7s1-15.5-3-19.8l-35.8-38.9Z`,
    `M52.3,37.1l25.8-21.2c7.1-5.8,17.7-3.2,20.1,5.1,2.1,6.9-.4,13.6-10.4,15.5l-32.3,6.2c-3.7.7-5.5-3.7-3.2-5.6Z`,
  ];

  constructor() {
    this.sub.add(
      this.themeService.getTextColor$().subscribe(color => {
        this.textColor = color || '#114653';
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}