import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RecommendedCardsComponent } from '../../shared/recommended-cards/recommended-cards.component';

@Component({
  selector: 'app-barkers-of-kengsington',
  imports: [CommonModule, RecommendedCardsComponent, TranslateModule],
  templateUrl: './barkers-of-kengsington.component.html',
  styleUrl: './barkers-of-kengsington.component.css',
})
export class BarkersOfKengsingtonComponent extends DetailComponentBase implements OnInit {


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
      title: 'CONCILIO COMMUNICATIONS',
      description: 'Rebranding y diseño UX/UI',
      imageUrl: 'assets/images/concilio/concilio.jpg',
      url: 'concilio'
    }
  ];

}
