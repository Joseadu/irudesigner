import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-single',
  imports: [CommonModule],
  templateUrl: './slider-single.component.html',
  styleUrl: './slider-single.component.css'
})
export class SliderSingleComponent {
  @Input() images: string[] = []; // 👈 Recibe el array desde fuera

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = this.currentIndex > 0
      ? this.currentIndex - 1
      : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex = this.currentIndex < this.images.length - 1
      ? this.currentIndex + 1
      : 0;
  }
}
