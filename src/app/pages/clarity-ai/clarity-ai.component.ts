import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';
import { SliderSingleComponent } from '../../shared/slider-single/slider-single.component';

@Component({
  selector: 'app-clarity-ai',
  imports: [CommonModule, SliderSingleComponent],
  templateUrl: './clarity-ai.component.html',
  styleUrl: './clarity-ai.component.css'
})
export class ClarityAIComponent extends DetailComponentBase {
  clarityAiImages = [
    'assets/images/clarity-ai/slider1/1.jpg',
    'assets/images/clarity-ai/slider1/2.jpg',
    'assets/images/clarity-ai/slider1/3.jpg',
    'assets/images/clarity-ai/slider1/4.jpg',
    'assets/images/clarity-ai/slider1/5.jpg',
    'assets/images/clarity-ai/slider1/6.jpg',
    'assets/images/clarity-ai/slider1/7.jpg',
    'assets/images/clarity-ai/slider1/8.jpg',
    'assets/images/clarity-ai/slider1/9.jpg',
  ];
  
  clarityAiImages2 = [
    'assets/images/clarity-ai/slider2/3 carrousel-01.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-02.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-03.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-04.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-05.jpg',
    'assets/images/clarity-ai/slider2/3 carrousel-06.jpg',
  ];
}