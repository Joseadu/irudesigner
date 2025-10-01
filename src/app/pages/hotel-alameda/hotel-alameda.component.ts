import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-hotel-alameda',
  imports: [CommonModule, RecommendedCardsComponent],
  templateUrl: './hotel-alameda.component.html',
  styleUrl: './hotel-alameda.component.css'
})
export class HotelAlamedaComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'DAGENHAM GREEN',
      description: 'Diseño gráfico y diseño UI/UX',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'CLARITY AI',
      description: 'Rebranding, diseño UI/UX, diseño gráfico, diseño editorial y motion graphics',
      imageUrl: 'assets/images/clarity-ai/hero images-07.jpg',
      url: 'clarity-ai'
    },
    {
      title: '+DEPORTE +MUJER DIPUTACIÓN DE MÁLAGA',
      description: 'Identidad visual, diseño gráfico, video, fotografía e impresión digital',
      imageUrl: 'assets/images/deporte-mujer/pancarta-grande.png',
      url: 'deporte-mujer'
    },
  ];

}
