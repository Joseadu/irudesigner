import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-stella-bikes',
  imports: [CommonModule, RecommendedCardsComponent, TranslateModule],
  templateUrl: './stella-bikes.component.html',
  styleUrl: './stella-bikes.component.css'
})
export class StellaBikesComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'PROJECTS.TOOTING_POLICE_STATION.CARD.TITLE',
      description: 'PROJECTS.TOOTING_POLICE_STATION.CARD.DESCRIPTION',
      imageUrl: 'assets/images/tooting-police-station/tooting.jpg',
      url: 'tooting-police-station'
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
