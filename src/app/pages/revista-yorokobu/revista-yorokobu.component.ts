import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-revista-yorokobu',
  imports: [CommonModule, RecommendedCardsComponent],
  templateUrl: './revista-yorokobu.component.html',
  styleUrl: './revista-yorokobu.component.css'
})
export class RevistaYorokobuComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'VIA CRUCIS FESTIVAL',
      description: 'Identidad visual y cartelería',
      imageUrl: 'assets/images/via-crucis/via-crucis-200.jpg',
      url: 'festival-via-crucis'
    },
    {
      title: 'STELLA',
      description: 'Diseño editorial',
      imageUrl: 'assets/images/stella/urban-bikes.png',
      url: 'stella-bikes'
    },
    {
      title: 'YAKI',
      description: 'Branding, diseño gráfico, packaging e ilustración',
      imageUrl: 'assets/images/yaki/restaurante-yaki.png',
      url: 'restaurante-yaki'
    }
  ];

}
