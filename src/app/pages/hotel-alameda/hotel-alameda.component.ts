import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-hotel-alameda',
  imports: [CommonModule, RecommendedCardsComponent, TranslateModule],
  templateUrl: './hotel-alameda.component.html',
  styleUrl: './hotel-alameda.component.css'
})
export class HotelAlamedaComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'PROJECTS.DAGENHAM.CARD.TITLE',
      description: 'PROJECTS.DAGENHAM.CARD.DESCRIPTION',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'PROJECTS.CLARITY_AI.CARD.TITLE',
      description: 'PROJECTS.CLARITY_AI.CARD.DESCRIPTION',
      imageUrl: 'assets/images/clarity-ai/hero images-07.jpg',
      url: 'clarity-ai'
    },
    {
      title: 'PROJECTS.DEPORTE_MUJER.CARD.TITLE',
      description: 'PROJECTS.DEPORTE_MUJER.CARD.DESCRIPTION',
      imageUrl: 'assets/images/deporte-mujer/pancarta-grande.png',
      url: 'deporte-mujer'
    },
  ];

}
