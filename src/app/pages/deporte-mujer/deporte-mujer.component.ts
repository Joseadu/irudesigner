import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-deporte-mujer',
  imports: [CommonModule, SliderSingleComponent, RecommendedCardsComponent, TranslateModule],
  templateUrl: './deporte-mujer.component.html',
  styleUrl: './deporte-mujer.component.css'
})
export class DeporteMujerComponent extends DetailComponentBase implements OnInit {
  deporteMujerImages = [
    'assets/images/deporte-mujer/+dep +mujer 3.jpg',
    'assets/images/deporte-mujer/+dep +mujer calería 2.jpg',
    'assets/images/deporte-mujer/+dep +mujer 7.jpg',
  ];
  recommendations = [
    {
      title: 'PROJECTS.TOOTING_POLICE_STATION.CARD.TITLE',
      description: 'PROJECTS.TOOTING_POLICE_STATION.CARD.DESCRIPTION',
      imageUrl: 'assets/images/tooting-police-station/tooting.jpg',
      url: 'tooting-police-station'
    },
    {
      title: 'PROJECTS.CLARITY_AI.CARD.TITLE',
      description: 'PROJECTS.CLARITY_AI.CARD.DESCRIPTION',
      imageUrl: 'assets/images/clarity-ai/hero images-07.jpg',
      url: 'clarity-ai'
    },
    {
      title: 'PROJECTS.CONCILIO_COMMS.CARD.TITLE',
      description: 'PROJECTS.CONCILIO_COMMS.CARD.DESCRIPTION',
      imageUrl: 'assets/images/concilio/concilio.jpg',
      url: 'concilio'
    }
  ];
}
