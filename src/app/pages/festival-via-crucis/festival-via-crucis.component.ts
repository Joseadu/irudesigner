import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-festival-via-crucis',
  imports: [CommonModule, RecommendedCardsComponent, TranslateModule],
  templateUrl: './festival-via-crucis.component.html',
  styleUrl: './festival-via-crucis.component.css'
})
export class FestivalViaCrucisComponent extends DetailComponentBase implements OnInit {

  recommendations = [
    {
      title: 'PROJECTS.WEEKEND_FESTIVAL.CARD.TITLE',
      description: 'PROJECTS.WEEKEND_FESTIVAL.CARD.DESCRIPTION',
      imageUrl: 'assets/images/weekend/iPhone XR Isometric.jpg',
      url: 'weekend-festival'
    },
    {
      title: 'PROJECTS.HOTEL_ALAMEDA.CARD.TITLE',
      description: 'PROJECTS.HOTEL_ALAMEDA.CARD.DESCRIPTION',
      imageUrl: 'assets/images/hotel-alameda/portada.png',
      url: 'hotel-alameda'
    },
    {
      title: 'PROJECTS.CLARITY_AI.CARD.TITLE',
      description: 'PROJECTS.CLARITY_AI.CARD.DESCRIPTION',
      imageUrl: 'assets/images/clarity-ai/hero images-07.jpg',
      url: 'clarity-ai'
    },
  ];
}
