import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';

@Component({
  selector: 'app-dagenham',
  imports: [
    CommonModule,
    SliderSingleComponent
  ],
  templateUrl: './dagenham.component.html',
  styleUrl: './dagenham.component.css'
})
export class DagenhamComponent extends DetailComponentBase implements OnInit {
  dagenhamImages = [
    'assets/images/dagenham/cartel 1.jpg',
    'assets/images/dagenham/cartel 2.jpg',
    'assets/images/dagenham/cartel 3.jpg',
  ];
}
