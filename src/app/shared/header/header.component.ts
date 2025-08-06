import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LogoComponent } from '../../core/base/logo.component';
import { ThemeService } from '../../core/services/theme.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
  bgColor = '#F1F7F8';

  ngOnInit() {
    this.sub = this.themeService.getTextColor$().subscribe(color => {
      this.textColor = color || '#114653';
    });

    this.sub.add(
      this.themeService.getBackgroundColor$().subscribe(color => {
        this.bgColor = color || '#F1F7F8';
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}