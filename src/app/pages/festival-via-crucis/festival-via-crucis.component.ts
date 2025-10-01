import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-festival-via-crucis',
  imports: [CommonModule, RecommendedCardsComponent],
  templateUrl: './festival-via-crucis.component.html',
  styleUrl: './festival-via-crucis.component.css'
})
export class FestivalViaCrucisComponent extends DetailComponentBase implements OnInit {

  recommendations = [
    {
      title: 'WEEKEND FESTIVAL',
      description: 'Branding',
      imageUrl: 'assets/images/weekend/iPhone XR Isometric.jpg',
      url: 'weekend-festival'
    },
    {
      title: 'HOTEL TEATRO ALAMEDA MÁLAGA',
      description: 'Branding',
      imageUrl: 'assets/images/hotel-alameda/portada.png',
      url: 'hotel-alameda'
    },
    {
      title: 'CLARITY AI',
      description: 'Rebranding, diseño UI/UX, diseño gráfico, diseño editorial y motion graphics',
      imageUrl: 'assets/images/clarity-ai/hero images-07.jpg',
      url: 'clarity-ai'
    },
  ];
}
