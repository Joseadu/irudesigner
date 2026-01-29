import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-weekend-festival',
  imports: [CommonModule, RecommendedCardsComponent, TranslateModule],
  templateUrl: './weekend-festival.component.html',
  styleUrl: './weekend-festival.component.css'
})
export class WeekendFestivalComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'PROJECTS.VIA_CRUCIS.CARD.TITLE',
      description: 'PROJECTS.VIA_CRUCIS.CARD.DESCRIPTION',
      imageUrl: 'assets/images/via-crucis/via-crucis-300.jpg',
      url: 'festival-via-crucis'
    },
    {
      title: 'PROJECTS.DEPORTE_MUJER.CARD.TITLE',
      description: 'PROJECTS.DEPORTE_MUJER.CARD.DESCRIPTION',
      imageUrl: 'assets/images/deporte-mujer/pancarta-grande.png',
      url: 'deporte-mujer'
    },
    {
      title: 'PROJECTS.CLARITY_AI.CARD.TITLE',
      description: 'PROJECTS.CLARITY_AI.CARD.DESCRIPTION',
      imageUrl: 'assets/images/clarity-ai/hero images-07.jpg',
      url: 'clarity-ai'
    },
  ];

}
