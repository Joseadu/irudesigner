import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-tooting-police-station',
  imports: [
    CommonModule,
    SliderSingleComponent,
    RecommendedCardsComponent,
    TranslateModule
  ],
  templateUrl: './tooting-police-station.component.html',
  styleUrl: './tooting-police-station.component.css'
})
export class TootingPoliceStationComponent extends DetailComponentBase implements OnInit {
  tootingImages = [
    'assets/images/tooting-police-station/galeria-16.jpg',
    'assets/images/tooting-police-station/galeria-17.jpg',
    'assets/images/tooting-police-station/galeria-18.jpg',
  ];

  recommendations = [
    {
      title: 'DAGENHAM GREEN',
      description: 'Diseño gráfico y diseño UI/UX',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'CONCILIO COMMUNICATIONS',
      description: 'Rebranding y diseño UX/UI',
      imageUrl: 'assets/images/concilio/concilio.jpg',
      url: 'concilio'
    },
    {
      title: 'BARKERS OF KENSINGTON BUILDING',
      description: 'Identidad visual',
      imageUrl: 'assets/images/barkers/barkers-600.jpg',
      url: 'barkers-of-kensington'
    }
  ];
}