import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';

@Component({
  selector: 'app-tooting-police-station',
  imports: [
    CommonModule,
    SliderSingleComponent
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
}