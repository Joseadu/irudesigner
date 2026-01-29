import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-concilio',
  imports: [CommonModule, RecommendedCardsComponent, TranslateModule],
  templateUrl: './concilio.component.html',
  styleUrl: './concilio.component.css',
})
export class ConcilioComponent extends DetailComponentBase implements OnInit {

  recommendations = [
    {
      title: 'PROJECTS.DAGENHAM.CARD.TITLE',
      description: 'PROJECTS.DAGENHAM.CARD.DESCRIPTION',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'PROJECTS.TOOTING_POLICE_STATION.CARD.TITLE',
      description: 'PROJECTS.TOOTING_POLICE_STATION.CARD.DESCRIPTION',
      imageUrl: 'assets/images/tooting-police-station/tooting.jpg',
      url: 'tooting-police-station'
    },
    {
      title: 'PROJECTS.BARKERS_OF_KENSINGTON.CARD.TITLE',
      description: 'PROJECTS.BARKERS_OF_KENSINGTON.CARD.DESCRIPTION',
      imageUrl: 'assets/images/barkers/barkers-600.jpg',
      url: 'barkers-of-kensington'
    }
  ];

}
