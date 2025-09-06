import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ServicesItemsService } from '../about/services/services-items.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  qhItems: any[] = [];

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
}
