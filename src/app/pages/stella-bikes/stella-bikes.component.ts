import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-stella-bikes',
  imports: [CommonModule, RecommendedCardsComponent],
  templateUrl: './stella-bikes.component.html',
  styleUrl: './stella-bikes.component.css'
})
export class StellaBikesComponent extends DetailComponentBase {

  recommendations = [
    {
      title: 'FORMER TOOTING POLICE STATION',
      description: 'Identidad Visual',
      imageUrl: 'assets/images/tooting-police-station/tooting.jpg',
      url: 'tooting-police-station'
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
      imageUrl: 'assets/images/clarity-ai/cover.jpg',
      url: 'clarity-ai'
    },
  ];
}
