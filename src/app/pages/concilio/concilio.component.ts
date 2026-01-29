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
      title: 'DAGENHAM GREEN',
      description: 'Diseño gráfico y diseño UI/UX',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'FORMER TOOTING POLICE STATION',
      description: 'Identidad visual',
      imageUrl: 'assets/images/tooting-police-station/tooting.jpg',
      url: 'tooting-police-station'
    },
    {
      title: 'BARKERS OF KENSINGTON BUILDING',
      description: 'Identidad visual',
      imageUrl: 'assets/images/barkers/barkers-600.jpg',
      url: 'barkers-of-kensington'
    }
  ];

}
