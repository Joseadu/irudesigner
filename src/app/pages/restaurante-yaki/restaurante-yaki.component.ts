import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-restaurante-yaki',
  imports: [CommonModule, RecommendedCardsComponent],
  templateUrl: './restaurante-yaki.component.html',
  styleUrl: './restaurante-yaki.component.css'
})
export class RestauranteYakiComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'DAGENHAM GREEN',
      description: 'Diseño gráfico y diseño UI/UX',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'HOTEL TEATRO ALAMEDA MÁLAGA',
      description: 'Branding',
      imageUrl: 'assets/images/hotel-alameda/portada.png',
      url: 'hotel-alameda'
    },
    {
      title: 'WEEKEND FESTIVAL',
      description: 'Branding',
      imageUrl: 'assets/images/weekend/iPhone XR Isometric.jpg',
      url: 'weekend-festival'
    },
  ];

}
