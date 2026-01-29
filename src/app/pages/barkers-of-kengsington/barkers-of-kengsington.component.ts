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
      title: 'PROJECTS.DAGENHAM.CARD.TITLE',
      description: 'PROJECTS.DAGENHAM.CARD.DESCRIPTION',
      imageUrl: 'assets/images/dagenham/dagenham.jpg',
      url: 'dagenham'
    },
    {
      title: 'PROJECTS.TOOTING_POLICE_STATION.CARD.TITLE',
      description: 'PROJECTS.TOOTING_POLICE_STATION.CARD.DESCRIPTION',
      imageUrl: 'assets/images/tooting-police-station/tooting.jpg',
      url: 'tooting-police-station'
    },
    {
      title: 'PROJECTS.CONCILIO_COMMS.CARD.TITLE',
      description: 'PROJECTS.CONCILIO_COMMS.CARD.DESCRIPTION',
      imageUrl: 'assets/images/concilio/concilio.jpg',
      url: 'concilio'
    }
  ];

}
