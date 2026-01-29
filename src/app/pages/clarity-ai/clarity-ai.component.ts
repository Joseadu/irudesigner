import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-clarity-ai',
  imports: [CommonModule, SliderSingleComponent, RecommendedCardsComponent, TranslateModule],
  templateUrl: './clarity-ai.component.html',
  styleUrl: './clarity-ai.component.css'
})
export class ClarityAIComponent extends DetailComponentBase {
  clarityAiImages = [
    'assets/images/clarity-ai/slider1/1.jpg',
    'assets/images/clarity-ai/slider1/2.jpg',
    'assets/images/clarity-ai/slider1/3.jpg',
    'assets/images/clarity-ai/slider1/4.jpg',
    'assets/images/clarity-ai/slider1/5.jpg',
    'assets/images/clarity-ai/slider1/6.jpg',
    'assets/images/clarity-ai/slider1/7.jpg',
    'assets/images/clarity-ai/slider1/8.jpg',
    'assets/images/clarity-ai/slider1/9.jpg',
  ];

  clarityAiImages2 = [
    'assets/images/clarity-ai/slider2/3 carrousel-01.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-02.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-03.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-04.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-05.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-06.jpg',
  ];
  clarityAiImages3 = [
    'assets/images/clarity-ai/1.jpg',
    'assets/images/clarity-ai/2.jpg',
    'assets/images/clarity-ai/3.jpg',
    'assets/images/clarity-ai/4.jpg',
    'assets/images/clarity-ai/5.jpg',
    'assets/images/clarity-ai/6.png',
  ];

  recommendations = [
    {
      title: 'PROJECTS.DAGENHAM.CARD.TITLE',
      description: 'PROJECTS.DAGENHAM.CARD.DESCRIPTION',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'PROJECTS.DEPORTE_MUJER.CARD.TITLE',
      description: 'PROJECTS.DEPORTE_MUJER.CARD.DESCRIPTION',
      imageUrl: 'assets/images/deporte-mujer/pancarta-grande.png',
      url: 'deporte-mujer'
    },
    {
      title: 'PROJECTS.CONCILIO_COMMS.CARD.TITLE',
      description: 'PROJECTS.CONCILIO_COMMS.CARD.DESCRIPTION',
      imageUrl: 'assets/images/concilio/concilio.jpg',
      url: 'concilio'
    }
  ];
}