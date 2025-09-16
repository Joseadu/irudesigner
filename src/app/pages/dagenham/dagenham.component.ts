import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-dagenham',
  imports: [
    CommonModule,
    SliderSingleComponent,
    RecommendedCardsComponent
  ],
  templateUrl: './dagenham.component.html',
  styleUrl: './dagenham.component.css'
})
export class DagenhamComponent extends DetailComponentBase implements OnInit {
  dagenhamImages = [
    'assets/images/dagenham/cartel 1.jpg',
    'assets/images/dagenham/cartel 2.jpg',
    'assets/images/dagenham/cartel 3.jpg',
  ];

  recommendations = [
    {
      title: 'CONCILIO COMMUNICATIONS',
      description: 'Rebranding y Diseño UX/UI',
      imageUrl: 'assets/images/concilio/concilio.jpg',
      url: 'concilio'
    },
    {
      title: 'FORMER TOOTING POLICE STATION',
      description: 'Identidad Visual',
      imageUrl: 'assets/images/tooting-police-station/tooting.jpg',
      url: 'tooting-police-station'
    },
    {
      title: 'CLARITY AI',
      description: 'Rebranding, diseño UI/UX, diseño gráfico, diseño editorial y motion graphics',
      imageUrl: 'assets/images/clarity-ai/cover.jpg',
      url: 'clarity-ai'
    }
  ];
}
