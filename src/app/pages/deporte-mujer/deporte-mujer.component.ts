import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';

@Component({
  selector: 'app-deporte-mujer',
  imports: [CommonModule, SliderSingleComponent],
  templateUrl: './deporte-mujer.component.html',
  styleUrl: './deporte-mujer.component.css'
})
export class DeporteMujerComponent extends DetailComponentBase implements OnInit {
  deporteMujerImages = [
    'assets/images/deporte-mujer/+dep +mujer 3.jpg',
    'assets/images/deporte-mujer/+dep +mujer calería 2.jpg',
    'assets/images/deporte-mujer/+dep +mujer 7.jpg',
  ];
}
