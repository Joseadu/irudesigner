import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-weekend-festival',
  imports: [CommonModule, RecommendedCardsComponent],
  templateUrl: './weekend-festival.component.html',
  styleUrl: './weekend-festival.component.css'
})
export class WeekendFestivalComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'VIA CRUCIS FESTIVAL',
      description: 'Identidad visual y cartelería',
      imageUrl: 'assets/images/via-crucis/via-crucis-300.jpg',
      url: 'festival-via-crucis'
    },
    {
      title: '+DEPORTE +MUJER DIPUTACIÓN DE MÁLAGA',
      description: 'Identidad visual, diseño gráfico, video, fotografía e impresión digital',
      imageUrl: 'assets/images/deporte-mujer/pancarta-grande.png',
      url: 'deporte-mujer'
    },
    {
      title: 'CLARITY AI',
      description: 'Rebranding, diseño UI/UX, diseño gráfico, diseño editorial y motion graphics',
      imageUrl: 'assets/images/clarity-ai/hero images-07.jpg',
      url: 'clarity-ai'
    },
  ];

}
