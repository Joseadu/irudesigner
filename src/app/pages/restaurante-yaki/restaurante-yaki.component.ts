import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-restaurante-yaki',
  imports: [CommonModule, RecommendedCardsComponent, TranslateModule],
  templateUrl: './restaurante-yaki.component.html',
  styleUrl: './restaurante-yaki.component.css'
})
export class RestauranteYakiComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'PROJECTS.DAGENHAM.CARD.TITLE',
      description: 'PROJECTS.DAGENHAM.CARD.DESCRIPTION',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'PROJECTS.HOTEL_ALAMEDA.CARD.TITLE',
      description: 'PROJECTS.HOTEL_ALAMEDA.CARD.DESCRIPTION',
      imageUrl: 'assets/images/hotel-alameda/portada.png',
      url: 'hotel-alameda'
    },
    {
      title: 'PROJECTS.WEEKEND_FESTIVAL.CARD.TITLE',
      description: 'PROJECTS.WEEKEND_FESTIVAL.CARD.DESCRIPTION',
      imageUrl: 'assets/images/weekend/iPhone XR Isometric.jpg',
      url: 'weekend-festival'
    },
  ];

}
